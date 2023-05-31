import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleButton from "../components/GoogleButton";
import { useRef, useState } from "react";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const handleChangeMail = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail)
    }

    const handleChangePassword = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword)
    }

    const checkMail = () => {
        const check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        !check.test(email) ? setErrorEmail(true) : setErrorEmail(false);
        email.length === 0 ? setErrorEmail(false) : setErrorEmail(true)
    }

    const checkPassword = (e) => {
        const check = e.target.value;
        check.length < 8 ? setErrorPassword(true) : setErrorPassword(false)
        check.length === 0 ? setErrorPassword(false) : setErrorPassword(true)
    }

    return (
        <GoogleOAuthProvider clientId="1082519138882-s29tv6ul25qplnneoi1u907rpsgcrhct.apps.googleusercontent.com">
            <div className="w-full h-screen flex justify-center bg-gradient-to-r from-fuchsia-600 to-sky-500 mx-auto">
                <div className="flex flex-row w-[80%]">
                    <div className="w-full flex flex-row p-10 ">
                        <div className="bg-login-background bg-center bg-cover bg-no-repeat w-[50%] rounded-l-lg"></div>
                        <div className="flex flex-col justify-center items-center bg-white w-[50%] rounded-r-lg shadow-[0px_20px_20px_10px_#00000030] gap-5 p-10">
                            <img src="./src/assets/logo.png" alt="logo-eveny" className="flex w-38 justify-center" />
                            <GoogleButton />
                            <div className="flex flex-col gap-2">
                                <label>E-mail</label>
                                <input value={email} onChange={handleChangeMail} onBlur={checkMail} type="email" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-xl py-3 px-5 hover:border-purple-500 active:border-purple-500" placeholder="Inserisci e-mail" />
                                {errorEmail ? <span className="text-red-500 font-bold text-xs">Inserisci un indirizzo e-mail valido</span> : ''}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label>Password</label>
                                <input type="password" value={password} onChange={handleChangePassword} onBlur={checkPassword} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-xl py-3 px-5 hover:border-purple-500" placeholder="Inserisci password" />
                                {errorPassword ? <span className="text-red-500 inline font-bold text-xs">La password deve contenere almeno 8 caratteri</span> : ''}
                            </div>
                            <button className="bg-purple-500 py-3 px-5 rounded-xl text-white hover:bg-purple-600">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </GoogleOAuthProvider>
    )
}

export default Login;