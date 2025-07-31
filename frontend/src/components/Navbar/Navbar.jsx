import React from 'react'
import './Navbar.css'
import { FaUtensils, FaSearch, FaShoppingCart } from "react-icons/fa";
import { useState } from 'react'
import { TbGridDots } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import { useContext } from 'react'
import { assets } from '../../assets/assets';

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home");

    const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }

    const [isNavbarVisible, setIsNavbarVisible] = useState(false);

    const toggleNavbar = () => {
        setIsNavbarVisible(!isNavbarVisible);
        document.body.classList.toggle("no-scroll", !isNavbarVisible);
    };

    return (
        <div className='navbar'>
            <Link to='/'><h1 className='logo'>Yum<FaUtensils />Kart</h1></Link>
            <ul className={`navbar-menu ${isNavbarVisible ? "show-navbar" : ""}`}>
                <Link to='/'><li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li></Link>
                <Link to='/menu'><li onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</li></Link>
                <Link to='/ourservices'><li onClick={() => setMenu("ourservices")} className={menu === "ourservices" ? "active" : ""}>Our Services</li></Link>
                <Link to='/contactus'><li onClick={() => setMenu("contact us")} className={menu === "contact us" ? "active" : ""}>Contact Us</li></Link>
                {!token && (
                    <li className="mobile-sign-in">
                        <button className="nav-button mobile-nav-button" onClick={() => setShowLogin(true)}>Sign In</button>
                    </li>
                )}
            </ul>
            <div className="navbar-right">
                <h2><FaSearch className="search-icon" /></h2>
                <div className="navbar-search-icon">
                    <Link to="/cart"><h2><FaShoppingCart /></h2></Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>
                {!token && <button className="nav-button desktop-nav-button" onClick={() => setShowLogin(true)}>Sign In</button>}
                {token && (
                    <div className='navbar-profile'>
                        <img className="profile-img" src={assets.profile} alt="" />
                        <ul className="nav-profile-dropdown">
                            <li onClick={() => navigate('/myorders')}><img className="bag-icon" src={assets.bag} alt="" /><p>Orders</p></li>
                            <hr />
                            <li onClick={logout}><img className="logout-icon" src={assets.logout} alt="" /><p>Logout</p></li>
                        </ul>
                    </div>
                )}
            </div>
            <div onClick={toggleNavbar} className="hamburger">
                {isNavbarVisible ? (
                    <AiOutlineClose size={28} />
                ) : (
                    <TbGridDots size={28} />
                )}
            </div>
        </div>
    )
}

export default Navbar