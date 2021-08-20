/*
    {
        productos: [],
        active: null,
        active: {
            id: AS12JNJASDNJSAKD,
            nombre: '',
            kg: '',
            precio: int,
            cantidad: int,
        }
    }
*/

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

    default:
      return state;
  }
};
