import { db } from "../firebase/firebase-config";

export const loadProductos = async (uid) => {
  const productosSnap = await db
    .collection(`${uid}/bodegonline/productos`)
    .get();

  const productos = [];
  productosSnap.forEach((snapHijo) => {
    productos.push({
      id: snapHijo.id,
      ...snapHijo.data(),
    });
  });

  return productos;
};
