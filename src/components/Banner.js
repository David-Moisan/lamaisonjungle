import React from 'react'
import '../styles/Banner.css'

export default function Banner({children}) {
  return (
    <div className='header'>{children}</div>
  )
}
