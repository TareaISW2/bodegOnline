import { Navbar, Nav, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";

export const Navdashboard = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="CarruselDashboard">
            <Image src="https://i.postimg.cc/ppwFCrc6/Bodeg0nline.png" fluid />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link variant="info" href="dashproductos">
                Productos
              </Nav.Link>
              <Nav.Link variant="info" href="dashrecetas">
                Recetas
              </Nav.Link>
              <Nav.Link variant="info" href="dashcombos">
                Combos
              </Nav.Link>
              <Nav.Link variant="info" href="dashpedidos">
                Pedidos
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link onClick={handleLogout}>Cerrar Sesión</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};
