import Slider from "react-slick";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css'

const images = [
  "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/332540989_776366830509625_4890098324205453623_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGtHfdBRUY_LJ5C5qKwB5W8Ox8CZMqMiTQ7HwJkyoyJNMR5JEPiD05iL5Mz-oG_Kis6SntgQbP-dTrPBAzewh-N&_nc_ohc=f-BFRpErUXcQ7kNvgHOt6Ac&_nc_ht=scontent-lim1-1.xx&_nc_gid=A-97O9aR-toT2TmKMOSfGuH&oh=00_AYDkifzKbKhbuyrcT4uAnC2Z0q0KGQ6VDW6WDAl02gxQeQ&oe=6703F2F7",
  "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/395570980_311613321621397_5955970779952218810_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFpUQ0WFBiqVQqogZH-Cq43QF7OT4MlJfpAXs5PgyUl-gc-FenOPJae1FwbWsQNbmaqsjBoRj7nAhEmxNH9yMDJ&_nc_ohc=RxawaJwlEQsQ7kNvgEUqbcB&_nc_ht=scontent-lim1-1.xx&_nc_gid=A1kE8IHcyCJW8fxX1dSq0h5&oh=00_AYC7UOQVk29jbqVlbbBr-TC23pROgtAmBdZ607l4uMv_PA&oe=67040ADA",
  "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/304730557_129340043182060_396634684067055895_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH_xqFM4f4WLKuOynQAs_ixjnMgKeEm8F6OcyAp4SbwXuk8c71KJYAJ1OmSh9oplIITZDAeU9xnF9WK9aw71lOl&_nc_ohc=8i6ghWZ4J0sQ7kNvgF5JlaP&_nc_ht=scontent-lim1-1.xx&_nc_gid=ATpiy3AkpbMdPMrWgN4IAIl&oh=00_AYAGVRs4lvlMVzr1Dte-0R_zWqA5cAD6iZFzetHnz9VLQA&oe=6703F55C"
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
          wasa
        </Typography>
        <Typography color={'white'} sx={{display:{xs:'flex', sm:'none'}, my:2, justifyContent:'center'}}>Bienvenido a UYWA</Typography>
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