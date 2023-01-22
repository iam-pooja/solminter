import React from 'react';
import './Wallet.css';

const WalletList = ({isOpen}) => {
  return (
    <div className='wallet-list' style={isOpen ? {display: 'block'} : {display: 'none'}}>
      <h3>Connect to Wallet</h3>
      <ul>
        <li>Phantom<i class="fa-brands fa-bitcoin"></i></li>
        <li>Solflare<i class="fa-brands fa-bitcoin"></i></li>
        <li>Torus<i class="fa-brands fa-bitcoin"></i></li>
        <li>Ledger<i class="fa-brands fa-bitcoin"></i></li>
        <li>Solong<i class="fa-brands fa-bitcoin"></i></li>
        <li>MathWallet<i class="fa-brands fa-bitcoin"></i></li>
        <li>Sollet<i class="fa-brands fa-bitcoin"></i></li>
        <li>Sollet(Extension)<i class="fa-brands fa-bitcoin"></i></li>
        <li>Coin98<i class="fa-brands fa-bitcoin"></i></li>
        <li>Bitpie<i class="fa-brands fa-bitcoin"></i></li>
        <li>Slope<i class="fa-brands fa-bitcoin"></i></li>
      </ul>
    </div>
  )
}

export default WalletList
