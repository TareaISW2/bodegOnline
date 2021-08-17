import React, { useRef } from "react";
import { UseAuth } from "./contexts/AuthContext";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import { NavBar } from "./NavBar";

export const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = UseAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Contraseñas no son iguales");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/home");
    } catch {
      setError("Error al registrarse");
    }
  }
  return (
    <>
      <NavBar />
      {error && <Alert variant="danger">Las contraseñas no son iguales</Alert>}
      <div className="d-flex justify-content-center">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Label>Dirección de Email</Form.Label>
            <Form.Control
              className="bg-dark text-light"
              type="email"
              ref={emailRef}
              required
              name="mail"
              placeholder="Ingrese su email"
            />
            <Form.Text className="text-muted">
              No compartas tu contraseña con nadie.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="bg-dark text-light"
              type="password"
              ref={passwordRef}
              required
              name="password"
              placeholder="Contraseña"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
            <Form.Label>Confirmar Contraseña</Form.Label>
            <Form.Control
              className="bg-dark text-light"
              type="password"
              ref={passwordConfirmRef}
              required
              name="passwordConfirm"
              placeholder="Confirmar Contraseña"
            />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={loading}>
            Enviar
          </Button>
        </Form>
      </div>
    </>
  );
};
