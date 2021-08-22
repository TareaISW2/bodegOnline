import { db } from "../firebase/firebase-config";

export const loadRecetas = async (uid) => {
  const recetasSnap = await db.collection(`${uid}/bodegonline/receta`).get();

  const recetas = [];
  recetasSnap.forEach((snapHijo) => {
    recetas.push({
      id: snapHijo.id,
      ...snapHijo.data(),
    });
  });
  return recetas;
};
