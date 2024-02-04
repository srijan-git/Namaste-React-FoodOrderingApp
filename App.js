import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav items
 * Body
 *  - Search
 *  - Restaurant Container
 *      - Restaurant Card
 * Footer
 *  - Copyright
 *  - Links
 *  - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?size=626&ext=jpg&ga=GA1.1.1795100325.1706960847&semt=ais"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => (
  <div className="body">
    <div className="search">Searh</div>
    <div className="res-container"></div>
  </div>
);

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
