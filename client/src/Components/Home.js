import React from 'react'
import Nav from './Nav'
import './Home.css'
import SideDrawer from './SideDrawer/SideDrawer'

export default function Home() {
  return (
    <div>
      <Nav />
      <SideDrawer />
      <main className='home'>
        <h1>Hello World</h1>
      </main>
    </div>
  )
}
