import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";

import { firebase } from "../firebase/firebase-config";
import { useState } from "react";

import { BodegScreen } from "../components/bodega/BodegScreen";
import { login } from "../actions/auth";
import { PublicRoute } from "./PublicRoute";
import { ProductoDashboard } from "../components/producto/ProductoDashboard";
import { IngresarProducto } from "../components/producto/IngresarProducto";

import { Spinner } from "react-bootstrap";
import { startLoadingProductos } from "../actions/productos";
import { ModificarProducto } from "../components/producto/ModificarProducto";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);

        dispatch(startLoadingProductos(user.uid));
      } else {
        setIsLoggedIn(false);
      }

      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            isAuthenticated={isLoggedIn}
            component={AuthRouter}
          />

          <PrivateRoute
            exact
            path="/"
            isAuthenticated={isLoggedIn}
            component={BodegScreen}
          />

          <PrivateRoute
            exact
            path="/dashproductos"
            isAuthenticated={isLoggedIn}
            component={ProductoDashboard}
          />

          <PrivateRoute
            exact
            path="/ingresarproducto"
            isAuthenticated={isLoggedIn}
            component={IngresarProducto}
          />

          <PrivateRoute
            exact
            path="/modificarproducto"
            isAuthenticated={isLoggedIn}
            component={ModificarProducto}
          />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
