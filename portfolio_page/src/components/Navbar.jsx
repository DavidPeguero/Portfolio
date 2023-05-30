
import { Outlet, Link } from "react-router-dom"; 
import { useEffect, useState } from "react";

export default function Navbar(){
    const [navbarOpen, setNavbarOpen] = useState(true)
    const [bg, setBg] = useState("grey")
    function toggleNavbar(){
        setNavbarOpen(oldNavbarOpen => !oldNavbarOpen)
        setBg("white")
    }

    return(
        <div>
            <button className="navbar--hamburger"    
            onClick={toggleNavbar}></button>
            <nav  aria-expanded={navbarOpen} aria-labelledby="btn1" className="navbar" >
                    <div className="navbar--logo">
                        <h1 className="navbar--name" >David Peguero</h1>
                    
                    </div>
                    <ul className="navbar--pages">
                        <li className>
                            <Link className="navbar--page" to='/'>Home</Link>
                        </li>
                        <li>
                            <Link className="navbar--page" to='/contact'>Contact</Link>
                        </li>
                        <li>
                            <Link className="navbar--page" to='/contact'>Resume</Link>
                        </li>
                    </ul>
            </nav> 
            <Outlet />
        </div>
    )
}   