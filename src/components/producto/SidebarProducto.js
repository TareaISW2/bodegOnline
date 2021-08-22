import React from "react";
import { useSelector } from "react-redux";

import { EntradasProducto } from "./EntradasProducto";
export const SidebarProducto = () => {
  const { name } = useSelector((state) => state.auth);

  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3 className="mt-5">
          <i className="far fa-moon"></i>
          <span> {name} </span>
        </h3>
      </div>

      <EntradasProducto />
    </aside>
  );
};
