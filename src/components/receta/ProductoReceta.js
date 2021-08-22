import React from "react";

export const ProductoReceta = ({ nombre, cantidad }) => {
  return (
    <div>
      <p className="text-white">
        {nombre} {cantidad}
      </p>
    </div>
  );
};
