import React from 'react';
import {Link} from "react-router-dom";


export default function Navbar() {
  return (
    <>
    <div className="logo-container">
    <Link to="/">
      <img src="https://cdn-icons-png.flaticon.com/128/489/489399.png" 
      alt="Purr and Paws Logo" 
      className="logo" />
      </Link>
      <div style={{display:"flex",flexDirection:"row"}}>
        <i class="fa-solid fa-quote-left"></i>
        <p style={{color:"olivedrab",fontFamily:"sans-serif",fontWeight:"bold"}}>Animals do speak, but only to those who know how to listen</p>
        <i class="fa-solid fa-quote-right"></i>
      </div>
      <div>
      <button className='login'>Cart</button>
      <button className="login">Login</button>
      </div>
    </div>
    </>
  )
}
