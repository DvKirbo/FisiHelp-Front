import Slider from "react-slick";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css'
import home1 from '../../assets/home1.jpg'
import home2 from '../../assets/home2.jpg'
import home3 from '../../assets/home3.jpg'
const images = [
  home1,
  home2,
  home3,
];

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
        <Typography color={'white'} sx={{fontSize:'6vw', fontWeight: 'bold', width:'100%', lineHeight:1.1}}>FISI UNMSM</Typography>
        <Typography color={'white'} sx={{display:{xs:'none', sm:'flex'}, fontSize:'1.3vw', width:{xs:'100%', md:'80%'}, mt:3}}>
          Facultad de Ingeniería de Sistemas e Informática de la Universidad Nacional Mayor de San Marcos
        </Typography>
        <Typography color={'white'} sx={{display:{xs:'flex', sm:'none'}, my:2, justifyContent:'center'}}>Bienvenido a UYWA</Typography>
      </Box>
      <Box sx={{
      position: 'absolute',
      zIndex: 1,
      background: 'linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(50, 50, 50, 0) 80%)',
      width: '80%',
      height:'95%'
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