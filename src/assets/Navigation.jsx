import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Navigation() {


return (
    <div className='page'>

        <nav className='border m-4 rounded-5 fixed no-wrap'>
            <ul className="d-flex justify-content-center nav">

                <li className="nav-item">
                    <Link   to='/all'>All</Link>
                </li>
                
                <li className="nav-item">
                    <Link   to='/full_stack_development'>
                        Full Stack Development</Link>
                </li>
                
                <li className="nav-item">
                    <Link to='/data_science'>
                        Data Science</Link>
                </li>
                
                <li className="nav-item">
                    <Link   to='/cyber_security'>
                        Cyber Security</Link>
                </li>
                
                <li className="nav-item">
                    <Link   to='/career'>
                        Career</Link>
                </li>
                
                
            </ul>
        </nav>
        <div className="container border " >
            <div className="row">
                <Outlet />
            </div>
        </div>
    
    
    </div>
)
}

export default Navigation;