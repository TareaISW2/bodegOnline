import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";

export const CarruselDashboard = () => {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="row justify-content-center mt-5"></div>
          <div className="row justify-content-center mt-5"></div>
          <div className="col-md-5">
            <div className="d-grid gap-2">
              <CardGroup>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://cdn.pixabay.com/photo/2017/03/10/13/57/cooking-2132874_960_720.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Mis Productos</Card.Title>
                    <dir className="row justify-content-center mt-5 ps-1">
                      <Button variant="primary" href="dashproductos">
                        Ver Productos
                      </Button>
                    </dir>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://cdn.pixabay.com/photo/2015/04/20/13/30/kitchen-731351_960_720.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Mis Recetas</Card.Title>
                    <dir className="row justify-content-center mt-5 ps-1">
                      <Button variant="primary" href="recetas">
                        Ver Recetas
                      </Button>
                    </dir>
                  </Card.Body>
                </Card>
              </CardGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
