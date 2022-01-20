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
       const [currentAccount, setCurrentAccount] = useState("");
        const checkIfWalletIsConnected = async () => {
            try {
                if (!ethereum) return alert('Please install metamask');
                const accounts = await ethereum.request({ method: 'eth_accounts' });
                if (accounts.length) {
                    setCurrentAccount(accounts[0])
                } else {
                    console.log('No account found')
                }
                console.log(accounts)
            } catch (error) {
                console.log(error)
            }
        }
        const connectWallet = async () => {
            try {
                if (!ethereum) return alert("Please install metamask");
                const accounts = await ethereum.request({
                    method: "eth_requestAccounts",
                });
                setCurrentAccount(accounts[0]);
                 console.log("===========accounts===========",accounts);
            } catch (error) {
                console.log(error);
                throw new Error("No ethereum object.")
            }
        }
    
        useEffect(() => {
            checkIfWalletIsConnected();
        }, [])
        return (
            <TransactionContext.Provider value={{ connectWallet,currentAccount }}>
                {children}
            </TransactionContext.Provider>
        );
    }
