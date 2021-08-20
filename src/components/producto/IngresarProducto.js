import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { Navdashboard } from "../dashboard/Navdashboard";
import { startNewProducto } from "../../actions/productos";
import { useDispatch } from "react-redux";
export const IngresarProducto = () => {
  //Controlador
  const [nomProd, setNomProdState] = useState("");
  const [unidadProd, setUnidadProdState] = useState("");
  const [precioProd, setPrecioProdState] = useState("");
  const [cantidadProd, setCantidadProdState] = useState("");

  const dispatch = useDispatch();

  //modelo
  const handleIngresarProducto = () => {
    const prod = {
      nombre: nomProd,
      unidad: unidadProd,
      precio: precioProd,
      cantidad: cantidadProd,
    };
    dispatch(startNewProducto(prod));
  };

  // Vista
  return (
    <>
      <Navdashboard />
      <div className="container">
        <div className="row justify-content-center mt-5"></div>
        <div className="row justify-content-center mt-5">
          <h1 className="text-center">Ingresar Producto</h1>
          <div className="col-md-3 pt-3  bg-dark rounded">
            <div className="d-flex justify-content-center">
              <Form
                onSubmit={(e) => {
                  handleIngresarProducto();
                  e.preventDefault();
                }}
              >
                <Form.Group className="mb-1" controlId="formNomProd">
                  <Form.Label className="text-white">
                    Nombre Producto
                  </Form.Label>
                  <Form.Control
                    className="bg-dark text-light"
                    type="text"
                    required
                    name="nomproducto"
                    onChange={(e) => {
                      setNomProdState(e.target.value);
                    }}
                    placeholder="Ingrese el nombre del producto"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formUnidadProd">
                  <Form.Label className="text-white">
                    Unidad producto
                  </Form.Label>
                  <Form.Control
                    className="bg-dark text-light"
                    type="text"
                    required
                    onChange={(e) => {
                      setUnidadProdState(e.target.value);
                    }}
                    name="unidadproducto"
                    placeholder="Unidad"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCantidadProd">
                  <Form.Label className="text-white">
                    Cantidad Producto
                  </Form.Label>
                  <Form.Control
                    className="bg-dark text-light"
                    type="text"
                    required
                    onChange={(e) => {
                      setCantidadProdState(e.target.value);
                    }}
                    name="cantidadproducto"
                    placeholder="Cantidad Producto"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrecioProducto">
                  <Form.Label className="text-white">
                    Precio Producto
                  </Form.Label>
                  <Form.Control
                    className="bg-dark text-light"
                    type="text"
                    required
                    onChange={(e) => {
                      setPrecioProdState(e.target.value);
                    }}
                    name="precioproducto"
                    placeholder="Precio Producto"
                  />
                </Form.Group>
                <Button className="mb-3" variant="primary" type="submit">
                  Enviar
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
