import './styles/App.css'
import CardComponent from './components/card';
import { Home } from '@mui/icons-material';

function Home() {
  return (
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
            </Container>
  );
}

export default Home;