import './styles/App.css';
import ResposiveAppBar from './components/ResponsiveAppBar';
import AutoPlay from './components/Carousel/Carousel';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CardComponent from './components/card'; 
import EventList from './components/EventList';  // <--- Aquí importamos el componente de eventos

function App() {
    const cardData = [
        {
            image: 'src/assets/fisi2.jpg', 
            title: '¿Quiénes somos?',
            description: 'Somos una organización dedicada a...',
        },
        {
            image: 'src/assets/fisi.png', 
            title: 'Nuestras carreras',
            description: 'Ofrecemos una amplia gama de carreras...',
        },
    ];

    return (
        <>
            <ResposiveAppBar />
            <AutoPlay />
            <CssBaseline />
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

                    {/* Aquí agregamos el componente de eventos */}
                    <Box mt={5}>
                        <EventList />
                    </Box>
                </Box>
            </Container>
        </>
    );
}

export default App;
