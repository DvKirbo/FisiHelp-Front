import '../styles/App.css'; // Para importar App.css
import { Container, Box, Grid, Typography } from '@mui/material'; // Importar solo lo necesario de Material UI
import AutoPlay from '../components/Carousel/Carousel'; // Asegúrate de que carousel.jsx exista en la carpeta Carousel
import CardComponent from '../components/Card'; // Asegúrate de que la importación sea correcta
import NewsCard from '../components/Newscard'; // Importar el nuevo componente
import EventCardList from '../components/EventCard'; // Importa el nuevo componente EventCardList

function HomePage() {
    return (
        <>
            <AutoPlay />
            <Container maxWidth="lg">
                <CardComponent />   
                <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 2,fontWeight: 'bold' }}>
                    NOTICIAS
                </Typography>
                <NewsCard /> 

                <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 2 ,fontWeight: 'bold' }}>
                    EVENTOS
                </Typography>          
                <EventCardList /> {/* Añade el componente EventCardList aquí */}     
            </Container>
        </>
    );
}

export default HomePage;
