import React from "react";
import { useSelector } from "react-redux";
import { Navdashboard } from "../dashboard/Navdashboard";
import { FormModificaReceta } from "./FormModificaReceta";
import { SidebarReceta } from "./SidebarReceta";
export const ModificarReceta = () => {
  const { active } = useSelector((state) => state.recetas);

  return (
    <div className="journal__main-content">
      <SidebarReceta />

      <main>
        <Navdashboard />
        {active ? <FormModificaReceta /> : <h1>Nada seleccionado</h1>}
      </main>
    </div>
  );
};
