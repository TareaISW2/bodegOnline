import { Navbar, Nav } from "react-bootstrap";

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="home">Inicio</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="pricing">Pricing</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="login">Iniciar Sesión</Nav.Link>
          <Nav.Link href="signup">Crear cuenta</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
