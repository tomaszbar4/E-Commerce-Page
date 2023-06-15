import React, { useState } from 'react'
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Cart from "./components/Cart";
import MaximizedImg from './components/MaximizedImg';

function App() {

  const [isCartVisible, setIsCartVisible] = useState(false)

  function toggleCart() {
    setIsCartVisible(oldValue => !oldValue)
  }

  const [isImgVisible, setIsImgVisible] = useState(false)

  function toggleIsImgVisible() {
    setIsImgVisible(oldValue => !oldValue)
  }



  return (
    <>
      <div className="bg-white h-auto min-h-screen lg:w-10/12 mx-auto relative">
        <Navbar toggleCart={toggleCart} />
        <Main isImgVisible={isImgVisible} toggleIsImgVisible={toggleIsImgVisible} />
        {isCartVisible && <Cart isCartVisible={isCartVisible} toggleCart={toggleCart} />}
      </div>
      {isImgVisible && <MaximizedImg isImgVisible={isImgVisible} toggleIsImgVisible={toggleIsImgVisible} />}
    </>
  );
}

export default App;
