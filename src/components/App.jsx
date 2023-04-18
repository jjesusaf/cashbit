import React, { useEffect, useState } from 'react';
import Select from './Select';
import Navbar from './Navbar';
import Background from '../../public/images/Background.jpeg'
import Image from 'next/image';
import { IntmaxWalletSigner } from 'webmax';
import GetCash from './GetCash';
const App = () => {

    const [data, setData] = useState(null);

    const handleConnect = async () => {

        const signer = new IntmaxWalletSigner();
        const chainId = 80001;
        const account = await signer.connectToAccount({ extraKeys: ["publicKey"] });
        if (account.chainId != 80001) {
            const account2 = await signer.switchChain(chainId);
            return (setData(account))
        }

        setData(account);

    }

    console.log(data)


    return (
        <>
            <div style={{ backgroundImage: `url(${Background.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <Navbar data={data} handleConnect={handleConnect} />
                <div className='flex w-full justify-center mt-[52px] flex-col items-center pb-[28px]'>
                    <Select />
                </div>
            </div>
        </>
    );
};

export default App;