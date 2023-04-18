import React, { useState } from 'react';
import loginimg from '../../../../public/images/loginimg.svg';
import back from '../../../../public/images/back.svg';
import msjConfirm from '../../../../public/images/msjConfirm.svg';
import Image from 'next/image';
import Link from 'next/link';

const index = () => {

    const [recovery, setRecovery] = useState(false)

    return (
        <div className='text-black1 flex'>
            <Image src={loginimg} className='h-[100vh]' />
            <div className='w-full flex flex-col items-center justify-start gap-[24px] mt-[112px]'>
                <h1 className='text5'>
                    DOLA
                    <span className='text5' style={{ color: '#2F725A' }}>
                        BIT.
                    </span>
                </h1>
                <h1 className='text4'>
                    Sh*t happens!
                </h1>
                {!recovery && (
                    <div className='flex flex-col gap-[24px]'>
                        <div className='sign h-[290px] gap-[25px]'>
                            <div>
                                <p className='text2 text-gray3'>
                                    Reset Password
                                </p>
                            </div>
                            <p className='text1 text-gray3 text-center'>
                                Enter the email associated with your account and we'll <br /> send you the instructions to reset your password.
                            </p>
                            <input type="text" placeholder='Email' className='input1' />
                            <button className='btnSign' onClick={() => setRecovery(true)}>
                                Send recovery mail
                            </button>
                        </div>
                        <div className='flex justify-center w-full gap-[16px]'>
                            <h1 className='text1 text-gray2'>
                                Don’t have an account?
                            </h1>
                            <Link href='/signup'>
                                <h1 className='text2 text-green1'>
                                    Sign up
                                </h1>
                            </Link>
                        </div>
                    </div>
                )}
                {recovery && (
                    <div>
                        <div className='sign h-[290px] gap-[20px]'>
                            <p className='text1 text-gray3 text-center'>
                                We have sent you an email with instructions to reset <br /> your password.
                            </p>
                            <Image src={msjConfirm} alt='Confirm' />
                            <p className='text1 text-gray3'>
                                If you don't receive the email in the next 10 minutes, <br /> check your spam folder or <span className='text1 text-green1'>try another email account</span>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default index;