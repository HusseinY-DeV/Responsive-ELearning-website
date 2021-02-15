import React, { useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';



const Nav = () => {

    let [active, setActive] = useState(false);

    let handleBurgerclick = () => {
        setActive(!active);
    }

    let handleLinkclick = () => {
        setActive(false);
    }

    return (
        <nav className="nav__container">
            <h2 className="nav__logo">logo</h2>
            <ul className={active ? 'nav__links active' : 'nav__links'}>
                <li><Link to="/"
                    onClick={handleLinkclick}
                >Home</Link></li>
                <li><Link to="/about"
                    onClick={handleLinkclick}
                >About Us</Link></li>
                <li><Link to="/join-us"
                    onClick={handleLinkclick}
                >Join Us</Link></li>
                <li> <span className="nav__info">Already a member?</span> <button className="nav__btn"> Login </button></li>
            </ul>
            <div className="burger"
                onClick={handleBurgerclick}
            >
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </nav>
    );
}

export default Nav;