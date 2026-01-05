import React from 'react'
import Container from '../Component/Container'
import BreadCumb from '../Component/BreadCumb'
import { ToastContainer, toast, Bounce } from 'react-toastify';

const Account = () => {
    return (
        <Container>
            <BreadCumb />
            <div className='h-[500px] flex justify-center items-center'>
                <h1 className='text-3xl font-Poppins font-bold'>Account Page is Under Construction...</h1>
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
        </Container>
    )  
}     

export default Account
