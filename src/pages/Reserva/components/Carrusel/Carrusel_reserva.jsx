import Slider from "react-slick";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carrusel_reserva.css';

import image1 from '../../assets/reserva1.jpg';
import image2 from '../../assets/reserva2.jpg';
import image3 from '../../assets/reserva3.jpg';
import image4 from '../../assets/reserva4.jpg';

const images = [image1, image2, image3,image4];

function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    swipe: false,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  
  return (
    <Box>
      <Box sx={{position:'absolute', height:"70%", width:{xs:'80%', md:'50%'},mt:'70px', py:'5%',px:'10%', zIndex:2, textAlign:{xs:'center', md:'start'}, alignContent:'center'}}>
        <Typography color={'white'} sx={{fontSize:'6vw', fontWeight: 'bold', width:'100%', lineHeight:1.1}}>Reserva</Typography>
        <Typography color={'white'} sx={{display:{xs:'none', sm:'flex'}, fontSize:'1.3vw', width:{xs:'100%', md:'80%'}, mt:3}}>
            Cualquier espacio de la FISI
        </Typography>
      </Box>
      <Box sx={{
      position: 'absolute',
      zIndex: 1,
      background: 'linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(50, 50, 50, 0) 80%)',
      width: '80%',
      height:'100%'
      }}>
      </Box>
      <Box className="slider-container" sx={{position:'relative'}} data-testid="carousel">  
        <Slider {...settings}>
        {images.map((src, index) => (
            <div key={index}>
              <img className="images-carousel" src={src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

export default AutoPlay;