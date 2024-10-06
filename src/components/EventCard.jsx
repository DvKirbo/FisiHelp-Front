import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ScheduleIcon from '@mui/icons-material/Schedule';

const events = [
  { date: '05 set', title: 'Inauguración del semestre 2024-2 para los ingresantes de estudios de posgrado en la Facultad de Educación' },
  { date: '07 ago', title: 'Programa de formación Ingenier' },
  { date: '27 jun', title: 'Conferencias virtuales por el Día del Maestro' },
  { date: '13 jun', title: 'USO DE HERRAMIENTAS DE INTELIGENCIA DE ARTIFICIAL GENERATIVA' },
  { date: '13 jun', title: 'Technology, Artificial Intelligence and Digital Materials in ELT: Specialisation Course' },
  { date: '15 oct', title: 'Taller de Desarrollo Ágil: Scrum en la Práctica' },
  { date: '22 oct', title: 'Conferencia sobre Seguridad en Aplicaciones Web' },
];
const EventSection = () => {
  return (
    <Box sx={{ p: 4 }}>

      <Grid container spacing={4}>
        {/* Lista de eventos */}
        <Grid item xs={12} md={5}>
          <Card sx={{ p: 2 }}>
            <List>
              {events.map((event, index) => (
                <ListItem key={index} sx={{ opacity: index === 0 ? 1 : 0.4 }}>
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
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Luis Miró Quesada de la Guerra</Typography>
                <Button variant="contained" color="success" size="small">Ver más</Button>
              </Box>
              <Box
                component="img"
                sx={{ width: '100%', borderRadius: '8px', mt: 2 }}
                src="/src/assets/fisi2.jpg" // Puedes reemplazarlo por tu imagen
                alt="Evento destacado"
              />
              <Typography variant="h6" sx={{ mt: 2 }}>
                Inauguración del semestre 2024-2 para los ingresantes de estudios de posgrado en la Facultad de Ingenieria de sistemas e informatica
              </Typography>
              <Typography variant="body2" sx={{ color: 'gray', mt: 1 }}>
                Del 05 al 07 de septiembre de 2024
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <LocationOnIcon sx={{ mr: 1, color: 'gray' }} />
                <Typography variant="body2" sx={{ color: 'gray' }}>Auditorio de la FISI</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <ScheduleIcon sx={{ mr: 1, color: 'gray' }} />
                <Typography variant="body2" sx={{ color: 'gray' }}>Sábado 10:00 am</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EventSection;
