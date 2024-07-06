import React from 'react';
import { Button } from '@mui/material';

const LogoutButton = ({ onLogout }) => {
  const handleLogout = () => {
    localStorage.removeItem('user');
    onLogout();
  };

  return (
    <Button onClick={handleLogout} variant="contained" sx={{ mb: 2 }} color="secondary">
      Logout
    </Button>
  );
};

export default LogoutButton;
