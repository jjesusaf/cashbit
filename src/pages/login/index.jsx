import React from 'react';
import loginimg from '../../../public/images/loginimg.svg';
import blurlogin from '../../../public/images/blurlogin.svg'
import google from '../../../public/images/google.svg';
import twitter from '../../../public/images/twitter.svg';
import Image from 'next/image';
import Link from 'next/link';

const Login = () => {
    return (
        <div className='text-black1 flex'>
            <Image src={loginimg} className='h-[100vh]' />
            <div className='w-full flex flex-col items-center justify-center gap-[24px]'>
                <h1 className='text5'>
                    DOLA
                    <span className='text5' style={{ color: '#2F725A' }}>
                        BIT.
                    </span>
                </h1>
                <h1 className='text4'>
                    Welcome back!
                </h1>
                <div className='sign'>
                    <h1>
                        Sign in with Social Networks
                    </h1>
                    <div className='flex justify-around w-full'>
                        <Image src={google} alt='Google' />
                        <Image src={twitter} alt='Twitter' />
                    </div>
                </div>
                <div className='sign h-[320px] gap-[20px]'>
                    <h1>
                        Sign in with Email
                    </h1>
                    <input type="text" placeholder='Email' className='input1' />
                    <input type="text" className='input1' placeholder='Password' />
                    <div className='flex w-full justify-end pr-[50px]'>
                        <Link href='/login/forgot'>
                            <p className='text2 text-gray1 border-b-[1px] border-b-gray1'>
                                Forgot password?
                            </p>
                        </Link>
                    </div>
                    <button className='btnSign'>
                        Log in
                    </button>
                </div>
                <div className='flex justify-center w-full gap-[16px]'>
                    <h1 className='text1 text-gray2'>
                        Don’t have an account?
                    </h1>
                    <Link href='/signup'>
                        <h1 className='text2 text-green1'>
                            Sign up
                        </h1>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;