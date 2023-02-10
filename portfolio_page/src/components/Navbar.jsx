
import { Outlet, Link } from "react-router-dom"; 

export default function Navbar(){
    return(
        <>
            <nav className="navbar">
                <div className="navbar--logo">
                    <h1 className="navbar--name">David Peguero</h1>
                </div>
                <ul className="navbar--pages">
                    <li className>
                        <Link className="navbar--page" to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className="navbar--page" to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}   