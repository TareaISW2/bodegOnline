import ReactDOM from "react-dom";
import { Suspense } from "react";
import { InicioApp } from "./components/InicioApp";

ReactDOM.render(
  <Suspense fallback={"Conectando a la app..."}>
    <InicioApp />
  </Suspense>,
  document.getElementById("root")
);
