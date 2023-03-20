import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import menu from '../../public/images/menu.svg';
import Link from 'next/link';
import Image from 'next/image';
import wallet from '../../public/images/wallet.svg';

const Navbar = ({ data, handleConnect }) => {

    const [toogle, setToggle] = useState(true);


    return (
        <div className={`bg-[#07050F] h-[120px]`}>
            <nav className={`flex justify-around w-full items-center h-full`}>
                <h1 className={`${styles.textH1}`}>
                    CASH
                    <span className={`${styles.textH1}`} style={{ color: '#722F37' }}>
                        BIT.
                    </span>
                </h1>
                {toogle ? 
                <ul className={`${styles.nav}`}>
                    <li>
                        <p className={`${styles.textP}`}>
                            Decentralized Scrow
                        </p>
                    </li>
                    <li>
                        <p className={`${styles.textP}`}>
                            Walletless
                        </p>
                    </li>
                    <li>
                        <p className={`${styles.textP}`}>
                            ZKCash
                        </p>
                    </li>
                    <li>
                        {
                            data != null ?
                                <div className={`${styles.wallet}`}>
                                    <Image src={wallet} alt='wallet' />
                                    <div className='flex'>
                                        <p className={`${styles.adress}`}>
                                            {data.address.slice(0, 4)}...
                                        </p>
                                        <p className={`${styles.adress}`}>
                                            {data.address.slice(38, 42)}
                                        </p>
                                    </div>
                                </div>
                                :
                                <button className={`${styles.btnNav}`} onClick={handleConnect}>
                                    Connect Wallet
                                </button>
                        }
                    </li>
                </ul> : 
                <ul className={`${styles.nav2}`}>
                    <li>
                        <p className={`${styles.textP}`}>
                            Decentralized Scrow
                        </p>
                    </li>
                    <li>
                        <p className={`${styles.textP}`}>
                            Walletless
                        </p>
                    </li>
                    <li>
                        <p className={`${styles.textP}`}>
                            ZKCash
                        </p>
                    </li>
                    <li>
                        <button className={`${styles.btnNav}`}>
                            Connect Wallet
                        </button>
                    </li>
                </ul>}
                <Image src={menu} alt="menu" className={`${styles.menu}`} onClick={() => setToggle(!toogle)} />
            </nav>
        </div>
    );
};

export default Navbar;
