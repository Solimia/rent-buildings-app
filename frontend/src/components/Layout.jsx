import React from 'react'
import "./Layout.css"
import { Outlet } from 'react-router-dom'
import Header from './Header'
export default function Layout() {
  return (
    <>
      <div className='Layout-class'>
        <header>
          <Header />
        </header>


        <main>
          <Outlet></Outlet>
        </main>


        <footer>

        </footer>
      </div>

    </>
  )
}
