import { useRef, useState } from "react";
import { LOGIN_PAGE_BACKGROUND, USER_ICON } from "../utils/constants";
import Header from "./Header";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import validateFormInput from "../utils/validate";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

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

    const message = validateFormInput(email, password);
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
          const user = userCredential.user;
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
        <img src={LOGIN_PAGE_BACKGROUND} alt="Login-page-background-image" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black mx-auto my-36 p-12 text-white bg-opacity-80 w-3/12 right-0 left-0 rounded-md "
      >
        <h1 className="font-bold text-3xl py-4">Sign {isSignUp ? "Up" : "In"}</h1>
        {isSignUp && (
          <input
            ref={nameInputRef}
            type="text"
            placeholder="Enter name"
            className="p-4 my-4 w-full bg-gray-900 bg-opacity-60 border border-gray-500"
          />
        )}
        <input
          ref={emailInputRef}
          type="email"
          placeholder="Enter email"
          className="p-4 my-4 w-full bg-gray-900 bg-opacity-60 border border-gray-500"
        />
        <input
          ref={passwordInputRef}
          type="password"
          placeholder="Enter password"
          className="p-4 my-4 w-full bg-gray-900 bg-opacity-60 border border-gray-500"
        />
        <button className=" bg-red-600 w-full p-2 my-2 rounded-lg" onClick={handleSubmit}>
          Sign {isSignUp ? "Up" : "In"}
        </button>
        <span className="font-bold text-red-500">{errorMessage}</span>
        <div className="my-4">
          <span>{isSignUp ? "Already having account! " : "New to Netflix? "}</span>
          <span className="font-bold cursor-pointer hover:underline" onClick={handleSignInAndOutButton}>
            Sign {isSignUp ? "In" : "Up"} now
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
