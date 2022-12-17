import React from 'react'
import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Men</span>
          <span>Women</span>
          <span>Children</span>
        </div>
        <div className="item">
          <h1>Services</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Location</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Sit, ducimus rem molestias 
            illum, beatae atque quaerat hic rerum eligendi 
            iure, temporibus velit assumenda veniam voluptatibus 
            doloremque natus odit minus. Natus!
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Sit, ducimus rem molestias 
            illum, beatae atque quaerat hic rerum eligendi 
            iure, temporibus velit assumenda veniam voluptatibus 
            doloremque natus odit minus. Natus!
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">E-commerce</span>
          <span className="copyright">Copyright 2023. All Rights Reserved.</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer