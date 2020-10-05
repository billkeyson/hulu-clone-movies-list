import React from 'react';
import './header.css';

function Header() {
  return (
    <div className="header">

      <div className="header-icons">
        <div className="header-icon">
         <p>Home</p>
        </div> 

        <div className="header-icon">
        <p>Trending</p>
        </div>
        
          <div className="header-icon">
          <p>Shows</p>
        </div>

          <div className="header-icon">
          <p>Movies</p>
        </div>

          <div className="header-icon">
          <p>Find</p>
         </div>

      </div>

      <div className="header-logo">
          <img src="https://www.hulu.com/static/hitch/s3/2020-04/Hulu_Logo-01.png?Q8BjHgJFgQk9_Q2zL_Z_o5fC5u6UcM4K" />
     </div>  

    </div>
  );
}

export default Header;
