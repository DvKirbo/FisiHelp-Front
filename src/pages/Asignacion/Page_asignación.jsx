import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box } from '@mui/material';

import image1 from '/home/Ric/FisiHelp-Front/src/assets/logofisi.png';

export default function AsignacionesPage() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/asignaciones/tabla');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 64px)', 
        padding: '20px',
        overflow: 'hidden', 
      }}
    >
      <img
        src={image1} 
        alt="Logo"
        style={{
          maxWidth: '100%',
          height: 'auto',
          maxHeight: 'calc(100% - 60px)', 
          objectFit: 'contain',
          marginBottom: '20px',
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleRedirect}
        sx={{ padding: '10px 20px' }}
      >
        Generar Reporte de Cursos
      </Button>
    </Box>
  );
}
