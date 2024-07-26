import { useRef, useState } from "react";
import { BACKGROUND_URL, USER_ICON } from "../utils/constants";
import Header from "./Header";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import validateFormInput from "../utils/validate";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/store/userSlice";
import lang from "../utils/lunguageConstants";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const languageKey = useSelector((store) => store.config.language);

  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSignInAndOutButton = () => {
    emailInputRef.current.value = null;
    passwordInputRef.current.value = null;
    setErrorMessage(null);
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = () => {
    setErrorMessage(null);
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    const message = validateFormInput(email, password, languageKey);
    if (message) {
      setErrorMessage(message);
      return;
    }

    if (isSignUp) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: nameInputRef.current.value,
            photoURL: USER_ICON,
          })
            .then(() => {
              signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed in
                  const { displayName, email } = userCredential.user;
                  dispatch(addUser({ name: displayName, email }));
                  navigate("/browse");
                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  setErrorMessage(errorCode + "- " + errorMessage);
                });
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          // Signed up
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "- " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const { displayName, email } = userCredential.user;
          dispatch(addUser({ name: displayName, email }));
          // ...
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "- " + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BACKGROUND_URL} alt="Login-page-background-image" className="h-screen object-cover w-screen" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black mx-auto my-36 p-12 text-white bg-opacity-80 min-w-[300px] max-w-[400px] right-0 left-0 rounded-md "
      >
        <h1 className="font-bold text-3xl py-4"> {isSignUp ? lang[languageKey].signUp : lang[languageKey].signIn}</h1>
        {isSignUp && (
          <input
            ref={nameInputRef}
            type="text"
            placeholder={lang[languageKey].enterName}
            className="p-4 my-4 w-full bg-gray-900 bg-opacity-60 border border-gray-500"
          />
        )}
        <input
          ref={emailInputRef}
          type="email"
          placeholder={lang[languageKey].enterEmail}
          className="p-4 my-4 w-full bg-gray-900 bg-opacity-60 border border-gray-500"
        />
        <input
          ref={passwordInputRef}
          type="password"
          placeholder={lang[languageKey].enterPassword}
          className="p-4 my-4 w-full bg-gray-900 bg-opacity-60 border border-gray-500"
        />
        <button className=" bg-red-600 w-full p-2 my-2 rounded-lg" onClick={handleSubmit}>
          {isSignUp ? lang[languageKey].signUp : lang[languageKey].signIn}
        </button>
        <span className="font-bold text-red-500">{errorMessage}</span>
        <div className="my-4">
          <span>{isSignUp ? lang[languageKey].alreadyHavingAccount : lang[languageKey].newToNetflix}</span>
          <span className="font-bold cursor-pointer hover:underline" onClick={handleSignInAndOutButton}>
            {isSignUp ? lang[languageKey].signInNow : lang[languageKey].signUpNow}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
