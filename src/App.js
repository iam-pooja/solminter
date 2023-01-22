import './App.css';
import Sidebar from './components/Sidebar';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import WalletList from './components/walletList/WalletList';
import { useState } from 'react';
import TokenManagement from './components/TokenManagement/TokenManagement';
import NFTManagement from './components/NftManagement/NFTManagement';


function App() {

  const[isOpen, setIsOpen] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>
        <Sidebar setIsOpen={setIsOpen} isOpen={isOpen}/>
        <WalletList isOpen={isOpen}/>
        <div className='center'>Please connect your wallet</div>
      </div>
    },
    {
      path: "nft",
      element: <div>
        <Sidebar setIsOpen={setIsOpen} isOpen={isOpen}/>
        <NFTManagement />
      </div>
    },
    {
      path: "token-management",
      element: <div>
        <Sidebar setIsOpen={setIsOpen} isOpen={isOpen}/>
        <TokenManagement />
      </div>
    },

  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
