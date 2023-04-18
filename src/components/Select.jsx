import React, { useEffect, useState } from 'react';
import styles from '../styles/Main.module.css';
import vector1 from '../../public/images/vector1.svg'
import vector2 from '../../public/images/vector2.svg';
import vector3 from '../../public/images/vector3.svg';
import Image from 'next/image';
import GetCash from './GetCash';
import BuyCash from './BuyCash';


const Select = ({ data }) => {

    const [getcash, setGetcash] = useState(false);
    const [buycrypto, setBuycrypto] = useState(true);


    const changeBuy = () => {
        setBuycrypto(true);
        setGetcash(false);

    }

    const changeGet = () => {
        setGetcash(true);
        setBuycrypto(false);
    }


    return (
        <>
            <div className={`${styles.main} flex justify-around items-center`}>
                <button className={`${styles.optionIcon}`} onClick={() => changeBuy()}>
                    <Image src={vector2} alt="" />
                    <p className={`${styles.textP}`}>
                        Buy crypto
                    </p>
                </button>
                <button className={`${styles.optionIcon}`} onClick={() => changeGet()}>
                    <Image src={vector1} alt="" />
                    <p className={`${styles.textP}`}>
                        Get cash
                    </p>
                </button>

                <button className={`${styles.optionIcon}`} disabled>
                    <Image src={vector3} alt="" />
                    <p className={`${styles.textP}`}>
                        Be a partner
                    </p>
                </button>
            </div>
            {
                getcash && <GetCash />
            }
            {
                buycrypto && <BuyCash />
            }
        </>

    );
};

export default Select;