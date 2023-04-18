import React from 'react';

const Sign2 = ({nextStep2}) => {
    return (
        <div className='flexColCenter text-black1 gap-[20px] mt-[24.5px] mb-[200px]'>
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
                    Check your inbox
                </h1>
                <div className='sign h-[200px] w-[420px] gap-[52px] text2'>
                    <p>
                        We sent you a code to <span className='font-semibold'> example@dolabit.io</span>
                    </p>
                    <div className='flexRowCenter gap-[20px]'>
                        <input type="text" className='checkbox' />
                        <input type="text" className='checkbox' />
                        <input type="text" className='checkbox' />
                        <input type="text" className='checkbox' />
                        <input type="text" className='checkbox' />
                        <input type="text" className='checkbox' />
                    </div>
                </div>
                <button className='btnSign w-[420px] text3' onClick={() => nextStep2()}>
                    Next
                </button>
                <p className='text2 text-green1 font-semibold'>
                    Resent code available at 40 seconds
                </p>
            </div>
        </div>
    );
};

export default Sign2;