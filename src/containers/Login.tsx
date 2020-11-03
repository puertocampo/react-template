import React from 'react';
import { Login as LoginTemplate } from '../components/templates/Login';

export const Login = () => {
  const handleLogin = () => {
    console.log('click');
  };

  return <LoginTemplate handleLogin={handleLogin} />;
};
