import React from "react";
import { IngresarProducto } from "./IngresarProducto";
import { NavDashBoard } from "./NavDashBoard";

export const DashBoard = () => {
  return (
    <div>
      <NavDashBoard />
      <IngresarProducto />
      <h1>Dashboard</h1>
    </div>
  );
};
