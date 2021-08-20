import React from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
export const LoginScreen = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: "testing@gmail.com",
    password: "123456",
  });

  const { email, password } = formValues; //Se extraen los valores del formulario

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    dispatch(startLoginEmailPassword(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5"></div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-3  bg-dark rounded">
            <Form onSubmit={handleLogin}>
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
              <Button
                className="mb-3"
                variant="primary"
                type="submit"
                onClick={handleLogin}
                disabled={loading}
              >
                Iniciar sesión
              </Button>

              <Button
                className="mb-3"
                variant="primary"
                type="submit"
                onClick={handleGoogleLogin}
                disabled={loading}
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
