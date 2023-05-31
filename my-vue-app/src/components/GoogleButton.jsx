import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import logoGoogle from '../assets/Logo-Google.png'

const GoogleButton = () => {
    const login = useGoogleLogin({
        onSuccess: async (response) => {
            try {
                const res = await axios.get(
                    "https://www.googleapis.com/oauth2/v3/userinfo",
                    {
                        headers: {
                            Authorization: `Bearer ${response.access_token}`,
                        },
                    }
                );
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        },
    });

    return (
        <div className="flex">
            <button type="button" onClick={login} className="flex items-center gap-3 border-2 border-gray-200 py-2 px-4 rounded-3xl hover:bg-gray-200">
                <img width={25} src={logoGoogle} alt="google-icon" className="inline" />
                <span>Accedi con Google</span>
            </button>
        </div>
    );
};

export default GoogleButton;