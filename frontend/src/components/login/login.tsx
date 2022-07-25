import React, { useState } from "react";
import Modal from "../Modal/Modal";

function Login() {
  const [showLogin, setShowLogin] = useState(true);
  const [showLoginBtn, setLoginButton] = useState(true);

  return (
    <>
      {showLogin ? (
        <div
          id="modal"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
          aria-modal="true"
          role="dialog"
        ></div>
      ) : null}

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full justify-center"
        onClick={() => setShowLogin(true)}
      >
        Login to Add Employees
      </button>
    </>
  );
}

export default Login;
