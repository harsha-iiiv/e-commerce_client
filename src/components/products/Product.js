import React from "react";
import "./Product.css";
import PropTypes from "prop-types";

const Product = (props) => {
  return (
    <div className="Product-Wrapper">
      <div className="Product">
        <div className="Product-Image-Wrapper">
          <img
            src={props.imageUrl}
            alt={props.name}
            className="Product-Image"
          />
        </div>
        <div className="Product-Title">
          <p className="Product-Name">{props.name}</p>
        </div>
        <div className="Product-Data">
          <small className="Product-Price">${props.price}</small>
          <button
            onClick={props.addToCart}
            className="product-button Product-Add"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Product;
