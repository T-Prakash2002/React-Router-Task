import React from 'react'
import { Link, Outlet } from 'react-router-dom'



function Navigation() {


return (
    <div className='page'>

        <nav className='m-4 rounded-5 no-wrap'>
            <ul className="d-flex justify-content-center nav">

                <li className="nav-item  h4">
                    <Link   to='/all'>All</Link>
                </li>
                
                <li className="nav-item  h4">
                    <Link   to='/full_stack_development'>
                        Full Stack Development</Link>
                </li>
                
                <li className="nav-item  h4">
                    <Link to='/data_science'>
                        Data Science</Link>
                </li>
                
                <li className="nav-item  h4">
                    <Link   to='/cyber_security'>
                        Cyber Security</Link>
                </li>
                
                <li className="nav-item  h4  ">
                    <Link   to='/career'>
                        Career</Link>
                </li>
                
                
            </ul>
        </nav>
        <div className="container " >
            <div className="row">
                <Outlet />
            </div>
        </div>
    
    
    </div>
)
}

export default Navigation;