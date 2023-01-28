import React from 'react'
// import { useHref } from 'react-router-dom'
import Input from '../search/Input'

const NavBar = () => {
  return (
    <header className='NavBar'>
        <div className='marca'>
          <a href="https://fakestoreapi.com/"><img src='https://fakestoreapi.com/icons/logo.png' alt="api" width='30px' /></a>
        </div>
        <div className='input'>
            <Input/>
        </div>
        <div className='git'>
            <a href="https://github.com/cefefabian"><img src="../../public/github-logo-24.png" alt="" /></a>
        </div>
    </header>
  )
}

export default NavBar