import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Button,
  Alert,
} from "react-bootstrap";
import { UseAuth } from "./contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export const NavDashBoard = () => {
  const { logout } = UseAuth();
  const history = useHistory();
  const [error, setError] = useState("");
  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/home");
    } catch {
      setError("Fallo al cerrar sesión");
    }
  }
  return (
    <>
      {error && <Alert variant="danger">Fallo al cerrar sesión</Alert>}
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="dashboard">Inicio</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link onClick={handleLogout}>Cerrar Sesión</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <Container>
        <Row>
          <Col>
            <Button variant="outline-secondary">Secondary</Button>
          </Col>
          <Col>
            <Button variant="outline-secondary">Secondary</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="outline-secondary">Secondary</Button>
          </Col>
          <Col>
            <Button variant="outline-secondary">Secondary</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
