import React, { useEffect, useState } from 'react';
import styles from '../styles/Main.module.css';
import vector1 from '../../public/images/vector1.svg'
import vector2 from '../../public/images/vector2.svg';
import vector3 from '../../public/images/vector3.svg';
import GetCash from './GetCash';
import Image from 'next/image';
const Select = ({data}) => {

    return (
        <div className={`${styles.main2}`}>
            <div className={`${styles.main}`}>
                <div className={`${styles.options}`}>
                    <div className={`${styles.optionIcon}`}>
                        <Image src={vector1} alt="" />
                        <p className={`${styles.textP}`}>
                            Get cash
                        </p>
                    </div>
                    <div className={`${styles.optionIcon}`}>
                        <Image src={vector2} alt="" />
                        <p className={`${styles.textP}`}>
                            Buy crypto
                        </p>
                    </div>
                    <div className={`${styles.optionIcon}`}>
                        <Image src={vector3} alt="" />
                        <p className={`${styles.textP}`}>
                            Be a partner
                        </p>
                    </div>
                </div>
               <GetCash data={data}/>
            </div>
        </div>
    );
};

export default Select;