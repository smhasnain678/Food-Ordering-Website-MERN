import React from 'react';
import './Navbar.css';
import { FaUtensils } from "react-icons/fa";
import { assets } from '../../assets/assets';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className='logo'>Yum<FaUtensils />Kart</h1>
      {/* <h1 className="logo">Yum<SiIfood />Kart</h1> */}
      <img src={assets.profile} className="profile" alt="" />
    </div>
  );
};

export default Navbar;