import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions, Box } from '@mui/material';
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
        "image": "https://isil.pe/blog/wp-content/uploads/2023/10/mejores-herramientas-desarrollo-software.png",
        "link": "/tecnologia"
    },
    {
        "title": "Evento de Networking",
        "description": "Únete a nosotros en un evento exclusivo de networking para estudiantes de ingeniería.",
        "image": "https://www.supportproevent.com/wp-content/uploads/2019/06/como-organizar-un-evento-de-networking-profesional-1.jpg",
        "link": "/networking"
    },
    {
        "title": "Conferencia sobre IA",
        "description": "Asiste a la conferencia sobre inteligencia artificial y sus aplicaciones en el mundo moderno.",
        "image": "https://informacionlogistica.com/wp-content/uploads/2022/10/aplicacion-de-la-inteligencia-artificial-para-el-financiamiento-automotriz.jpg",
        "link": "/ai-conference"
    },
    {
        "title": "Hackathon Nacional",
        "description": "Participa en el hackathon nacional y muestra tus habilidades de programación.",
        "image": "https://hub.laboratoria.la/hubfs/HUB%20COVER%20%2822%29-2.png",
        "link": "/hackathon"
    },
    {
        "title": "Taller de Desarrollo Web",
        "description": "Aprende las últimas técnicas de desarrollo web en este taller interactivo.",
        "image": "https://img-b.udemycdn.com/course/750x422/980450_7fc0_4.jpg",
        "link": "/web-development"
    },
    {
        "title": "Seminario sobre Seguridad Informática",
        "description": "Descubre las mejores prácticas para proteger tus aplicaciones en este seminario especializado.",
        "image": "https://directivosygerentes.es/wp-content/uploads/2023/02/seguridad-informatica-empresas.jpg",
        "link": "/cyber-security"
    },
    {
        "title": "Feria de Empleo",
        "description": "Conoce a las mejores empresas del sector tecnológico en nuestra feria de empleo.",
        "image": "https://cdn.www.gob.pe/uploads/document/file/6222229/941395-1.png",
        "link": "/job-fair"
    },
    {
        "title": "Ciclo de Conferencias de Tecnología",
        "description": "Un ciclo de conferencias donde expertos del sector compartirán sus conocimientos.",
        "image": "https://sg.com.mx/sites/default/files/inline-images/07.jpg",
        "link": "/tech-talks"
    },
    {
        "title": "Bootcamp de Programación",
        "description": "Intensivo bootcamp para aprender a programar en diversas tecnologías.",
        "image": "https://www.epitech-it.es/wp-content/uploads/2021/11/bootcamp-1.png",
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
        autoplaySpeed: 1500,
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
                                        {/* Agregar la descripción aquí */}
                                        <Typography variant="body2" sx={{ color: 'black', mb: 2 ,fontSize: '20px'}}>
                                            {news.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ paddingTop: 0, justifyContent: 'center' }}> 
                                        <Button 
                                            size="small" 
                                            variant="contained" 
                                            color="primary" 
                                            sx={{ borderRadius: 16, fontWeight: 'bold', padding: '10px', paddingTop: '8px', paddingBottom: '8x', backgroundColor: '#C32148' }} // Aumentar el radio de los bordes
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
