
import { Outlet, Link } from "react-router-dom"; 

export default function Header(){
    return(
        <>
            <nav className="header">
                <div className="header--logo">
                    <h1 className="header--name">David Peguero</h1>
                </div>
                <ul className="header--pages">
                    <li className>
                        <Link className="header--page" to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className="header--page"to='/contact'>Contact</Link>
                    </li>
                    <li>
                        <Link className="header--page"to='/builds'>Builds</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}   