import React, { useState } from 'react'
import singin from '../assets/singin.png'
import { ToastContainer, toast, Bounce } from 'react-toastify';

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function heandleClick() {
        if (!email || !password) {
            toast.error('Please fill in all fields!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });   
        } else {  
            toast.success('Log in successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });   
        }
    }

    return (
        <div className='mt-14.5 md:flex gap-[130px] font-Poppins'>
            <div className='md:w-[50%] hidden md:block'><img src={singin} alt="" className='w-full' /></div>
            <div className='md:w-[50%] flex flex-col md:mt-[130px] mt-10 md:px-0 px-5'>
                <h2 className='font-Inter font-medium text-4xl text-black leading-7.5 tracking-[4%] '>Log in to Exclusive</h2>
                <p className='md:mt-6 mt-3'>Enter your details below</p>
                <div className='md:w-[370px] w-full'>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email' className='block w-full border-b md:mt-12 mt-6 md:py-3 py-1 focus:outline-none' />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' className='block w-full border-b md:mt-10 mt-5 md:py-3 py-1 focus:outline-none' />
                    <div className='flex justify-between items-center mt-10'>
                        <button onClick={heandleClick} className='md:px-12 px-10 lg:py-4 py-3 text-white bg-primary hover:bg-[#E07575] hover:text-black font-Poppins font-medium lg:text-[16px] text-sm leading-[24px] rounded-sm cursor-pointer'>Log In</button>
                        <p className='text-primary cursor-pointer'>Forget Password?</p>
                    </div>
                </div>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    transition={Bounce}
                />
            </div>
        </div>
    )
}

export default Login
