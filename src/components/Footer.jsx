import React from 'react';
import { Box, Typography, Divider, IconButton } from '@mui/material';
import { Facebook, Instagram, YouTube } from '@mui/icons-material';
import unmsmLogo from '../assets/unmsm.png'; // Importa la imagen
import './Footer.css';

const Footer = () => {
  return (
    <Box component="footer" className="footer-container">
      {/* Logo y texto institucional */}
      <Box className="footer-section" sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', p: 4 }}>
        {/* Contenedor para logo y texto al lado */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          {/* Agregar el logo importado */}
          <Box
            component="img"
            src={unmsmLogo} // Usamos la variable importada
            alt="Logo UNMSM"
            sx={{ width: { xs: '100px', md: '150px' }, height: 'auto' }} // Ajuste de tamaño
          />
          {/* Texto al lado del logo */}
          <Box sx={{ ml: 2, textAlign: 'start' }}>
            <Typography variant="h6" sx={{ color: 'white' }}>
              Facultad de Ingeniería de Sistemas e Informática
            </Typography>
            <Typography variant="body1" sx={{ color: 'gray' }}>
              Universidad Nacional Mayor de San Marcos
            </Typography>
          </Box>
        </Box>

        {/* Menú de enlaces agrupados */}
        <Box className="footer-links" sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-around', flex: 1 }}>
          <Box sx={{ minWidth: 150, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="body1" component="a" href="https://admisionpregrado.com" className="footer-link">
              Admisión Pregrado
            </Typography>
            <Typography variant="body1" component="a" href="https://admisionposgrado.com" className="footer-link">
              Admisión Posgrado
            </Typography>
          </Box>
          <Box sx={{ minWidth: 150, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="body1" component="a" href="https://pregrado.com" className="footer-link">
              Pregrado
            </Typography>
            <Typography variant="body1" component="a" href="https://posgrado.com" className="footer-link">
              Posgrado
            </Typography>
          </Box>
          <Box sx={{ minWidth: 150, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="body1" component="a" href="https://informacionacademica.com" className="footer-link">
              Información académica
            </Typography>
            <Typography variant="body1" component="a" href="https://transparencia.com" className="footer-link">
              Transparencia
            </Typography>
          </Box>
          <Box sx={{ minWidth: 150, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="body1" component="a" href="https://directorio.com" className="footer-link">
              Directorio
            </Typography>
          </Box>
        </Box>

        {/* Redes sociales */}
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Typography variant="body1" sx={{ color: 'gray', mb: 1 }}>
            Síguenos en:
          </Typography>
          <Box>
            <IconButton href="https://www.facebook.com" className="social-icon" sx={{ color: 'white' }}>
              <Facebook />
            </IconButton>
            <IconButton href="https://www.instagram.com" className="social-icon" sx={{ color: 'white' }}>
              <Instagram />
            </IconButton>
            <IconButton href="https://www.youtube.com" className="social-icon" sx={{ color: 'white' }}>
              <YouTube />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Divider */}
      <Divider variant="middle" sx={{ backgroundColor: '#495057', mx: 7 }} />

      {/* Copyright */}
      <Box sx={{ textAlign: 'center', p: 2 }}>
        <Typography variant="body1" sx={{ color: 'gray' }}>
          © 2024 Facultad de Ingeniería de Sistemas e Informática, UNMSM. Todos los derechos reservados.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
