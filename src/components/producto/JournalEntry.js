import React from "react";
import { useDispatch } from "react-redux";
import { activeProducto } from "../../actions/productos";

export const JournalEntry = ({ id, nombre, unidad, cantidad, precio }) => {
  const dispatch = useDispatch();

  const handleEntryClick = () => {
    dispatch(
      activeProducto(id, {
        nombre,
        unidad,
        cantidad,
        precio,
      })
    );
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
