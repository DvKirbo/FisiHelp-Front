import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import './CardPrincipal.css'; 

export const cardData = [
    {
        image: 'src/pages/Reserva/assets/reserva1.jpg',
        title: 'Reserva de Cancha',
        description: 'Reserva la cancha sintetica de la FISI, para jugar con tus compañeros o amigos en tus tiempos libres',
    },
    {
        image: 'src/pages/Reserva/assets/reserva2.jpg',
        title: 'Reserva de Capilla Fisiana',
        description: 'Reserva de la capilla para eventos y ceremonias religiosas o culturales',
    },
    {
        image: 'src/pages/Reserva/assets/reserva3.jpg',
        title: 'Reserva de Auditorio',
        description: 'Reserva el auditorio de la FISI para tus exposiciones o eventos',
    },
    {
        image: 'src/pages/Reserva/assets/reserva4.jpg',
        title: 'Reserva de Salones',
        description: 'Reserva un salón de la FISI para tus clases, reuniones o eventos',
    },
];

export default function CardPrincipal() {
    return (
        <div className="card-container"> 
            {cardData.map((card, index) => (
                <Card className="card-principal" key={index}sx={{borderRadius:'15px'}}> 
                    {/* Imagen de fondo */}
                    <CardMedia
                        component="img"
                        alt={card.title} 
                        height="300"
                        image={card.image} 
                        className="card-image" 
                    />

                    <Box className="card-overlay" /> 
                    <CardContent className="card-content"> 
                        <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '2.2rem', fontWeight: 'bold' }}>
                            {card.title} 
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2, fontSize: '1.5rem' }}>
                            {card.description} 
                        </Typography>
                        <Button
                            variant="outlined"
                            size= "large"
                            sx={{
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginRight: 'auto',
                                marginLeft: 'auto',
                                borderColor: 'white',
                                transition: 'background-color 0.3s ease',
                                borderRadius: '15px',
                                padding: '5px 30px',
                                width: 'fit-content',
                                fontSize: '1.2rem',
                            }}
                        >
                            Reservar
                        </Button>

                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
