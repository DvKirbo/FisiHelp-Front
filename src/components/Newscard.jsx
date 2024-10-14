import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Slider from 'react-slick'; 

const newsData = [
    {
        "title": "ENEISOFT 2024",
        "description": "El encuentro nacional de estudiantes de ingeniería de software ya está por comenzar, no te pierdas las novedades.",
        "image": "src/assets/eneisoft.jpg",
        "link": "/eneisoft"
    },
    {
        "title": "Nueva Tecnología en Software",
        "description": "Explora las últimas tendencias en el desarrollo de software para el 2024.",
        "image": "src/assets/tech_news.jpg",
        "link": "/tecnologia"
    },
    {
        "title": "Evento de Networking",
        "description": "Únete a nosotros en un evento exclusivo de networking para estudiantes de ingeniería.",
        "image": "src/assets/networking_event.jpg",
        "link": "/networking"
    },
    {
        "title": "Conferencia sobre IA",
        "description": "Asiste a la conferencia sobre inteligencia artificial y sus aplicaciones en el mundo moderno.",
        "image": "src/assets/ai_conference.jpg",
        "link": "/ai-conference"
    },
    {
        "title": "Hackathon Nacional",
        "description": "Participa en el hackathon nacional y muestra tus habilidades de programación.",
        "image": "src/assets/hackathon.jpg",
        "link": "/hackathon"
    },
    {
        "title": "Taller de Desarrollo Web",
        "description": "Aprende las últimas técnicas de desarrollo web en este taller interactivo.",
        "image": "src/assets/web_development.jpg",
        "link": "/web-development"
    },
    {
        "title": "Seminario sobre Seguridad Informática",
        "description": "Descubre las mejores prácticas para proteger tus aplicaciones en este seminario especializado.",
        "image": "src/assets/cyber_security.jpg",
        "link": "/cyber-security"
    },
    {
        "title": "Feria de Empleo",
        "description": "Conoce a las mejores empresas del sector tecnológico en nuestra feria de empleo.",
        "image": "src/assets/job_fair.jpg",
        "link": "/job-fair"
    },
    {
        "title": "Ciclo de Conferencias de Tecnología",
        "description": "Un ciclo de conferencias donde expertos del sector compartirán sus conocimientos.",
        "image": "src/assets/tech_talks.jpg",
        "link": "/tech-talks"
    },
    {
        "title": "Bootcamp de Programación",
        "description": "Intensivo bootcamp para aprender a programar en diversas tecnologías.",
        "image": "src/assets/programming_bootcamp.jpg",
        "link": "/programming-bootcamp"
    }
];

const NewsCard = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true, 
    };

    return (
        <Box 
            my={4} 
            sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                padding: 2 
            }}
        >
            <Box sx={{ width: 800 }}>
                <Slider {...settings}>
                    {newsData.map((news, index) => (
                        <Box key={index} display="flex" justifyContent="center" alignItems="center" mb={4}>
                            <Card 
                                sx={{ 
                                    display: 'flex', 
                                    width: '100%', 
                                    borderRadius: 2, 
                                    boxShadow: 3, 
                                    overflow: 'hidden', 
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    sx={{ 
                                        height: 300, 
                                        width: '50%', 
                                        objectFit: 'cover', 
                                    }}
                                    image={news.image}
                                    alt={news.title}
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 2, width: '50%' }}>
                                    <CardContent sx={{ paddingBottom: 0 }}>
                                        <Typography 
                                            gutterBottom 
                                            variant="h5" 
                                            component="div" 
                                            sx={{ fontWeight: 'bold', color: '#002855', mb: 1 }}
                                        >
                                            {news.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}> 
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ paddingTop: 0, justifyContent: 'center' }}> 
                                        <Button 
                                            size="small" 
                                            variant="contained" 
                                            color="primary" 
                                            sx={{ borderRadius: 16, fontWeight: 'bold', padding: '10px', paddingTop:'8px',paddingBottom:'8x' ,backgroundColor: '#C32148'}} // Aumentar el radio de los bordes
                                            onClick={() => window.location.href = news.link} 
                                        >
                                            Leer más
                                        </Button>
                                    </CardActions>
                                </Box>
                            </Card>
                        </Box>
                    ))}
                </Slider>
            </Box>
            <style jsx global>{`
                .slick-prev:before, .slick-next:before {
                    color: black; /* Cambia el color a negro */
                }
            `}</style>
        </Box>
    );
};

export default NewsCard;
