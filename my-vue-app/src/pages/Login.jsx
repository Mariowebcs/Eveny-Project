import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleButton from "../components/GoogleButton";
import { useRef, useState } from "react";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);

    const handleChangeMail = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail)
    }

    const handleChangePassword = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword)
    }

    const checkMail = () => {
        const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        !checkEmail.test(email) ? setErrorEmail(true) : setErrorEmail(false)
    }

    const checkPassword = (e) => {
        const checkPassword = e.target.value;
        checkPassword.length < 8 ? setErrorPassword(true) : setErrorPassword(false);        
    }

    return (
        <GoogleOAuthProvider clientId="1082519138882-s29tv6ul25qplnneoi1u907rpsgcrhct.apps.googleusercontent.com">
            <div className="w-full h-screen flex justify-center bg-gradient-to-r from-fuchsia-600 to-sky-500 bg-center bg-cover bg-no-repeat">
                <div className="flex flex-row w-[80%] max-[768px]:w-[95%]">
                    <div className="w-full flex flex-row p-10 max-[760px]:px-1 max-[760px]:my-2">
                        <div className="bg-login-background bg-center bg-cover bg-no-repeat w-[50%] rounded-l-lg max-[760px]:hidden"></div>
                            <div className=" max-[760px]:w-full max-[760px]:rounded-l-lg  flex flex-col justify-center items-center bg-white w-[50%] rounded-r-lg shadow-[0px_20px_20px_10px_#00000030] gap-5 p-10">
                                <img src="./src/assets/logo.png" alt ="logo-eveny" className="flex w-38 justify-center" />
                                <GoogleButton />
                                <div className="flex flex-col gap-2">
                                    <label>E-mail</label>
                                    <input value={email} onChange={handleChangeMail} onBlur={checkMail} type="email" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-xl py-3 px-5 hover:border-purple-500 active:border-purple-500" placeholder="Inserisci e-mail" />
                                    {errorEmail ? <span className="text-red-500 font-bold text-xs">Inserisci un indirizzo e-mail valido</span> : ''}
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label>Password</label>
                                    <input type="password" value={password} onBlur={checkPassword} onChange={handleChangePassword} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-xl py-3 px-5 hover:border-purple-500" placeholder="Inserisci password" />
                                    {errorPassword ? <span className="text-red-500 inline font-bold text-xs">La password deve contenere almeno 8 caratteri</span> : ''}
                                </div>
                                <button className={`${!errorEmail && !errorPassword ? ' text-white bg-purple-500 p-5 pointer-events-auto px-4 py-3 rounded-2xl' : 'bg-gray-500 pointer-events-none px-4 py-3 rounded-2xl'}`}>Login</button>
                            </div>
                    </div>
                </div>
            </div>
        </GoogleOAuthProvider>
    )
}

export default Login;