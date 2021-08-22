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

export const startSaveProducto = (producto) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const productoToFirestore = { ...producto };
    delete productoToFirestore.id;

    await db
      .doc(`${uid}/bodegonline/productos/${producto.id}`)
      .update(productoToFirestore);
  };
};

export const startDeleteProducto = (id) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    await db.doc(`${uid}/bodegonline/productos/${id}`).delete();

    dispatch(deleteProducto(id));
  };
};

export const deleteProducto = (id) => ({
  type: types.productoDelete,
  payload: id,
});
