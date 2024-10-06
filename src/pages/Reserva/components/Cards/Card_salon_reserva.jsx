import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import image4 from '../../assets/reserva4.jpg';

export default function SalonFisiCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image= {image4}
          alt="Salón de la FISI"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Salón o Laboratorio
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Reserva un salón o laboratorio para estudiar o realizar trabajos en grupo.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}