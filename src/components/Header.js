import React from 'react';
import './Header.css';
export default function header() {
  return (
    <div class="navbar">
      <nav>
          <div className="logo"> <div className='daiso'>250</div> <div className='gazz'>Gazz</div></div>
          <ul>
              <li> <a href="">Home</a> </li>
              <li><a href="">For Sell</a>   </li>
              <li><a href="">For Rent</a></li>
              <li><a href="">About Us</a></li>
              <li><a href="">Contact Us</a></li>
          </ul>
          <div className="user">
              <button>Login</button>
              <button>SignIn</button>
          </div>
      </nav>
      <div className="container">
          <div className="quotes">Find it. Tour it. Own it.</div>
          <div className="search_bar"><input type="text" placeholder='Enter an address,city,or PIN code'/><button>Search</button></div>
      </div>
    </div>
  )
}
