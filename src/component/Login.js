import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utills/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "./Firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utills/userSlice";
import { PROFILE_PIC, BG_IMG } from "../utills/constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PROFILE_PIC,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const { uid, email, displayName, photoURL } = userCredential.user;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="fixed top-0 left-0 w-screen h-screen">
        <img
          className="w-full h-full object-cover object-center"
          src={BG_IMG}
          alt="BG-IMG"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative z-10 w-full sm:w-3/5 md:w-1/3 h-auto p-6 bg-black mt-10 mx-auto rounded-lg bg-opacity-90 text-white shadow-lg"
      >
        <h1 className="font-bold text-2xl sm:text-3xl py-1 text-center">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <p className="text-red-500 font-bold text-lg py-2 text-center">{errorMessage}</p>
        <button
          className="p-2 my-4 w-full bg-red-700 rounded-lg hover:bg-red-800 transition-colors duration-300"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <button
          className="p-2 my-4 w-full bg-googleBlue rounded-lg hover:bg-googleBlue-800 transition-colors duration-300"
          onClick={handleGoogleLogin}
        >
          {isSignInForm ? "Sign In with Google" : "Sign Up with Google"}
        </button>
        <p className="py-2 text-center cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>

    </div>
  );
};

export default Login;
