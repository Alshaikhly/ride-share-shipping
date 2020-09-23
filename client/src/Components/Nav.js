import React from 'react'
import './Nav.css'

export default function Nav() {
  return (
    <header className='toolbar'>
      <nav className='toolbar__navigation'>
      <div></div>
        <div className='toolbar__logo'><a href='/'>Logo</a></div>
        <div>
          <ul className='toolbar__drawer'>
            <li><a href='/'>Proile</a></li>
            <li><a href='/'>Settings</a></li>
            <li><a href='/'>Payments</a></li>
            <li><a href='/'>Log out</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
