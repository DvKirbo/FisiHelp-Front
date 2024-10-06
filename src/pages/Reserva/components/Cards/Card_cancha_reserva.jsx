import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import image1 from '../../assets/reserva1.jpg';


export default function CanchaFisiCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image= {image1}
          alt="Cancha de la FISI"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Cancha
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Reserva la cancha sintetica de la FISI, para jugar con tus compañeros o
            amigos en tus tiempos libres.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
