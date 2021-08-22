import React from "react";
import { useSelector } from "react-redux";
import { EntradaProducto } from "./EntradaProducto";

export const EntradasProducto = () => {
  const { productos } = useSelector((state) => state.productos);

  return (
    <div className="journal__entries">
      {productos.map((producto) => (
        <EntradaProducto key={producto.id} {...producto} />
      ))}
    </div>
  );
};
