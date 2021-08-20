import React from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import { uiRemoveError, setError } from "../../actions/ui";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";

export const RegisterScreen = () => {
  const dispatch = useDispatch();

  const { msgError } = useSelector((state) => state.ui);
  const [formValues, handleInputChange] = useForm({
    nombre: "Bastian",
    email: "testing@gmail.com",
    password: "123456",
    passwordrepeat: "123456",
  });

  const { nombre, email, password, passwordrepeat } = formValues; //Se extraen los valores del formulario

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, nombre));
    }
  };

  const isFormValid = () => {
    //validación de formulario
    if (nombre.trim().length === 0) {
      dispatch(setError("nombre es requerido"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("email no valido"));
      return false;
    } else if (password !== passwordrepeat || password.length < 5) {
      dispatch(setError("el password debe ser igual y mayor a 5 caracteres"));
      return false;
    }
    dispatch(uiRemoveError());
    return true;
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5"></div>
        {msgError && (
          <Alert variant="danger" className="text-center">
            {msgError}
          </Alert>
        )}
        <div className="row justify-content-center mt-5">
          <div className="col-md-3  bg-dark rounded">
            <Form onSubmit={handleRegister}>
              <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label className="text-white">Nombre</Form.Label>
                <Form.Control
                  className="bg-dark text-light"
                  type="text"
                  required
                  name="nombre"
                  placeholder="Ingrese su nombre"
                  value={nombre}
                  onChange={handleInputChange}
                />
                <Form.Text className="text-muted">
                  No compartas tu contraseña con nadie.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label className="text-white">
                  Dirección de Email
                </Form.Label>
                <Form.Control
                  className="bg-dark text-light"
                  type="email"
                  required
                  name="email"
                  placeholder="Ingrese su email"
                  value={email}
                  onChange={handleInputChange}
                />
                <Form.Text className="text-muted">
                  No compartas tu contraseña con nadie.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="text-white">Password</Form.Label>
                <Form.Control
                  className="bg-dark text-light"
                  type="password"
                  required
                  name="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="text-white">Repita password</Form.Label>
                <Form.Control
                  className="bg-dark text-light"
                  type="password"
                  required
                  name="passwordrepeat"
                  placeholder="Repita su contraseña"
                  value={passwordrepeat}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Button
                className="mb-3"
                variant="primary"
                type="submit"
                onClick={handleRegister}
              >
                Iniciar Sesión con Google
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
