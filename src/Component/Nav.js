import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div>
            <div className="nav">
                <Link style={{ textAlign: 'center', fontSize: 30, margin: 30, color: 'white' }} to="/">
                    Home
                </Link>
            </div>
        </div>
    );
}

export default Nav;
