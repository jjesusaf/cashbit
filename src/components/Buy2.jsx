import React from 'react';
import styles from '../styles/GetCash.module.css';
import google from '../../public/images/google.svg';
import twitter from '../../public/images/twitter.svg';
import Image from 'next/image';
import Link from 'next/link';

const Buy2 = () => {
    return (
        <div className='flex flex-col items-center justify-evenly h-full'>
            <h1 className={`${styles.b2tittle}`}>
                Welcome back!
            </h1>
            <div className={`${styles.sign} flex flex-col items-center justify-center gap-[14px]`}>
                <h1>
                    Sign in with Social Networks
                </h1>
                <div className='flex justify-around w-full'>
                    <Image src={google} alt='Google' />
                    <Image src={twitter} alt='Twitter' />
                </div>
            </div>
            <div className={`${styles.signemail} flex flex-col items-center justify-center gap-[14px]`}>
                <h1>
                    Sign in with Email
                </h1>
                <input type="text" placeholder='Email' className={`${styles.form}`} />
                <input type="text" className={`${styles.form}`} />
                <button className={`${styles.formbutton}`}>
                    Log in
                </button>
            </div>
            <div className='flex justify-center w-full gap-[16px]'>
                <h1>
                    Don’t have an account?
                </h1>
                    <h1>
                        Sign up
                    </h1>
            </div>

        </div>
    );
};

export default Buy2;