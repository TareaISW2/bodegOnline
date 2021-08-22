import { types } from "../types/types";

const initialState = {
  productos: [],
  active: null,
};

export const productosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.productoLoad:
      return {
        ...state,
        productos: [...action.payload],
      };

    case types.productoActive:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };

    case types.productoDelete:
      return {
        ...state,
        active: null,
        productos: state.productos.filter(
          (producto) => producto.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
