import React from "react";
import "./Cart.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BuySomething = ({ message = "Cart empty!" }) => (
  <div className="Cart-Empty-Wrapper">
    {" "}
    <h1 className="Cart-Empty">{message}</h1>{" "}
    <Link to="/" className="Go-To-Products">
      Try to buy something
    </Link>
  </div>
);

BuySomething.propTypes = {
  message: PropTypes.string,
};

export default BuySomething;
