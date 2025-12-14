import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { CartContext, CartProvider } from './context/CartContext'

const App = () => {
  return (
    <>
    <CartProvider>
      <Header/>
    </CartProvider>
    <Footer/>
    </>
  )
}

export default App