import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div>
            <ul className="nav">
                <li><Link style={{ color:"white"}} to="/"> Home </Link></li>
                <li><Link style={{ color:"white"}} > Movies </Link></li>
                <li><Link style={{ color:"white"}} > Reviews </Link></li>

            </ul>
        </div>
    );
}

export default Nav;
