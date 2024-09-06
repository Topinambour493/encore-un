import React from "react";

function Home() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center p-8">
      {/* Section de présentation de l'événement */}
      <div className="max-w-4xl text-center space-y-8">
      <img src="https://ecole-ipssi.com/wp-content/uploads/2021/10/cropped-ipssi-favicon.png" alt="" width="100"/>
        {/* Titre de l'événement */}
        <h1 className="text-4xl lg:text-6xl font-bold text-blue-gray-800">
          Nom des participants
        </h1>
        <div className="">
          <ul>
            <li>Loic Jy</li>
            <li>Corentin Jezierski</li>
            <li>Mamadou Oury Balde</li>
          </ul>
        </div>

        {/* Date et Heure */}
        <div className="space-y-2">
          <p className="text-2xl text-blue-gray-700">
            Date : <span className="text-blue-gray-700">06 Octobre 2024</span>
          </p>
        </div>

        {/* Bouton d'inscription */}
        <button
          className="bg-blue-500 text-white font-semibold px-8 py-4 rounded-lg mt-6 hover:bg-blue-600 transition"
        >
          S'inscrire Maintenant
        </button>
      </div>
    </div>
  );
}

export default Home;
