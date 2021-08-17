import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./NavBar";
import { CarrouselScreen } from "./CarrouselScreen";

export const PantallaInicio = () => {
  return (
    <div>
      <NavBar />
      <CarrouselScreen />
    </div>
  );
};
