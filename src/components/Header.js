import { useDispatch, useSelector } from "react-redux";
import { NETFLIX_LOGO, USER_ICON } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";

const Header = () => {
  const user = useSelector((store) => store.user);
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

  return (
    <div className="absolute bg-gradient-to-b from-black z-10 px-8 py-2 w-full">
      <div className="flex justify-between items-center">
        <img className="w-44" src={NETFLIX_LOGO} alt="logo" />
        {user && (
          <div className="flex">
            <img src={USER_ICON} className="w-6 h-6" alt="usericon" />
            <span className="ml-2 text-white font-bold">{user?.name}</span>
            <span className="ml-4 text-white font-bold hover:underline cursor-pointer" onClick={handleSignOut}>
              Sign Out
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
