import React, { useEffect, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  startDeleteProducto,
  startSaveProducto,
} from "../../actions/productos";
import { useForm } from "../../hooks/useForm";

export const FormModificaReceta = () => {
  const dispatch = useDispatch();
  const { active: receta } = useSelector((state) => state.recetas);
  const { uid } = useSelector((state) => state.auth);
  const [values, handleInputChange, reset] = useForm(receta);
  const { nombre, instrucciones } = values;

  const activeId = useRef(receta.id);

  useEffect(() => {
    if (receta.id !== activeId.current) {
      reset(receta);
      activeId.current = receta.id;
    }
  }, [receta, reset]);

  const handleSave = () => {
    dispatch(startSaveProducto(receta));
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
            <Form.Label className="text-white">Nombre Receta</Form.Label>
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

          <Form.Control
            className="bg-dark text-light"
            type="text"
            required
            value={instrucciones}
            name="InstruccionesReceta"
            placeholder="Instrucciones"
            onChange={handleInputChange}
            as="textarea"
            rows={5}
          />
          <Button className="mb-3" variant="primary" type="submit">
            Enviar
          </Button>

          <Button className="mb-3" variant="danger">
            Borrar
          </Button>
        </Form>
      </div>
    </div>
  );
};
