import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Grid, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom'; // Importa Link de React Router

const CardComponent = () => {
    return (
        <Container maxWidth="lg">
            <Box my={4}>
                <Grid container spacing={4}>
                    {/* Primera Card - Enlace a la página "Quiénes somos" */}
                    <Grid item xs={12} sm={6} md={6}>
                        <Card 
                            sx={{ 
                                borderRadius: '16px', 
                                boxShadow: '0 8px 16px rgba(0,0,0,0.1)', 
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                    boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                                },
                            }}
                        >
                            <CardActionArea component={Link} to="/about-us"> {/* Link interno con React Router */}
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="src/assets/fisi.png"  // Cambia esto a la ruta de tu imagen
                                    alt="Quienes somos"
                                    sx={{ borderRadius: '16px 16px 0 0' }} // Rounded corners on top
                                />
                                <CardContent sx={{ backgroundColor: '#f5f5f5', padding: '16px' }}>
                                    <Typography 
                                        variant="h6" 
                                        component="div" 
                                        sx={{ fontWeight: 'bold', marginBottom: 1 }}
                                    >
                                        Quiénes somos
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Somos fisianos.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    {/* Segunda Card - Enlace a la página "Nuestras carreras" */}
                    <Grid item xs={12} sm={6} md={6}>
                        <Card 
                            sx={{ 
                                borderRadius: '16px', 
                                boxShadow: '0 8px 16px rgba(0,0,0,0.1)', 
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                    boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                                },
                            }}
                        >
                            <CardActionArea component={Link} to="/careers"> {/* Link interno con React Router */}
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="src/assets/fisi2.jpg"  // Cambia esto a la ruta de tu imagen
                                    alt="Nuestras carreras"
                                    sx={{ borderRadius: '16px 16px 0 0' }}
                                />
                                <CardContent sx={{ backgroundColor: '#f5f5f5', padding: '16px' }}>
                                    <Typography 
                                        variant="h6" 
                                        component="div" 
                                        sx={{ fontWeight: 'bold', marginBottom: 1 }}
                                    >
                                        Nuestras carreras
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Tenemos 3 carreras, ¡lleve casero!
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default CardComponent;
