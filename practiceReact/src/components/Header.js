import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?t=st=1770635286~exp=1770638886~hmac=fbba5109215a5246c1fae6346a9b88613c775e63002cb268c92c02c500c40038&w=1060"
          alt="logo-chef"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <li><button className="nav-btn">Login</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
