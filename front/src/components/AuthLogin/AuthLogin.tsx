import React from "react";

function AuthLogin() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="md:px-24 md:py-14 py-8 px-4 bg-white border border-gray-300 shadow-md rounded-lg max-w-lg w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-semibold text-blue-gray-800 mb-4">
            Web3 Login Simplified
          </h1>
          <p className="text-gray-600 text-[18px] font-normal md:max-w-sm mx-auto">
            Enjoy quick and secure access to your accounts on various Web3 platforms.
          </p>
        </div>
        <form className="flex flex-col gap-4 md:mt-8">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block font-medium text-blue-gray-800 mb-2">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="name@mail.com"
              className="w-full border border-gray-300 focus:border-blue-500 rounded-lg px-4 py-2"
            />
          </div>

          {/* Continue Button */}
          <button className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 font-medium">
            Continue
          </button>

          {/* Google Authentication */}
          <button className="flex items-center justify-center w-full border border-gray-300 rounded-lg px-4 py-2 font-medium text-gray-700 hover:bg-gray-50">
            <img
              src="https://www.material-tailwind.com/logos/logo-google.png"
              alt="google"
              className="h-6 w-6 mr-2"
            />
            Sign in with Google
          </button>

          {/* Wallet Authentication */}
          <button className="flex items-center justify-center w-full border border-gray-300 rounded-lg px-4 py-2 font-medium text-gray-700 hover:bg-gray-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 4.75h4.5m2.25 1.5v12a2.25 2.25 0 01-2.25 2.25H9.75A2.25 2.25 0 017.5 18.25V6.25A2.25 2.25 0 019.75 4.75h4.5z"
              />
            </svg>
            Wallet Authentication
          </button>

          {/* Terms and Conditions */}
          <p className="text-center text-gray-600 text-sm mt-4">
            Upon signing in, you consent to abide by our{" "}
            <a href="/home" className="text-gray-900 underline">
              Terms of Service
            </a>{" "}
            &{" "}
            <a href="/home" className="text-gray-900 underline">
              Privacy Policy
            </a>.
          </p>
        </form>
      </div>
    </div>
  );
}

export default AuthLogin;
