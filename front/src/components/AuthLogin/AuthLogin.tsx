import React, { useEffect } from "react";
import {useNavigate} from "react-router-dom";

function AuthLogin() {
    const navigate = useNavigate()

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    async function submitForm() {
        try {
            const response = await fetch("http://localhost:3010/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Allow-Control-Allow-Origin": "*"
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });
            if (response.ok) {
                let tokens = await response.json()
                localStorage.setItem('tokens', JSON.stringify(tokens));
                navigate('/')
            } else {
                console.log(await response.json())
                alert("Erreur de connexion");
            }
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="md:px-24 md:py-14 py-8 px-4 bg-white border border-gray-300 shadow-md rounded-lg max-w-lg w-full">
                <div className="text-center mb-8">
                    <h1 className="text-3xl lg:text-4xl font-semibold text-blue-gray-800 mb-4">
                        Welcome Back !
                    </h1>
                    <p className="text-gray-600 text-[18px] font-normal md:max-w-sm mx-auto">
                        Enjoy quick and secure access to your accounts on encore-un.
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
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>


                    <div>
                        <label htmlFor="password" className="block font-medium text-blue-gray-800 mb-2">
                            Your password
                        </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            className="w-full border border-gray-300 focus:border-blue-500 rounded-lg px-4 py-2"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>


                    {/* Continue Button */}
                    <button className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 font-medium" onClick={(e) => { e.preventDefault();submitForm() }}>
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
