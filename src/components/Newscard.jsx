// src/components/NewsCard.js
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';

const newsData = [
    {
        title: "ENEISOFT 2024",
        description: "El encuentro nacional de estudiantes de ingeniería de software ya está por comenzar, no te pierdas las novedades.",
        image: "src/assets/eneisoft.jpg",
    },
    {
        title: "Nueva Tecnología en Software",
        description: "Explora las últimas tendencias en el desarrollo de software para el 2024.",
        image: "src/assets/tech_news.jpg",
    },
    {
        title: "Evento de Networking",
        description: "Únete a nosotros en un evento exclusivo de networking para estudiantes de ingeniería.",
        image: "src/assets/networking_event.jpg",
    },
];

const NewsCard = () => {
    return (
        <Box my={4}>
 
            <Box display="flex" flexDirection="column" alignItems="center">
                {newsData.map((news, index) => (
                    <Box key={index} display="flex" justifyContent="center" alignItems="center" mb={4}>
                        <Card sx={{ display: 'flex', width: 800, height: 200 }}>
                            <Box sx={{ flex: 1, padding: 2 }}>
                                <CardContent sx={{ paddingBottom: 0 }}>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                                        {news.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {news.description}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ paddingTop: 0 }}>
                                    <Button size="small" color="primary">
                                        Leer más
                                    </Button>
                                </CardActions>
                            </Box>
                            <CardMedia
                                component="img"
                                sx={{ width: '50%', height: '100%', objectFit: 'cover' }}
                                image={news.image}
                                alt={news.title}
                            />
                        </Card>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default NewsCard;
