import Link from 'next/link';
import React from 'react';
import styles from '../styles/GetCash.module.css';


const GetCash = () => {
    return (
        <div className={`flex flex-col justify-center items-center gap-[50px] ${styles.get} `}>
            <h1 className={`${styles.textH1}`}>
                Get the best rates from USD to cash
                around the world.
            </h1>
            <input type="text" placeholder='Enter your email to be the first to use our services' className={`${styles.textInput} p-5`} />
            <Link href='/Explore'>
                <button className={`${styles.btn}`}>
                    Join waitlist
                </button>
            </Link>
        </div>
    );
};

export default GetCash;