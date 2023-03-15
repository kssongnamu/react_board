import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='row bg-body-tertiary'>
            <div className='col-8 mx-auto'>
                <nav className="navbar">
                    <Link to="/" className="navbar-brand">React.board</Link>
                    <Link to="/" className="nav-link active ms-auto">로그인</Link>
                    <Link to="/" className="nav-link ms-3">글쓰기</Link>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;