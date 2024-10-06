import '../styles/App.css'; // Para importar App.css
import CardComponent from '../components/Card'; // Asegúrate de que la importación sea correcta
import AutoPlay from '../components/Carousel/Carousel'; // Asegúrate de que carousel.jsx exista en la carpeta Carousel
import { Container, Box, Grid, Typography } from '@mui/material'; // Importar solo lo necesario de Material UI
import NewsCard from '../components/Newscard'; // Importar el nuevo componente
import { cardData } from '../components/Card'; // Asegúrate de que cardData esté definido en card.js
<<<<<<< HEAD:src/pages/Home.jsx
import EventSection from '../components/EventCard'; // Importa el nuevo componente EventCardList
function Home() {
=======
import EventCardList from '../components/EventCard'; // Importa el nuevo componente EventCardList

function HomePage() {
>>>>>>> aaecb270feb3cbd3ae21bbea5d80bb6df834f704:src/pages/HomePage.jsx
    return (
        <>
            <AutoPlay />
            <Container maxWidth="lg">
                <Box my={4}>
                    <Grid container spacing={4}>
                        {cardData.map((item, index) => (
                            <Grid item key={index} xs={12} sm={6} md={6}>
                                <CardComponent
                                    image={item.image}       
                                    title={item.title}       
                                    description={item.description} 
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Typography variant="h4" sx={{ textAlign: 'center',   marginBottom: 2, color: '#FFFFFF', fontWeight: 'bold' }}>
                    NOTICIAS
                </Typography>
                <NewsCard/> 
                <Typography variant="h4" sx={{ textAlign: 'center',   marginBottom: 2, color: '#FFFFFF', fontWeight: 'bold' }}>
                    EVENTOS
                </Typography>          
                <EventSection /> {/* Añade el componente EventCardList aquí */}     
            </Container>
        </>
    );
}

export default HomePage;
