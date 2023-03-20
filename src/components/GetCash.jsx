import Link from 'next/link';
import React from 'react';
import styles from '../styles/GetCash.module.css';


const GetCash = () => {
    return (
        <div className={`${styles.get}`}>
            <div className={`flex flex-col justify-center items-center ${styles.cash}`}>
                <h1 className={`${styles.textH1}`}>
                    Get the best rates from USD to cash <br />
                    around the world.
                </h1>
                <input type="text" placeholder='Enter your location zone to explore trade options' className={`${styles.textInput}`} />
            </div>
            <Link href='/Explore'>
                <button className={`${styles.btn} mt-[64px]`}>
                    Explore options
                </button>
            </Link>
        </div>
    );
};

export default GetCash;