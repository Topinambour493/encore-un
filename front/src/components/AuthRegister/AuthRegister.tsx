import React, { useState } from "react";
import { User } from "../../models";

function AuthRegister() {

  const [newUser, setnewUser] = useState<User>({
    nickname: "",
    email: "",
    password: "",
    statut: {
      statut: "user",
    },
  });

  async function registerUser(newUser: User) {
    try {
      const response = await fetch("http://localhost:3010/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Allow-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(newUser),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="md:px-24 md:py-14 py-8 px-4 bg-white border border-gray-300 shadow-md rounded-lg max-w-lg w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-semibold text-blue-gray-800 mb-4">
            Créez votre compte
          </h1>
          <p className="text-gray-600 text-[18px] font-normal md:max-w-sm mx-auto">
            Rejoignez-nous pour une expérience Web3 sécurisée et rapide.
          </p>
        </div>
        <form className="flex flex-col gap-4 md:mt-8">
          {/* Nom Input */}
          <div>
            <label htmlFor="name" className="block font-medium text-blue-gray-800 mb-2">
              Votre Nom
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Votre nom"
              className="w-full border border-gray-300 focus:border-blue-500 rounded-lg px-4 py-2"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block font-medium text-blue-gray-800 mb-2">
              Votre Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="name@mail.com"
              className="w-full border border-gray-300 focus:border-blue-500 rounded-lg px-4 py-2"
            />
          </div>

          {/* Mot de passe Input */}
          <div>
            <label htmlFor="password" className="block font-medium text-blue-gray-800 mb-2">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="********"
              className="w-full border border-gray-300 focus:border-blue-500 rounded-lg px-4 py-2"
            />
          </div>

          {/* Register Button */}
          <button className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 font-medium">
            Créer un compte
          </button>

          {/* Google Authentication */}
          <button className="flex items-center justify-center w-full border border-gray-300 rounded-lg px-4 py-2 font-medium text-gray-700 hover:bg-gray-50">
            <img
              src="https://www.material-tailwind.com/logos/logo-google.png"
              alt="google"
              className="h-6 w-6 mr-2"
            />
            S'inscrire avec Google
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
            Authentification par Wallet
          </button>

          {/* Terms and Conditions */}
          <p className="text-center text-gray-600 text-sm mt-4">
            En créant un compte, vous acceptez nos{" "}
            <a href="/login" className="text-gray-900 underline">
              Termes d'utilisation
            </a>{" "}
            &{" "}
            <a href="/login" className="text-gray-900 underline">
              Politique de confidentialité
            </a>.
          </p>
        </form>
      </div>
    </div>
  );
}

export default AuthRegister;
