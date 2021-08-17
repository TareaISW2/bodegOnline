import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppRouter } from "./router/AppRouter";
import { AuthProvider } from "./contexts/AuthContext";

export const InicioApp = () => {
  return (
    <AuthProvider>
      <div>
        <AppRouter />
      </div>
    </AuthProvider>
  );
};
