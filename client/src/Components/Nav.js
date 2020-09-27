import React from 'react';
import './Nav.css';
import DrawerToggleButton from '../Components/SideDrawer/DrawerToggleButton'

export default function Nav() {
  return (
    <header className='toolbar'>
      <nav className='toolbar__navigation'>
        <div>
          <DrawerToggleButton />
        </div>
        <div className='toolbar__logo'><a href='/'>Logo</a></div>
        <div className='spacer' />
        <div className='toolbar_navigation-items'>
          <ul>
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
