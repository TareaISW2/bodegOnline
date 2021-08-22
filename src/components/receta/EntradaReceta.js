import React from "react";
import { useDispatch } from "react-redux";
import { activeReceta } from "../../actions/recetas";
import { selectProductos } from "../../actions/recetas";

export const EntradaReceta = ({ id, nombre, instrucciones }) => {
  const dispatch = useDispatch();

  const handleEntryClick = () => {
    dispatch(
      activeReceta(id, {
        nombre,
        instrucciones,
      })
    );
    // const prod = {
    //   id: id,
    //   nombre: nombre,
    //   unidad: unidad,
    //   cantidad: cantidad,
    //   precio: precio,
    // };
    // const arrprod = Object.values(prod);
    // dispatch(selectProductos(arrprod));
    //agregar activo al arreglo de productos
  };

  return (
    <div className="journal__entry pointer" onClick={handleEntryClick}>
      <div className="journal__entry-body">
        <p className="journal__entry-title">Receta</p>
        <p className="journal__entry-content">{nombre}</p>

        <p className="journal__entry-content">instrucciones: {instrucciones}</p>
      </div>
    </div>
  );
};
