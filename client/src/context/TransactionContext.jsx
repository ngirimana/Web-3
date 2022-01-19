import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { contractABI, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext()

const { ethereum } = window;
window.ethereum;

const getEthreumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.signer();
    const transactionContract = new ethers.Contract(contractAddress,contractABI,signer);
    console.log({
        provider, 
        signer,
        transactionContract
    })
}

export const TransactionProvider = ({ children }) => {
    //1:43:07
    return (
        <TransactionContext.Provider value={{value:'test'}}>
            {children}
        </TransactionContext.Provider>
    );
}