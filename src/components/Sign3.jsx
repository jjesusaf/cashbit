import React from 'react';

const Sign3 = () => {
    return (
        <div className='flexColCenter text-black1 gap-[20px] mt-[24.5px] mb-[83px]'>
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
                <div className='note flexColCenter gap-[20px]'>
                    <div>
                        <p className='text1 font-bold'>
                            Important note!
                        </p>
                    </div>
                    <p className='text1'>
                        Make sure your personal information here matches <br />
                        exactly with your ID or Passport.
                    </p>
                </div>
                <h1 className='text4'>
                    Finish your registration
                </h1>
                <div className='flexRowCenter gap-[40px]'>
                    <div className='sign h-[580px]'>
                        <p className='text2 font-semibold'>
                            Personal information
                        </p>
                        <div className='flex flex-col gap-[8px]'>
                            <p className='text2 text-left font-semibold'>
                                First name
                            </p>
                            <input type="text" className='input1' />
                        </div>
                        <div className='flex flex-col gap-[8px]'>
                            <p className='text2 font-semibold'>
                                Last name
                            </p>
                            <input type="text" className='input1' />
                        </div>
                        <div className='flex flex-col gap-[8px]'>
                            <p className='text2 font-semibold'>
                                Country of birth
                            </p>
                            <input type="text" className='input1' />
                        </div>
                        <div className='flex flex-col gap-[8px]'>
                            <p className='text2 font-semibold'>
                                Nationality
                            </p>
                            <input type="text" className='input1' />
                        </div>
                        <div className='flex flex-col gap-[8px]'>
                            <p className='text2 font-semibold'>
                                Gender
                            </p>
                            <input type="text" className='input1' />
                        </div>
                    </div>
                    <div className='sign h-[580px]'>
                        <p className='text2 font-semibold'>
                            Personal information
                        </p>
                        <div className='flex flex-col gap-[8px]'>
                            <p className='text2 text-left font-semibold'>
                                First name
                            </p>
                            <input type="text" className='input1' />
                        </div>
                        <div className='flex flex-col gap-[8px]'>
                            <p className='text2 font-semibold'>
                                Last name
                            </p>
                            <input type="text" className='input1' />
                        </div>
                        <div className='flex flex-col gap-[8px]'>
                            <p className='text2 font-semibold'>
                                Country of birth
                            </p>
                            <input type="text" className='input1' />
                        </div>
                        <div className='flex flex-col gap-[8px]'>
                            <p className='text2 font-semibold'>
                                Nationality
                            </p>
                            <input type="text" className='input1' />
                        </div>
                        <div className='flex flex-col gap-[8px]'>
                            <p className='text2 font-semibold'>
                                Gender
                            </p>
                            <input type="text" className='input1' />
                        </div>
                    </div>
                </div>
                <button className='btnSign w-[420px] text3'>
                    Create account
                </button>
            </div>
        </div>
    );
};

export default Sign3;