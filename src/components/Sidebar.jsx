import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import img from "./assets/solana-footer.png";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import {GlowWalletAdapter, PhantomWalletAdapter, SlopeWalletAdapter, SolflareWalletAdapter,TorusWalletAdapter
} from "@solana/wallet-adapter-wallets";
import '@solana/wallet-adapter-react-ui/styles.css';
import { useMemo } from 'react';

const Sidebar = ({setIsOpen}) => {

  const handleClick = () => {
    setIsOpen((prev) => (!prev));
  }

  const endpoint = "http://localhost:8899";

  const wallets = useMemo( () => [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter(),
    new GlowWalletAdapter(),
    new SlopeWalletAdapter(),
    new TorusWalletAdapter()
  ], []);

  return (
    <div className='sidebar'>
      <h1 className='title'>Solminter</h1>
      <div className='connect-btn' >
        <ConnectionProvider endpoint={ endpoint }>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider><WalletMultiButton /></WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
    </div>
     
      <div className='list'>
        <ul>
        
        <li><Link to='/token-management'><i class="p15 fa-solid fa-circle-dot"></i>Token management</Link></li>
        <li><Link to='/apply-for-ido'><i class="p15 fa-solid fa-jet-fighter"></i>Apply for IDO</Link></li>
        <li><Link to='/nft'><i class="p15 fa-brands fa-square-reddit"></i>NFT</Link></li>
        <li><a href='https://docs.solminter.com/' target='_blank'><i class="p15 fa-solid fa-book"></i>Documentation</a></li>
       </ul>
      </div>
      <div className='contact'>
        <p>Connect with us</p>
      </div>
      <div className='logo'>
        <i class="fa-2x fa-brands fa-twitter"></i>
        <i class="fa-2x fa-brands fa-telegram"></i>
    </div>
      <div className='footer'>
        <img src={img} alt="img" />
        <p>© Solminter 2021</p>
      </div>
    </div>
  )
}

export default Sidebar
