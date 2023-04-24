import { Box, Flex, Image, Select, SimpleGrid, Spacer, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Navbar } from '../Components/Navbar';
import { Footer } from '../Components/Pages/Footer';
import { Subnav } from '../Components/Pages/Subnav';
// import { Sidebar } from '../Components/Sidebar';
import { getData } from '../Redux/action';

export const BookList = () => {

const dispatch = useDispatch();
const [SearchParams] = useSearchParams();
const location = useLocation();
const [value, setValue] = useState("");

const Books = useSelector((store)=> {
 
  return store.reducer.data
});

// Sorting Functionality........
  
    if(value === "asc" ){
     Books.sort(function (a,b){
       // console.log(b.actualprice)
       return (+a.actualprice)-(+b.actualprice);
     });
     
     
    }
   
   else if(value === "desc"){
     Books.sort(function (a,b){
       
       return (+b.actualprice) - (+a.actualprice);
     });
   }

// useEffect to render the data .......

     useEffect(()=>{
 
         if(location ){
          const getparams = {
               params: {
            author: SearchParams.getAll("author")
               }
          }
          dispatch(getData(getparams))
         }
  
       }, [dispatch, location, SearchParams]);


      




  return (
      <Box >
       <Link to={"/"} ><Navbar /></Link> 
        <Subnav />
       <Flex  minChildWidth='120px' width={"70%"} m="auto" column={2}>
        {/* <Sidebar />   */}
      <Box alignItems={"center"} >
        <Box textAlign={"center"}>
          <Text fontSize={"38px"} fontWeight={"medium"} fontFamily={"initial"}>Books</Text>
        </Box>
        {/* Filters */}
        <Box width={"70%"} margin={"auto"} display={"flex"}  flexDirection={{base:"column",sm:"column", md:"row", lg:"row"}} justifyContent={"space-between"} >
             <Text fontWeight={"medium"} m="5px">
              {Books.length} Books Found
             </Text>
             
             <Select onChange={(e)=>setValue(e.target.value)} mb="10px" w="180px" p="5px" placeholder='Relevance'>
  <option value={"asc"} >Price: Low to High</option>
  <option value={"desc"} >Price: High to Low</option>
  <option value='option3'>Discount</option>
</Select>
        </Box>
     

{/* Products */}

    <SimpleGrid gap={"6"} justifyItems={"center"} spacing={2}  columns={{sm:"2", md:"2", lg:"4" }} >
    { Books?.map((book)=> 
   (
      <Box w="250px" textAlign={"center"} boxShadow='base' b={"3px"} borderColor={"gray.400"} key={book._id}>
        <Image w="250px" src= {book.image} h="300px" p="10px" alt="books" />
        <Text pt="5px" overflow={"hidden"} fontWeight={"medium"}>{book.booktitle}</Text>
        <Text overflow={"hidden"} pt="5px">{book.author}</Text>
        <Text pt="5px" color={"red.600"} fontWeight={"semibold"}>{book.actualprice}</Text>
      </Box>
    ))}
    </SimpleGrid>
    </Box>
    </Flex>
    <hr style={{width:"70%", margin:"auto" ,marginTop:"60px",marginBottom:"70px", }} />
    <Footer />
    <hr style={{width:"70%", margin:"auto",marginTop:"60px" ,marginBottom:"70px", }} />
    
    </Box>
  )
   
   }