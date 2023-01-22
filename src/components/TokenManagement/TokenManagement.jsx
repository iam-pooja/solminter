import React from 'react'
import './TokenManagement.css';

const TokenManagement = () => {
  return (
    <div className='token'>
        <div className="token-container">
            <div className="token-title">
                <h2>Token management</h2>
            </div>
            <div className="token-desc">
                <div className="desc-text">
                    <h1>Tokens in your wallet</h1>
                    <p>Any tokens minted using the address connected to Solminter will appear below. 
                    Please note: If you have transferred ownership of a token you've minted here, it will not appear below</p>
                </div>
                <div className="desc-button">
                    <button>Create a new SPL token +</button>
                    <span>Add an existing SPL token</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TokenManagement
