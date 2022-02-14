import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'
import '../styles/App.css'

export default function App() {
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  useEffect(() =>  {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]);
  
  return (
    <>
      <Banner>
        <img src={logo} alt="La maison jungle" className='header__logo' />
        <h1 className='header__title'>La maison jungle</h1>
      </Banner>
      <div className='page-inner'>
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer/>
    </>
  )
}
