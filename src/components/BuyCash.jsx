import React, { useState } from 'react';
import styles from '../styles/GetCash.module.css';
import Link from 'next/link';
import Buy1 from './Buy1';
import Buy2 from './Buy2';

const BuyCash = () => {
    const [buy, setBuy] = useState(true);
    const [buy1, setBuy1] = useState(false);
    const [buy2, setBuy2] = useState(false)



    const changeBuy = () => {
        setBuy(false)
        setBuy1(true)
    }

    const changeBuy1 = () => {
        setBuy2(true)
        setBuy1(false)
    }




    return (
        <div>
            {
                buy && (
                    <div className={`flex flex-col justify-center items-center gap-[50px] ${styles.get} `}>
                        <h1 className={`${styles.textH1}`}>
                            Buy and send to your friends or family everywhere.
                        </h1>
                        <input type="text" placeholder='Enter your email to be the first to use our services' className={`${styles.textInput} p-5`} />
                        <button className={`${styles.btn}`} onClick={() => changeBuy()}>
                            Join waitlist
                        </button>
                    </div>)
            }
            {
                buy1 && (
                    <div className={`flex flex-col justify-center items-center ${styles.get} `}>
                        <Buy1 changeBuy1={changeBuy1} />
                    </div>
                )
            }
            {
                buy2 && (
                    <div className={`flex flex-col justify-center items-center ${styles.get} `}>
                        <Buy2 />
                    </div>
                )
            }
        </div>
    );
};

export default BuyCash;