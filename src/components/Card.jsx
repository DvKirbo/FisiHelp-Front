import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Definición de los datos de las tarjetas
export const cardData = [
    {
        image: 'src/assets/fisi.png', // Cambia esto por la URL de la imagen
        title: 'Quienes somos',
        description: 'Somos fisianos',
    },
    {
        image: 'src/assets/fisi2.jpg', // Cambia esto por la URL de la imagen
        title: 'Nuestras carreras',
        description: 'Tenemos 3 carreras lleve casero',
    },
    // Agrega más objetos según necesites
];

const CardComponent = ({ image, title, description }) => {
    return (
        <Card sx={{ maxWidth: 545 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={image} // Imagen pasada como prop
                title={title} // Título pasado como prop
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div"sx={{ fontWeight: 'bold' }} >
                    {title} {/* Título dinámico */}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {description} {/* Descripción dinámica */}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Más información</Button>
            </CardActions>
        </Card>
    );
};

export default CardComponent;
