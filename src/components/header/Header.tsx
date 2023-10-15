import React from 'react'

const Header = () => {
    return (
        <div className='flex justify-between'>
            <h1 className='italic text-lg font-bold'>
                VISA APPLICATION FORM
            </h1>
            <div className='font-bold text-center flex flex-col items-center justify-center'>
                <h1 className='text-3xl'>LOGO IMAGE</h1>
                <div className='text-sm'>
                    <p>EMBASSY OF THE REPUBLIC OF INDONESIA</p>
                    <p>ISLAMABAD-PAKISTAN</p>
                </div>
            </div>
            <div className='text-xs'>
                <p className='space-x-4'>
                    <span>Phone</span>
                    <span>:92(51) 2832017-20</span>
                </p>
                <p className='space-x-4'>
                    <span>Fax</span>
                    <span>:92(51) 2832017-20</span>
                </p>
                <p className='space-x-4'>
                    <span>Web</span>
                    <span>:https://kemiu.go.id/islamabad</span>
                </p>
                <p className='space-x-4'>
                    <span>Email</span>
                    <span>:info@indonesian-embassy.pk</span>
                </p>
                <p className='space-x-4'>
                    <span>Address</span>
                    <span>:Diplomatic Enclave I, Street 5 G-5, Islamabad</span>
                </p>
            </div>
        </div>
    )
}

export default Header