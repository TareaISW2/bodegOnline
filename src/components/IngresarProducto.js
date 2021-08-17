import React from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import "firebase/auth";
import "firebase/firestore";
import db from "../firebase";

export const IngresarProducto = () => {
  const [nomProd, setNomProdState] = useState("");
  const [unidadProd, setUnidadProdState] = useState("");
  const [precioProd, setPrecioProdState] = useState("");
  const [cantidadProd, setCantidadProdState] = useState("");

  const addProd = (e) => {
    e.preventDefault();

    // Add data to the store
    db.collection("Productos")
      .add({
        nProd: nomProd,
        uProd: unidadProd,
        pProd: precioProd,
        cProd: cantidadProd,
      })
      .then((docRef) => {
        alert("Data Successfully Submitted");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <div className="d-flex justify-content-center">
      <Form
        onSubmit={(event) => {
          addProd(event);
        }}
      >
        <Form.Group className="mb-1" controlId="formNomProd">
          <Form.Label>Nombre Producto</Form.Label>
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
          <Form.Label>Unidad producto</Form.Label>
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
          <Form.Label>Cantidad Producto</Form.Label>
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
          <Form.Label>Precio Producto</Form.Label>
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
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
};
