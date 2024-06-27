import React, { useState, useEffect } from "react";
import { auth } from "src/utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removerUser } from "src/utils/userSlice";
import { LOGO, USER_AVATAR } from "src/utils/const";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
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
    <div className="absolute text-white flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black z-50">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-4">
          <img className="w-10 h-10" src={USER_AVATAR} alt="usericon" />
          <button onClick={handleSignout}>(SignOut)</button>
        </div>
      )}
    </div>
  );
};

export default Header;
