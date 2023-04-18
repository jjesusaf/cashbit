import React, { useState } from 'react';
import Sign2 from '@/components/Sign2';
import Sign3 from '@/components/Sign3';

const index = () => {

    const [step1, setStep1] = useState(true);
    const [step2, setStep2] = useState(false);
    const [step3, setStep3] = useState(false);

    const nextStep1 = () => {
        setStep1(false)
        setStep2(true)
    }

    const nextStep2 = () => {
        setStep2(false);
        setStep3(true)
    }

    return (
        <>
            {step1 && (
                <div className='flexColCenter text-black1 gap-[20px] mt-[24.5px] mb-[44px]'>
                    <div className='flexColCenter h-[180px] gap-[30px]'>
                        <h1 className='text5'>
                            DOLA
                            <span className='text5' style={{ color: '#2F725A' }}>
                                BIT.
                            </span>
                        </h1>
                        <div className='flexRowCenter gap-[80px]'>
                            <div className='flexColCenter text3 h-[101px] gap-[16px]'>
                                <p className='circlesm'>
                                    1
                                </p>
                                <p className='text3'>
                                    Account
                                </p>
                            </div>
                            <div className='flexColCenter text3 h-[101px] gap-[16px]'>
                                <p className='circlesm border-none text-gray1'>
                                    2
                                </p>
                                <p className='text-gray1'>
                                    Verification
                                </p>
                            </div>
                            <div className='flexColCenter text3 h-[101px] gap-[16px]'>
                                <p className='circlesm border-none text-gray1'>
                                    3
                                </p>
                                <p className='text-gray1'>
                                    Information
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flexColCenter gap-[20px]'>
                        <h1 className='text4'>
                            Create a new account
                        </h1>
                        <div className='sign h-[460px]'>
                            <div className='text2 font-semibold flex flex-col gap-[8px]'>
                                <p>
                                    Enter email*
                                </p>
                                <div>
                                    <input type="text" className='input1 text1 text-gray1' placeholder='example@dolabit.io' />
                                </div>
                            </div>
                            <div className='text2 font-semibold flex flex-col gap-[8px]'>
                                <p>
                                    Create password*
                                </p>
                                <div>
                                    <input type="text" className='input1 text1 text-gray1' placeholder='********' />
                                </div>
                            </div>
                            <div className='text2 font-semibold flex flex-col gap-[8px]'>
                                <p>
                                    Repeat password*
                                </p>
                                <div>
                                    <input type="text" className='input1 text1 text-gray1' placeholder='********' />
                                </div>
                            </div>
                            <div className='text2 font-semibold flex flex-col gap-[8px]'>
                                <p>
                                    How did you find us?
                                </p>
                                <div>
                                    <input type="text" className='input1 text1 text-gray1' placeholder='Choose an option' />
                                </div>
                            </div>
                        </div>
                        <div className='flexRowCenter gap-[20px]'>
                            <input type="checkbox" className='checkbox' />
                            <p className='text1 w-[290px]'>
                                I have read and agree to the DolaBit’s <br /><span className=' font-semibold'>Terms of Service and Privacy Policy.</span>
                            </p>
                        </div>
                        <div className='flexRowCenter gap-[20px]'>
                            <input type="checkbox" className='checkbox' />
                            <p className='text1 w-[290px]'>
                                I want to receive the news of DolaBit and <br /> its partners.<span className=' font-semibold'>(optional)</span>
                            </p>
                        </div>
                        <button className='btnSign w-[420px] text3' onClick={() => nextStep1()}>
                            Continue
                        </button>
                    </div>
                </div>
            )}
            {step2 && (
                <Sign2 nextStep2={nextStep2} />
            )}
            {step3 && (
                <Sign3 />
            )}
        </>

    );
};

export default index;