import { db } from "../firebase/firebase-config";
import { loadRecetas } from "../helpers/loadRecetas";
import { types } from "../types/types";

export const startNewReceta = ({ nombre, instrucciones }) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const newReceta = {
      nombre: nombre,
      instrucciones: instrucciones,
    };

    const doc = await db.collection(`${uid}/bodegonline/receta`).add(newReceta);
    console.log(doc);
  };
};

export const activeReceta = (id, receta) => ({
  type: types.recetaActive,
  payload: {
    id,
    ...receta,
  },
});

export const selectProductos = (active) => ({
  type: types.recetaSelectProduct,
  payload: active,
});

// }
export const startLoadingReceta = (uid) => {
  return async (dispatch) => {
    const recetas = await loadRecetas(uid); //Regresa los productos del usuario
    dispatch(setRecetas(recetas));
  };
};

export const setRecetas = (recetas) => ({
  type: types.recetaLoad,
  payload: recetas,
});
