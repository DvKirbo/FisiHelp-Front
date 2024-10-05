import React from 'react';
import { Card, CardContent, Typography, Grid, Box, Button, Avatar, CardMedia } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleIcon from '@mui/icons-material/People';

const events = [
  {
    date: '05 set',
    title: 'Inauguración del semestre 2024-2 para los ingresantes de estudios de posgrado en la Facultad de Educación',
    fullDate: 'Del 05 al 07 de setiembre de 2024',
    time: 'Sábado 10:00 am',
    location: 'Auditorio Luis Miró Quesada de la Guerra',
    organizer: 'Posgrado Facultad de Educación',
    image: 'https://example.com/image.jpg', // Cambia a la URL real de la imagen
  },
  // Puedes agregar más eventos aquí
];

const EventCard = ({ event }) => {
  return (
    <Card sx={{ display: 'flex', mb: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <CardContent>
          <Typography variant="subtitle2" color="textSecondary">
            {event.fullDate}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {event.title}
          </Typography>
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <EventIcon fontSize="small" />
            </Grid>
            <Grid item>
              <Typography variant="body2">{event.time}</Typography>
            </Grid>
          </Grid>
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <LocationOnIcon fontSize="small" />
            </Grid>
            <Grid item>
              <Typography variant="body2">{event.location}</Typography>
            </Grid>
          </Grid>
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <PeopleIcon fontSize="small" />
            </Grid>
            <Grid item>
              <Typography variant="body2">{event.organizer}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 160 }}
        image={event.image}
        alt={event.title}
      />
    </Card>
  );
};

const EventList = () => {
  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom>
        Eventos
      </Typography>
      {events.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Ver más
      </Button>
    </Box>
  );
};

export default EventList;
