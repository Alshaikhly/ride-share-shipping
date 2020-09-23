import React from 'react'
import Nav from './Nav'
import './Home.css'

export default function Home() {
  return (
    <div>
      <Nav />
      <main className='home'>
        <h1>Hello World</h1>
      </main>
    </div>
  )
}
