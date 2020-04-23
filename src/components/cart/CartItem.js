import React, { Fragment } from "react";
import "./Cart.css";
import PropTypes from "prop-types";

const Cart = (props) => {
  return (
    <Fragment>
      <tr>
        <td>
          {" "}
          <img
            src={props.imageUrl}
            alt={props.name}
            className="Cart-Item-Photo"
          />{" "}
        </td>
        <td>{props.name}</td>
        <td>
          <button onClick={props.removeItem} className="Quantity-Button">
            -
          </button>
          <span className="Cart-Item-Quantity">{props.quantity}</span>
          <button onClick={props.addItem} className="Quantity-Button">
            +
          </button>
        </td>
        <td>${props.price}</td>
        <td>
          <span
            className="fa fa-times"
            onClick={props.removeWholeItem}
            style={{ color: "red", cursor: "pointer" }}
          >
            Remove
          </span>
        </td>
      </tr>
    </Fragment>
  );
};

Cart.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default Cart;
