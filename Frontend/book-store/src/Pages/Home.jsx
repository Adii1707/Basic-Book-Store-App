import React from 'react'
// import {Heading} from "@chakra-ui/react";
import { Navbar } from '../Components/Navbar';
import { Subnav } from '../Components/Pages/Subnav';
import {Box, Image, Text, Flex, SimpleGrid} from "@chakra-ui/react";
import CarouselSlider, { SliderSlick } from '../Components/CarouselSlider';
import { Footer } from '../Components/Pages/Footer';


export const Home = () => {

  const src = [
    "https://www.bookswagon.com/images/bannerimages/80_inr.jpg?v=1.4",
    "https://www.bookswagon.com/images/bannerimages/79_inr.jpg?v=1.4",
    "https://www.bookswagon.com/images/bannerimages/82_inr.jpg?v=1.4",
    "https://www.bookswagon.com/images/bannerimages/83_inr.jpg?v=1.4",
    "https://www.bookswagon.com/images/bannerimages/81_inr.jpg?v=1.4",
    "https://www.bookswagon.com/images/bannerimages/84_inr.jpg?v=1.4",
  ];
  const img = [
             {image: "https://www.bookswagon.com/Images/staticimages/icon1.png",
               name: "Best Seller"},
             {image: "https://www.bookswagon.com/Images/staticimages/icon8.png",
             name: "Award Winners"},
            {image: "https://www.bookswagon.com/Images/staticimages/icon4.png",
           name: "Box Sets"},
          {image:  "https://www.bookswagon.com/Images/staticimages/icon7.png",
          name: "International Best Seller"},

         {image: "https://www.bookswagon.com/Images/staticimages/icon5.png",
         name: "Fictions Books"},    
        {image: "https://www.bookswagon.com/Images/staticimages/icon2.png",
        name: "New Arrivals"},
        {image: "https://www.bookswagon.com/Images/staticimages/tarot.png",
        name: "Tarot Card"},
      ]      
  
  const img1 = [
    "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/333/9788126729333.jpg",
    "https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/712/9781974720712.jpg",
    "https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/785/9781974722785.jpg",
    
    "https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/340/9781974732340.jpg",
    "https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/048/9781974724048.jpg",
    "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/362/9781646512362.jpg",

  ]    

   const img2= [
          "https://www.bookswagon.com/images/promotionimages/web/tarotcardWeb.jpg?v=1.6",
          "https://www.bookswagon.com/images/promotionimages/web/ExamWeb.jpg?v=1.6",
          "https://www.bookswagon.com/images/promotionimages/web/BussinessWeb.jpg?v=1.6",

   ]

   const data = [
    { id: 1,
      image: "https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/126/9780143452126.jpg",
      name: "Do It Today: Overcome",
    author: "Foroux, Darius",
  price: 199
},
    {id: 2,
      image: "https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/194/9781612680194.jpg",
    name: "Rich Dad Poor Dad",
    author: "Robert T Kiyosaki",
    price: 598
  },
   {id: 3,
    image: "https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/185/9789385986185.jpg",
  name: "Bhagavad Gita: Yatharoop",
  author: "A.C. Bhaktivedanta Swami Prabhupada ",
  price: 455
},
 {id: 4,
  image:  "https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/368/9781501110368.jpg",
 name: "It Ends with Us",
 author: "Colleen Hoover",
  price: 274
},

{id: 5,
  image: "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/895/9781786330895.jpg",
name: "Ikigai",
author: "Francesc Miralles",
price: 391
}, 

{ 
  id: 6,
  image: "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/831/9781847941831.jpg",
name: "Atomic Habits",
author: "James Clear",
price: 551
},

{ id: 7,
  image: "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/268/9789390166268.jpg",
name: "The Psychology of Money",
author: "Morgan Housel",
price: 295
},
]      


   
  return (
    <div>
        <Navbar />
        <Subnav />
        {/* lANDING PAGE */}

     <Box>
        <Box mt="2px" mb="2px">
            <Image src="https://www.bookswagon.com/images/promotionimages/web/1_alltimefavourite.jpg?v=1.6" />
        </Box>
        <Box>
           { <CarouselSlider src= {src} />}
          </Box>

          <Box alignContent={"center"} alignItems="center">
          <hr style={{margin:"60px 80px 30px 160px"}} />

            <SimpleGrid minChildWidth='120px' w="80%" m="auto"  mt = "50px" columns={7}  pt="10px" pb="10px" justifyContent={"center"} justifyItems="center" gap={2}>
           {img.map((el, i)=>(
            <Box key={i}  >
                 <Image key={i} src={el.image} h="100px" w="100px" />
                  <Text key={i} ml={3} w="120px" >{el.name}</Text>
            </Box>
           
           ))}
           </SimpleGrid>
           <hr style={{margin:"60px 80px 30px 160px"}} />

          </Box>
        <hr style={{margin:"60px 80px 30px 160px"}} />

          <Box textAlign={"center"} marginBottom="10px" marginTop={"10px"}>
            <Text fontSize={"38px"} fontWeight={"medium"} fontFamily={"Italic"}>Now Trending</Text>
          </Box>
          <Box>

          <SimpleGrid minChildWidth='120px' w="80%" m="auto" columns={6} gap="40px">
          {img1.map((el,i)=>(
            <Image src={el} key={i} w="250px" m="20px" />
            ))}
         </SimpleGrid>
          </Box>
        <hr style={{margin:"60px 80px 30px 160px"}} />

         <Box>
         <SimpleGrid minChildWidth='120px' width={"80%"} m="auto" mt = "50px"  gap="40px">
  <Image  w="250px" m="20px" src={"https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/904/9789389143904.jpg"} />
  <Image w="250px" m="20px" src="https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/662/9781408726662.jpg" />
  <Image w="250px" m="20px"  src ="https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/376/9780345538376.jpg" />
  <Image w="250px" m="20px"  src="https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/348/9781984818348.jpg" />
  <Image w="250px" m="20px" src={"https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/904/9789389143904.jpg"} />
  <Image w="250px" m="20px" src="https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/662/9781408726662.jpg" />
 
</SimpleGrid>
         </Box>
         <hr style={{margin:"60px 80px 30px 160px"}} />

         <Box width={"80%"} m="auto" mt = "30px" >
         { <CarouselSlider src= {img2} /> }
         </Box>
         <Box width={"80%"} m="auto" mt = "30px">
          <Text textAlign={{base:"center",sm:"center", md:"start", lg:"start"}} fontSize={{sm:"20px", md:"30px", lg:"30px"}} ml={5} fontWeight={"medium"}>
            Best Seller
            </Text>
            <SliderSlick data = {data}  />
         </Box>
         <hr style={{margin:"60px 80px 30px 160px"}} />

         <Box width={"80%"} m="auto" mt = "30px">
          <Text textAlign={{base:"center",sm:"center", md:"start", lg:"start"}} fontSize={{sm:"20px", md:"30px", lg:"30px"}} ml={5} fontWeight={"medium"}>
            Best Seller
            </Text>
            <SliderSlick data = {data}  />
         </Box>
         <hr style={{margin:"60px 80px 30px 160px", width:"80%", margin:"auto"}} />
         <Box display={"flex"} flexDirection={{sm:"column", md:"row", lg:"row"}}  width={"80%"} m="auto" mt = "50px">
             <Box>
             <Text fontSize={{sm:"20px", md:"30px", lg:"30px"}} m="3px" ml={5} fontWeight={"medium"}>
            Fiction Books
            </Text>
             <Image src='https://www.bookswagon.com/images/promotionimages/web/nonfictionbooksWeb.jpg?v=2.1' w="600px"  />
             </Box>
             <Box>
             <Text fontSize={{sm:"20px", md:"30px", lg:"30px"}} ml={5} m="3px" fontWeight={"medium"}>
            Manga Mania Best Seller
            </Text>
             <Image src='https://www.bookswagon.com/images/promotionimages/web/4_mangamania.jpg?v=2.1' w = "600px" />
             </Box>
         </Box>
         <hr style={{margin:"60px 80px 30px 160px"}} />
         <Box width={"80%"} m="auto" mt = "30px">
          <Text textAlign={{base:"center",sm:"center", md:"start", lg:"start"}} fontSize={{sm:"20px", md:"30px", lg:"30px"}} ml={5} m="5px" fontWeight={"medium"}>
            Internation BestSeller
            </Text>
            <SliderSlick data = {data}  />
         </Box>
         <hr style={{margin:"60px 80px 30px 160px"}} />
         <Box marginLeft={"160px"}  mr={"80px"} mt = "50px">
          <Image src="https://www.bookswagon.com/images/promotionimages/web/MedicalWeb.jpg?v=1.5" />
         </Box>
         <hr style={{margin:"60px 80px 30px 160px"}} />
         <Box width={"80%"} m="auto"  mt = "30px">
          <Text textAlign={{base:"center",sm:"center", md:"start", lg:"start"}} fontSize={{sm:"20px", md:"30px", lg:"30px"}} ml={5} m="5px" fontWeight={"medium"}>
            Award Winners
            </Text>
            <SliderSlick data = {data}  />
         </Box>
         <hr style={{margin:"60px 80px 30px 160px"}} />
         <Box bg="#ECECEC" width={"80%"} m="auto" mt = "10px">
          <Text pt="10px" textAlign={"center"} fontSize={"32px"} fontWeight="medium" fontFamily="revert-layer" color={"red.500"}>Featured Author</Text>
        <SimpleGrid minChildWidth='120px'  column={6}  textAlign={"center"} pl="70px" pt={10} pb={10} alignItems={"center"} pr="10px" gap={10}  >
           <Box>
           <Image src='https://d2g9wbak88g7ch.cloudfront.net/authorimages/stephen-edwin-king.jpg' borderRadius='full'
  boxSize='150px' />
          <Text>Tephen King</Text>
           </Box>
           <Box>
           <Image src='https://d2g9wbak88g7ch.cloudfront.net/authorimages/dillian.jpg' borderRadius='full'
  boxSize='150px' />
<Text>GIllian Flynn</Text>
           </Box>
           <Box>
           <Image src='https://d2g9wbak88g7ch.cloudfront.net/authorimages/gayle-forman.jpg' borderRadius='full'
  boxSize='150px' />
<Text>Gayle Forman</Text>
           </Box>
           <Box>
           <Image src='https://d2g9wbak88g7ch.cloudfront.net/authorimages/ma10_milestones_segal.jpg' borderRadius='full'
  boxSize='150px'/>
         <Text>Erich Segal</Text>
           </Box>
           <Box>
           <Image src='https://d2g9wbak88g7ch.cloudfront.net/authorimages/dr-shashi-tharoor-2.jpg' borderRadius='full'
  boxSize='150px' />
       <Text>Shashi Tharoor</Text>
           </Box>
           <Box >
           <Image src='https://d2g9wbak88g7ch.cloudfront.net/authorimages/sylvia2.jpg' borderRadius='full'
  boxSize='150px' />
            <Text>Sylvia Plath</Text>
           </Box>
          
        </SimpleGrid>
        </Box>
        <hr style={{margin:"60px 80px 30px 160px"}} />
    <Footer />
    <hr style={{margin:"60px 80px 30px 160px"}} />
    
     </Box>
          
    </div>
  )
}
