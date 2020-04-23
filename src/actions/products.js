import axios from "axios";
import { FETCH_PRODUCTS } from "./types";
import data from "../data/product.json";
export const fetchProducts = () => (dispatch) => {
  try {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: data,
    });
  } catch (err) {
    console.log("Hellooo");
    console.log(err.message);
  }
};
