import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ScheduleIcon from '@mui/icons-material/Schedule';

const events = [
  { date: '05 set', title: 'Inauguración del semestre 2024-2 para los ingresantes de estudios de posgrado en la Facultad de Sistemas', image: '/src/assets/fisi2.jpg', location: 'Auditorio de la FISI', time: 'Sábado 10:00 am' },
  { date: '07 ago', title: 'Programa de formación Ingenier', image: '/src/assets/event3.jpg', location: 'Sala 101', time: 'Lunes 9:00 am' },
  { date: '27 jun', title: 'Conferencias virtuales por el Día del Maestro', image: '/src/assets/event3.jpg', location: 'Virtual', time: 'Miércoles 2:00 pm' },
  { date: '13 jun', title: 'USO DE HERRAMIENTAS DE INTELIGENCIA DE ARTIFICIAL GENERATIVA', image: '/src/assets/event4.jpg', location: 'Sala 202', time: 'Jueves 1:00 pm' },
  { date: '15 oct', title: 'Taller de Desarrollo Ágil: Scrum en la Práctica', image: '/src/assets/event5.jpg', location: 'Sala 303', time: 'Viernes 11:00 am' },
  { date: '22 oct', title: 'Conferencia sobre Seguridad en Aplicaciones Web', image: '/src/assets/event6.jpg', location: 'Auditorio Principal', time: 'Sábado 3:00 pm' },
];


const EventSection = () => {
  const [selectedEvent, setSelectedEvent] = useState(events[0]);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={4}>
        {/* Lista de eventos */}
        <Grid item xs={12} md={5}>
          <Card sx={{ p: 2 }}>
            <List>
              {events.map((event, index) => (
                <ListItem button key={index} onClick={() => handleEventClick(event)} sx={{ opacity: index === 0 ? 1 : 0.4 }}>
                  <ListItemIcon>
                    <Box sx={{ textAlign: 'center', p: 1, backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{event.date.split(' ')[0]}</Typography>
                      <Typography variant="body2">{event.date.split(' ')[1]}</Typography>
                    </Box>
                  </ListItemIcon>
                  <ListItemText primary={event.title} />
                </ListItem>
              ))}
            </List>
          </Card>
        </Grid>

        {/* Evento destacado */}
        <Grid item xs={12} md={7}>
          <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Universidad Nacional Mayor de SM</Typography>
                <Button variant="contained" color="success" size="small">Ver más</Button>
              </Box>
              <Box
                component="img"
                sx={{ width: '100%', borderRadius: '8px', mt: 2 }}
                src={selectedEvent.image} // Imagen actualizada según el evento seleccionado
                alt="Evento destacado"
              />
              <Typography variant="h6" sx={{ mt: 2 }}>
                {selectedEvent.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'gray', mt: 1 }}>
                {selectedEvent.date} {/* Puedes ajustar el rango de fechas si es necesario */}
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <LocationOnIcon sx={{ mr: 1, color: 'gray' }} />
                <Typography variant="body2" sx={{ color: 'gray' }}>{selectedEvent.location}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <ScheduleIcon sx={{ mr: 1, color: 'gray' }} />
                <Typography variant="body2" sx={{ color: 'gray' }}>{selectedEvent.time}</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EventSection;
