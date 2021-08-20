import { db } from "../firebase/firebase-config";
import { loadProductos } from "../helpers/loadProductos";
import { types } from "../types/types";

export const startNewProducto = ({ nombre, unidad, cantidad, precio }) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const newProducto = {
      nombre: nombre,
      unidad: unidad,
      cantidad: cantidad,
      precio: precio,
    };

    const doc = await db
      .collection(`${uid}/bodegonline/productos`)
      .add(newProducto);
    console.log(doc);
  };
};

export const activeProducto = (id, producto) => ({
  type: types.productoActive,
  payload: {
    id,
    ...producto,
  },
});

export const startLoadingProductos = (uid) => {
  return async (dispatch) => {
    const productos = await loadProductos(uid); //Regresa los productos del usuario
    dispatch(setProductos(productos));
  };
};

export const setProductos = (productos) => ({
  type: types.productoLoad,
  payload: productos,
});
