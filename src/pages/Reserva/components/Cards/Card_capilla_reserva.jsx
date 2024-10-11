import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import image2 from '../../assets/reserva2.jpg';

export default function CapillaFisiCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image= {image2}
          alt="Capilla de la FISI"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Capilla
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Expia tus pecados post parciales.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
