import React, { useRef, useState } from "react";
import loginPagePic from "../../assets/Flying Burger PNG Image - 960x960.png";
import { useValidateSignIn, useValidateSignUp } from "../utils/validation";

const LoginPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const name = useRef(null);
  const email_phNo = useRef(null);
  const password = useRef(null);

  const handleSubmitButton = () => {
    console.log(name);
    console.log(email_phNo);
    console.log(password);

    // Validate the email and password
    const validationResult = name.current
      ? useValidateSignUp(
          name.current.value,
          email_phNo.current.value,
          password.current.value
        )
      : useValidateSignIn(email_phNo.current.value, password.current.value);

    console.log(validationResult);
  };

  const handleToggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-gray-950 to-slate-600">
      <h2 className="text-slate-50 text-3xl font-bold">
        {isSignIn ? "Log In" : "Sign Up"}
      </h2>
      <div className="flex">
        <div className="flex justify-between items-center w-6/12 h-4/6 mx-32 my-32  bg-gradient-to-tl from-gray-900 to-slate-800 border-2 border-slate-600 rounded-2xl">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex-col mx-20 w-full h-4/6"
          >
            {!isSignIn && (
              <div className="">
                <input
                  ref={name}
                  type="text"
                  placeHolder="Full Name"
                  className="px-6 w-full h-12 border-2 border-slate-600 rounded-md bg-slate-800 text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:bg-slate-800"
                ></input>
              </div>
            )}

            <div className="">
              <input
                ref={email_phNo}
                type="text"
                placeHolder="Email / Phone no."
                className="px-6 w-full h-12 border-2 border-slate-600 rounded-md bg-slate-800 text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:bg-slate-800"
              ></input>
            </div>
            <div className="">
              <input
                ref={password}
                type="password"
                placeHolder="Password"
                className="px-6 w-full h-12 border-2 border-slate-600 rounded-md bg-slate-800 focus:bg-slate-800"
              ></input>
            </div>
            <button
              onClick={() => handleSubmitButton()}
              className="w-full h-12 bg-slate-50 rounded-md"
            >
              {isSignIn ? "Log In" : "Sign Up"}
            </button>
            <p
              onClick={() => handleToggleSignIn()}
              className="text-red-600 cursor-pointer"
            >
              {isSignIn
                ? "New to EcoFood? Sign Up Now.."
                : "Already a User? Log In Here.."}
            </p>
          </form>
        </div>
        <div className="w-8/12 flex justify-center items-center">
          <img className="w-8/12" src={loginPagePic} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
