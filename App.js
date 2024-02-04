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
 *      - Image
 *      - Name of Res, Star Rating, Cuisine, Delivery Time
 * Footer
 *  - Copyright
 *  - Links
 *  - Contact
 */
// Note : Learn What is Config Driven UI
const styleCard = {
  backgroundColor: "#f0f0f0",
};

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

const RestaurantCard = (props) => {
  // const { resData } = props;
  return (
    <div className="res-card" style={styleCard}>
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/79c8cf4d80c6c5a5868330d14ed91e58"
        alt="res-logo"
      />
      {/* <h3>{resData.resName}</h3>
      <h4>{resData.cuisine}</h4> */}
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>4.4 Stars</h4>
      <h4>38 minuts</h4>
    </div>
  );
};

const Body = () => (
  <div className="body">
    <div className="search">Searh</div>
    <div className="res-container">
      //resName is props which is basically is a properties or we can say it is
      an argument.React prop is a Javascript object
      <RestaurantCard
        resName="Meghna Foods"
        cuisine="Biriyani, North Indian, Asian"
      />
      <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" />
    </div>
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
