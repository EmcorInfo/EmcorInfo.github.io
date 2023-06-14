import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component, ...rest }) => {
  // Verifique a autenticação do usuário aqui
  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token;
  };

  return (
    <Route
      {...rest}
      element={isAuthenticated() ? <Component /> : <Navigate to="/adm/login" />}
    />
  );
};

export default PrivateRoute;
