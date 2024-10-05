// src/components/EventCard.jsx
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';

// Array de datos para eventos
const eventData = [
    {
        title: "Evento de Tecnología",
        description: "Un evento sobre las últimas innovaciones en tecnología.",
        image: "src/assets/event_tech.jpg",
    },
    {
        title: "Taller de Programación",
        description: "Aprende las bases de la programación en este taller práctico.",
        image: "src/assets/event_programming.jpg",
    },
    {
        title: "Conferencia de Ingeniería",
        description: "Únete a nosotros para una conferencia sobre el futuro de la ingeniería.",
        image: "src/assets/event_engineering.jpg",
    },
    {
        title: "Evento de Tecnología",
        description: "Un evento sobre las últimas innovaciones en tecnología.",
        image: "src/assets/event_tech.jpg",
    },
    {
        title: "Taller de Programación",
        description: "Aprende las bases de la programación en este taller práctico.",
        image: "src/assets/event_programming.jpg",
    },
    {
        title: "Conferencia de Ingeniería",
        description: "Únete a nosotros para una conferencia sobre el futuro de la ingeniería.",
        image: "src/assets/event_engineering.jpg",
    },
    {
        title: "Taller de Programación",
        description: "Aprende las bases de la programación en este taller práctico.",
        image: "src/assets/event_programming.jpg",
    },
    {
        title: "Conferencia de Ingeniería",
        description: "Únete a nosotros para una conferencia sobre el futuro de la ingeniería.",
        image: "src/assets/event_engineering.jpg",
    },
];

const EventCard = ({ title, description, image }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={image} // Utiliza la imagen pasada como prop
                    alt={title} // Cambia el alt para que sea dinámico
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title} {/* Utiliza el título pasado como prop */}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {description} {/* Utiliza la descripción pasada como prop */}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

// Componente que renderiza todas las EventCards
const EventCardList = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" mb={4}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {eventData.map((event, index) => (
                    <Box key={index} m={2}>
                        <EventCard
                            image={event.image}
                            title={event.title}
                            description={event.description}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default EventCardList;
