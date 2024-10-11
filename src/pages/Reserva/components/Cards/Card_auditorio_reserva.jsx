import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import image3 from '../../assets/reserva3.jpg';

export default function AuditorioFisiCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image= {image3}
          alt="Auditorio de la FISI"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Auditorio
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Reserva el auditorio de la FISI para tus exposiciones o eventos.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}