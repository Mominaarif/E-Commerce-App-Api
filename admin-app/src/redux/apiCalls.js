import axios from "axios";

import { BASE_URL, token, userRequest } from "../RequestMethods";
import { getUserFailure, getUserStart, getUserSuccess, loginFailure, loginStart, loginSuccess } from "./userRedux";
import {
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  getProductFailure,
  getProductStart,
  getProductSuccess,
  updateProductStart,
  updateProductFailure,
  updateProductSuccess,
  createProductFailure,
  createProductStart,
  createProductSuccess,
} from "./productRedux";

// API FOR LOGIN
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`${BASE_URL}/auth/login`, user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

// API FOR GET PRODUCTS
export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await axios.get(`${BASE_URL}/products`, {
      headers: { token: `Bearer ${token}` },
    });
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const getUsers = async (dispatch) => {
  dispatch(getUserStart());
  try {
    const res = await axios.get(`${BASE_URL}/users`, {
      headers: { token: `Bearer ${token}` },
    });
    dispatch(getUserSuccess(res.data));
  } catch (err) {
    dispatch(getUserFailure());
  }
};

// API FOR DELETE PRODUCTS
export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    // const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

// API FOR UPDATE PRODUCTS
export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    // UPDATE
    dispatch(updateProductSuccess( id, product ));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

// API FOR CREATE PRODUCTS
export const createProduct = async (product, dispatch) => {
  dispatch(createProductStart());
  try {
    // CREATE
    const res = await userRequest.post(`/products`,  product );
    dispatch(createProductSuccess(res.data));
  } catch (err) {
    dispatch(createProductFailure());
  }
};
