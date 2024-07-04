import React, { useState, useEffect } from "react";
import { auth } from "src/utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removerUser } from "src/utils/userSlice";
import { LOGO, USER_AVATAR } from "src/utils/const";
import { toggleGptSearchView } from "src/utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [showSignOut, setShowSignOut] = useState(false);


  const handleGptSaerchView = () => {
    //Toggle GPT search view
    dispatch(toggleGptSearchView());
  };

  const buttonVal = useSelector((store) => store.gpt.showGptSearch);
  const handleLogoClick = () =>{
    dispatch(toggleGptSearchView(false))
  }

  const handleSignOutButton = () => {
    setShowSignOut(!showSignOut);
  };
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removerUser());
        navigate("/");
      }
    });
    //unscubscribe when component unmount.
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute text-white flex flex-col md:flex-row justify-between w-screen px-8 py-2 bg-gradient-to-b from-black z-50">
      <img
        className="w-44 mx-auto md:mx-0"
        src={process.env.PUBLIC_URL + "/skstyle.png"}
        alt="logo"
        onClick={handleLogoClick}
      />
      {user && (
        <div className="flex justify-center items-center p-2">
          <button
            onClick={handleGptSaerchView}
            className="p-2 m-4 rounded-lg border-dashed border-blue-200 border-2 bg-purple-500"
          >
            {buttonVal ? "Homepage" : "GPT-Movies"}
          </button>
          <div className="flex flex-col">
            <img
              onClick={handleSignOutButton}
              className="w-10 h-10"
              src={USER_AVATAR}
              alt="usericon"
            />
            {showSignOut && <button onClick={handleSignout}>(SignOut)</button>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
