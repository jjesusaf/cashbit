import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/NavExplore.module.css';
import glass from '../../public/images/glass.svg';
import vector4 from '../../public/images/vector4.svg';
import vector5 from '../../public/images/vector5.svg';


const NavExplore = () => {
    return (
        <div className={`bg-[#07050F] h-[120px]`}>
            <nav className={`flex justify-around w-full items-center h-full flex-wrap`}>
                <Link href='/'>
                    <h1 className={`${styles.textH1}`}>
                        CASH
                        <span className={`${styles.textH1}`} style={{ color: '#722F37' }}>
                            BIT.
                        </span>
                    </h1>
                </Link>
                <ul className={`${styles.nav} flex-wrap`}>
                    <li className={`relative`}>
                        <input type="text" className={`${styles.input} z-[100]`} />
                        <Image src={glass} alt='glass' className={`absolute bottom-[20px] right-[21.69px]`} />
                    </li>
                    <li >
                        <select className={`${styles.select}`} name="" id="">
                            <option disabled selected>
                                Rate
                            </option>
                        </select>
                    </li>
                    <li >
                        <select className={`${styles.select}`} name="" id="">
                            <option disabled selected>
                                Distance to me
                            </option>
                        </select>
                    </li>
                    <li >
                        <select className={`${styles.select}`} name="" id="">
                            <option disabled selected className={`${styles.option}`}>
                                Currency
                            </option>
                        </select>
                    </li>
                </ul>
                <Image src={vector4} alt='vector4' />
                <Image src={vector5} alt='vector5' />
            </nav>
        </div>
    );
};

export default NavExplore;