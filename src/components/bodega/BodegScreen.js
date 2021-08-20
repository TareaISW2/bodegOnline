import React from "react";
import { CarruselDashboard } from "../dashboard/CarruselDashboard";
import { Navdashboard } from "../dashboard/Navdashboard";

export const BodegScreen = () => {
  return (
    <div>
      <Navdashboard />
      <CarruselDashboard />
    </div>
  );
};
