import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { Navdashboard } from "../dashboard/Navdashboard";
import { startNewReceta } from "../../actions/recetas";
import { useDispatch } from "react-redux";
import { SidebarProducto } from "../producto/SidebarProducto";
import { useSelector } from "react-redux";

import { ProductoReceta } from "./ProductoReceta";

export const IngresarReceta = () => {
  const [nomReceta, setNomRecetaState] = useState("");
  const [insReceta, setInsRecetaState] = useState("");

  const dispatch = useDispatch();

  const handleIngresarReceta = () => {
    const Receta = {
      nombre: nomReceta,
      instrucciones: insReceta,
    };
    dispatch(startNewReceta(Receta));
  };

  const { productosSelected } = useSelector((state) => state.recetas);

  return (
    <div className="journal__main-content">
      <SidebarProducto />
      <main>
        <Navdashboard />

        <div className="container">
          <div className="row justify-content-center mt-3"></div>
          <div className="row justify-content-center mt-3">
            <h1 className="text-center pb-3">Ingresar Receta</h1>
            <div className="col-md-3 pt-3  bg-dark rounded">
              <div className="d-flex justify-content-center"></div>

              <Form
                onSubmit={(e) => {
                  handleIngresarReceta();
                  e.preventDefault();
                }}
              >
                <Form.Group className="mb-1" controlId="formNomReceta">
                  <Form.Label className="text-white">Nombre Receta</Form.Label>
                  <Form.Control
                    className="bg-dark text-light"
                    type="text"
                    required
                    name="nomreceta"
                    onChange={(e) => {
                      setNomRecetaState(e.target.value);
                    }}
                    placeholder="Nombre"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formInsReceta">
                  <Form.Label className="text-white">
                    Instrucciones Receta
                  </Form.Label>

                  <Form.Control
                    className="bg-dark text-light"
                    type="text"
                    required
                    onChange={(e) => {
                      setInsRecetaState(e.target.value);
                    }}
                    name="InstruccionesReceta"
                    placeholder="Instrucciones"
                    as="textarea"
                    rows={5}
                  />
                </Form.Group>

                <Button className="mb-3" variant="primary" type="submit">
                  Agregar
                </Button>

                <div>
                  {productosSelected.map((producto) => (
                    <ProductoReceta key={producto.id} {...producto} />
                  ))}
                </div>
              </Form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
