import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "src/utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "src/utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "src/utils/userSlice";
import { USER_AVATAR } from "src/utils/const";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();
  const toggleSignupForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = (e) => {
    //Validate form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    //Sign in / signup logic

    if (!isSignInForm) {
      //Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:  USER_AVATAR ,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  displayName: displayName,
                  email: email,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
              setErrorMessage(errorCode + "-" + errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="bg-cover bg-center bg-black md:bg-none absolute">
        <img
          className="h-screen md:bg-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="bg-img"
        />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="p-12 bg-black bg-opacity-75 absolute w-[90%] md:w-1/3 mx-auto my-36 right-0 left-0"
      >
        <div className="flex flex-col justify-center text-white">
          <h1 className=" py-2 px-1 m-1 font-bold text-4xl">
            {isSignInForm ? "Sign in" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-2 my-4 bg-gray-700 rounded-lg"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-2 my-4 bg-gray-700 rounded-lg"
          />
          <input
            ref={password}
            type="password"
            placeholder="Enter your password"
            className="p-2 my-4 bg-gray-700 rounded-lg"
          />
          <p className="text-red-600 font-bold text-lg">{errorMessage}</p>
          <button
            className="p-2 my-4 bg-red-700 rounded-lg"
            type="submit"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign in" : "Sign Up"}
          </button>
          <span className="self-center">OR</span>
          <button
            className="p-2 my-4 bg-gray-600 bg-opacity-80 rounded-lg"
            type="submit"
          >
            Use a sign in code
          </button>
          <button className="p-2 my-1">Forgot password?</button>
          {/* <div className=" p-2 flex gap-2">
            <input checked="checked" className="w-5 h-5" type="chekbox" />{" "}
            Remember me{" "}
          </div> */}
        </div>
        <p
          className="px-2 text-white my-4 text-md cursor-pointer"
          onClick={toggleSignupForm}
        >
          {isSignInForm
            ? `New to netflix? Sign up now.`
            : `Already an user. Sign in now`}
        </p>
      </form>
    </div>
  );
};

export default Login;
