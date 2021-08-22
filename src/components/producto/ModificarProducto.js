import React from "react";
import { useSelector } from "react-redux";
import { Navdashboard } from "../dashboard/Navdashboard";
import { FormModificaProd } from "./FormModificaProd";
import { SidebarProducto } from "./SidebarProducto";
export const ModificarProducto = () => {
  const { active } = useSelector((state) => state.productos);

  return (
    <div className="journal__main-content">
      <SidebarProducto />

      <main>
        <Navdashboard />
        {active ? <FormModificaProd /> : <h1>Nada seleccionado</h1>}
      </main>
    </div>
  );
};
