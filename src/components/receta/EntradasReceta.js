import React from "react";
import { useSelector } from "react-redux";
import { EntradaReceta } from "./EntradaReceta";

export const EntradasReceta = () => {
  const { recetas } = useSelector((state) => state.recetas);

  return (
    <div className="journal__entries">
      {recetas.map((producto) => (
        <EntradaReceta key={producto.id} {...producto} />
      ))}
    </div>
  );
};
