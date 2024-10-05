import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardComponent = ({ image, title, description }) => {
    return (
        <Card sx={{ maxWidth: 545 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={image} // Imagen pasada como prop
                title={title} // Título pasado como prop
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
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
