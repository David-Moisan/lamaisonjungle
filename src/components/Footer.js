import React, { useState } from 'react'
import "../styles/Footer.css"

export default function Footer() {
  const [inputValue, setInputValue] = useState('') 

  const handleInput = (event) => {
    setInputValue(event.target.value)
  }

  const handleBlur = () => {
    if(!inputValue.includes('@')) {
        alert("⚠ Attention ⚠, il n'y as pas d'@, ceci n'est pas une adresse valide 😱")
    }  
  }

  //Fonction non fonctionnelle
  const handleSubmit = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <footer className='footer'>
        <div className='footer__element'>
            Pour les passionné.e.s de plantes 🌵🌵
        </div>
        <div className='footer__element'>
            Laissez-nous votre mail : 
        </div>
        <div className='footer__group'>
            <input
                className='footer__input' 
                type="email"
                placeholder='Entrez votre mail'
                onChange={handleInput}
                value={inputValue}
                onBlur={handleBlur}
            />
            <button type='submit' className='footer__submit' onClick={handleSubmit}>Send</button>
        </div>
    </footer>
  )
}
