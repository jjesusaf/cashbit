import React, { useEffect, useState } from 'react';
import Select from './Select';
import Navbar from './Navbar';
import Background from '../../public/images/Background.jpeg'
import Image from 'next/image';
import { IntmaxWalletSigner } from 'webmax';

const App = () => {

    const [data, setData] = useState(null);

    const signer = new IntmaxWalletSigner();

    const handleConnect = async () => {
        const chainId = 80001;
        const account = await signer.connectToAccount();
        if (chainId != 80001) {
            const account2 = await signer.switchChain(chainId);
            return (account2)
        }
        setData(account);

    }

    useEffect(()=>{
        return(handleConnect)
    },[])




    console.log(data)

    return (
        <>
            <Image src={Background} alt="background" className={`fixed top-0 left-0 z-[-1] back`} />
            <div>
                <Navbar data={data} handleConnect={handleConnect} />
                <Select data={data} />
            </div>
        </>
    );
};

export default App;