import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import menu from '../../public/images/menu.svg';
import Link from 'next/link';
import Image from 'next/image';
import wallet from '../../public/images/wallet.svg';

const Navbar = ({ data, handleConnect }) => {

    const [toogle, setToggle] = useState(true);


    return (
        <div className={`bg-[#FFFAF2] h-[100px]`}>
            <nav className={`flex justify-around w-full items-center h-full`}>
                <h1 className={`${styles.textH1}`}>
                    DOLA
                    <span className={`${styles.textH1}`} style={{ color: '#2F725A' }}>
                        BIT.
                    </span>
                </h1>
                {toogle ?
                    <ul className={`${styles.nav}`}>
                        <li>
                            <p className={`${styles.textP}`}>
                                Services
                            </p>
                        </li>
                        <li>
                            <p className={`${styles.textP}`}>
                                About us
                            </p>
                        </li>
                        <li>
                            <p className={`${styles.textP}`}>
                                Learn more
                            </p>
                        </li>
                        <Link href='/login'>
                            <li>
                                <button className={`${styles.btnNav}`}   >
                                    Join waitlist
                                </button>
                            </li>
                        </Link>
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
