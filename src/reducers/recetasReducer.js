import { types } from "../types/types";

const initialState = {
  recetas: [],
  productosSelected: [],
  active: null,
};

export const recetasReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.recetaLoad:
      return {
        ...state,
        recetas: [...action.payload],
      };

    case types.recetaSelectProduct:
      return {
        ...state,
        productosSelected: [...state.productosSelected, action.payload],
      };

    case types.recetaActive:
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
