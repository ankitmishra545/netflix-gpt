import { useDispatch, useSelector } from "react-redux";
import { NETFLIX_LOGO, USER_ICON } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/store/userSlice";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { toggleGPTSearch } from "../utils/store/gptSlice";
import lang, { SUPPORTED_LAUNGUAGES } from "../utils/lunguageConstants";
import { changeLunguage } from "../utils/store/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  const languageKey = useSelector((store) => store.config.language);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        const { displayName, email } = user;
        dispatch(addUser({ name: displayName, email }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    }; // unsubscribing when components unmount
  }, []);

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearch());
  };

  const handleChangeLanguage = (e) => {
    dispatch(changeLunguage(e.target.value));
  };

  return (
    <div className="absolute bg-gradient-to-b from-black z-10 px-8 py-2 w-full">
      <div className="flex justify-between items-center">
        <img className="w-44" src={NETFLIX_LOGO} alt="logo" />
        <div className="flex">
          <select
            className="p-2 m-2 bg-purple-600 text-white rounded-lg hover:opacity-70"
            onChange={handleChangeLanguage}
          >
            {SUPPORTED_LAUNGUAGES.map((language) => (
              <option key={language.identifier} value={language.identifier}>
                {language.name}
              </option>
            ))}
          </select>
          {user && (
            <div className="flex items-center  text-white">
              <button className="bg-purple-600 rounded-lg mx-4 p-2" onClick={handleGPTSearchClick}>
                {showGPTSearch ? "Home" : "GPT Search"}
              </button>
              <img src={USER_ICON} className="w-6 h-6" alt="usericon" />
              <span className="ml-2  font-bold">{user?.name}</span>
              <span className="ml-4  font-bold hover:underline cursor-pointer" onClick={handleSignOut}>
                {lang[languageKey].signOut}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
