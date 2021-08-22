import React, { useEffect, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  startDeleteProducto,
  startSaveProducto,
} from "../../actions/productos";
import { useForm } from "../../hooks/useForm";

export const FormModificaProd = () => {
  const dispatch = useDispatch();
  const { active: producto } = useSelector((state) => state.productos);
  const [values, handleInputChange, reset] = useForm(producto);

  const { precio, unidad, cantidad, nombre } = values;

  const activeId = useRef(producto.id);

  useEffect(() => {
    if (producto.id !== activeId.current) {
      reset(producto);
      activeId.current = producto.id;
    }
  }, [producto, reset]);

  const handleSave = () => {
    dispatch(startSaveProducto(producto));
  };

  const handleDelete = () => {
    dispatch(startDeleteProducto(activeId.current));
  };

  return (
    <div className="notes__main-content">
      <div className="notes__content">
        <Form
          onSubmit={(e) => {
            handleSave();
            e.preventDefault();
          }}
        >
          <Form.Group className="mb-1" controlId="formNomProd">
            <Form.Label className="text-white">Nombre Producto</Form.Label>
            <Form.Control
              className="bg-dark text-light"
              type="text"
              required
              name="nombre"
              value={nombre}
              onChange={handleInputChange}
              placeholder="Ingrese el nombre del producto"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUnidadProd">
            <Form.Label className="text-white">Unidad producto</Form.Label>
            <Form.Control
              className="bg-dark text-light"
              type="text"
              required
              name="unidad"
              value={unidad}
              onChange={handleInputChange}
              placeholder="unidad"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCantidadProd">
            <Form.Label className="text-white">Cantidad Producto</Form.Label>
            <Form.Control
              className="bg-dark text-light"
              type="text"
              required
              name="cantidad"
              value={cantidad}
              onChange={handleInputChange}
              placeholder="Cantidad Producto"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrecioProducto">
            <Form.Label className="text-white">Precio Producto</Form.Label>
            <Form.Control
              className="bg-dark text-light"
              type="text"
              required
              name="precio"
              value={precio}
              onChange={handleInputChange}
              placeholder="Precio Producto"
            />
          </Form.Group>
          <Button className="mb-3" variant="primary" type="submit">
            Enviar
          </Button>

          <Button className="mb-3" variant="danger" onClick={handleDelete}>
            Borrar
          </Button>
        </Form>
      </div>
    </div>
  );
};
