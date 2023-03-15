import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function Layout() {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main className='col-8 mx-auto'>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
