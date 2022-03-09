import React, {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  signinUser,
  selectUser,
  selectError,
  // selectStatus,
} from "../features/user/userSlice";
const Login = () => {
  const dispatch = useDispatch();
  const Home = useNavigate();
  const getUser = useSelector(selectUser);
  const getUserError = useSelector(selectError);
  // const getUserStatus = useSelector(selectStatus);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let email = e.target.elements.email?.value;
    let password = e.target.elements.password?.value;
    let formData = { identifier: email, password: password };
    dispatch(signinUser(formData));
  };

  useEffect(() => {
    if (getUser) {
      ReDirectToHome();
    }
  }, [getUser, getUserError]);

  const ReDirectToHome = () => {
    setTimeout(() => {
      Home.push("/");
    }, 3000);
  };
  return (
    <div className="h-screen flex bg-gray-bg1">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Log in
        </h1>

        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="email"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="password"
              placeholder="Your Password"
            />
          </div>

          <div className="flex justify-center items-center mt-6">
            <button
              className={`bg-green py-2 px-4 text-sm text-black rounded border border-green focus:outline-none focus:border-green-dark`}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
