import React from 'react';
import styles from '../styles/GetCash.module.css';
import Image from 'next/image';
import chain from '../../public/images/connect.svg';
import mxn from '../../public/images/mxn.svg';
import usdc from '../../public/images/usdc.svg';

const Buy1 = ({ changeBuy1 }) => {

    return (
        <div className='flex flex-col gap-[24px]'>
            <div className={`${styles.network} flex items-center flex-col justify-center gap-[10px]`}>
                <h1 className='flex w-full pl-[33px] '>
                    Network
                </h1>
                <Image src={chain} className=' bg-[#FFFAF2]' alt='Network' />
            </div>
            <div className={`${styles.network} flex items-center flex-col justify-center gap-[10px]`}>
                <div className='flex justify-between w-full pl-[33px] pr-[34px]'>
                    <h1 className='flex w-full'>
                        You pay
                    </h1>
                    <Image src={mxn} alt='Network' />
                </div>
                <h1 className={`${styles.buy1num} flex w-full pl-[33px]`}>
                    1950
                </h1>

            </div>
            <div className={`${styles.network} flex items-center flex-col justify-center gap-[10px]`}>
                <div className='flex justify-between w-full pl-[33px] pr-[34px]'>
                    <h1 className='flex w-full'>
                        You receive
                    </h1>
                    <Image src={usdc} alt='Network' />
                </div>
                <h1 className={`${styles.buy1num} flex w-full pl-[33px]`}>
                    100
                </h1>

            </div>
            <div className={`${styles.network2} flex items-center flex-col justify-center gap-[10px]`}>
                <div className='flex justify-between w-full'>
                    <h1 className='flex' style={{ fontWeight: '500' }}>
                        1 USDC = 19.21 MXN
                    </h1>
                    <h1 className='flex'>

                        MXN $1921.00
                    </h1>

                </div>
                <div className='flex justify-between w-full'>
                    <h1 className='flex' style={{ fontWeight: '500' }}>
                        Operation fee
                    </h1>
                    <h1 className='flex'>
                        MXN $29.00
                    </h1>
                </div>
            </div>

            <button className={`${styles.buy1button}`} onClick={() => changeBuy1()}>
                Proceed to purchase
            </button>
        </div>

    );
};

export default Buy1;