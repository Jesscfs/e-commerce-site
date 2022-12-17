import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Cart from '../Cart/Cart';
import "./Navbar.scss";


const Navbar = () => {

    const [open, setOpen] = useState(false);
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="left">
                <div className="item">
                    <Link className='link' to="/products/1">Men</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/products/2">Women</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/products/3">Children</Link>
                </div>
            </div>
            <div className="center">
                <Link to ="/" className='link'>E-Commerce</Link>
            </div>
            <div className="right">
                <div className="item">
                    <Link className='link' to="/">Home</Link>
                </div>
                <div className="icons">
                <SearchIcon/>
                <PersonOutlineOutlinedIcon/>
                <FavoriteBorderOutlinedIcon/>
                <div className="cartIcon" onClick={()=>setOpen(!open)}>
                    <ShoppingCartOutlinedIcon/>
                    <span>0</span>
                </div> 
                </div>
            </div>
        </div>
        {open && <Cart/>}
    </div>
  )
}

export default Navbar











