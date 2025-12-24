// inkrush/components/ui/signinbuttons.jsx
import React from 'react'
import { serverSignInGoogle, serverSignInFacebook, serverSignInInstagram, } from "../actions/signinactions";
import { FcGoogle } from "react-icons/fc";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import Link from "next/link";

const buttonMeta = [
    { Icon: FcGoogle, Action: serverSignInGoogle, text: "Google" },
]

const SignInForm = () => {
    
    const buttonStylesClasses = "relative max-w-xs min-w-54 tracking-widest shadow-stone-500 py-2 rounded-2xl flex justify-center items-center gap-1.5 transition-all duration-200 ease-in shadow hover:scale-105 active:scale-95 active:shadow-inner";

    return (
        <form className="relative w-full text-sm flex flex-col justify-center items-center gap-6">
            <p className='relative text-xl'>Sign in with</p>
            {buttonMeta.map(({ Icon, Action, text }, index) => (
                <button
                    key={index}
                    formAction={Action}
                    type="submit"
                    className={buttonStylesClasses}
                >
                    {text} <Icon className="text-xl" />
                </button>
            ))}
            <p className='relative w-full px-8'>Not registered? <Link href="/registration" className="underline italic">Click here</Link> to create your account now.</p>
        </form>
    )
}

export default SignInForm