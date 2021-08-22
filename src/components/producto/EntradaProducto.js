import React from "react";
import { useDispatch } from "react-redux";
import { activeProducto } from "../../actions/productos";
import { useSelector } from "react-redux";
import { selectProductos } from "../../actions/recetas";

export const EntradaProducto = ({ id, nombre, unidad, cantidad, precio }) => {
  const dispatch = useDispatch();

  const { active: producto } = useSelector((state) => state.productos);

  const handleEntryClick = () => {
    dispatch(
      activeProducto(id, {
        nombre,
        unidad,
        cantidad,
        precio,
      })
    );

    producto ? dispatch(selectProductos(producto)) : console.log(); //agrega productos a la lista de productos en receta
  };

  return (
    <div className="journal__entry pointer" onClick={handleEntryClick}>
      <div className="journal__entry-body">
        <p className="journal__entry-title">Producto</p>
        <p className="journal__entry-content">
          {nombre} stock: {cantidad} [{unidad}]
        </p>

        <p className="journal__entry-content">Precio: {precio}</p>
      </div>
    </div>
  );
};
