import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import { Box, Image, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css';


const CarouselSlider = ({...src}) => {


  return (
    <Carousel  autoPlay infiniteLoop stopOnHover showIndicators={true}>
      {src.src && src.src.map((image,i) => (
        <Box key={i}>
          <Image src={image} alt=''/>
        </Box>
      ))}
    </Carousel>
  );
};

export const SliderSlick = ({...data})=>{
//console.log(data.data)
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
return (
  <Slider {...settings}>
    {data.data.map((el, i)=>(
      <Box m={0} key={el.id} w={"300px"} alignItems="center" textAlign={"center"}>
        <Image ml={"50px"} w={"200px"} h="300px" src={el.image} />
        <Text fontWeight={"bold"}  fontSize="xl">{el.name}</Text>
        <Text>{el.author}</Text>
        <Text>{el.price}</Text>
      </Box>
    ))} 
</Slider>
)




} 
export default CarouselSlider;