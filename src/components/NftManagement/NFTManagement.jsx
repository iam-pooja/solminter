import React from 'react';
import './NFTManagement.css';

const NFTManagement = () => {
  return (
    <div className='Nft'>
    <div className="Nft-container">
        <div className="Nft-title">
            <h2>NFT management</h2>
        </div>
        <div className="Nft-desc">
            <div className="desc-text">
                <h1>NFT's in your wallet</h1>
                <p>Any NFT created using the address connected to Solminter will appear below.
                 To trade them, add the NFT address to your Solana wallet.</p>
            </div>
            <div className="desc-button">
                <button>Create New NFT +</button>
            </div>
        </div>
        <div className="btns">
            <button className='metaplex-btn'>Metaplex</button>
            <button className='solana-btn'>Solana Foundation</button>
        </div>
    </div>
    </div>
  )
}

export default NFTManagement
