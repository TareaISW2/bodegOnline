import React, { useRef } from "react";
import { UseAuth } from "./contexts/AuthContext";
import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { NavBar } from "./NavBar";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = UseAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/DashBoard");
    } catch {
      setError("Error al iniciar sesión");
    }
  }
  return (
    <>
      <NavBar />
      {error && <Alert variant="danger">La contraseña no es correcta</Alert>}
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

          <Button variant="primary" type="submit" disabled={loading}>
            Iniciar Sesión
          </Button>
        </Form>
      </div>
    </>
  );
};
