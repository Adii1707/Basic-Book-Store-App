import {
    FormControl,
    FormLabel,
    FormHelperText,Input,Box,Heading, Center, Button, Image, Text,
  } from '@chakra-ui/react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../Components/Navbar';
import { Footer } from '../Components/Pages/Footer';
import { Subnav } from '../Components/Pages/Subnav';
import { useToast } from '@chakra-ui/react'


const initState= {
    email: "",
    password: ""
  }

const Login = ()=>{
    const toast = useToast()
    const user = JSON.parse(localStorage.getItem("user"));
    const [person, setperson] = useState(initState)
  
    const handlechange = (e)=>{
      const {name, value} = e.target;
      setperson({...person, [name]: value});
    }
    const {email, password} = person;
    console.log(person);
  
    const handleclick = ()=>{
      if(user.email===email && user.password===password){
        localStorage.setItem("person", JSON.stringify(person));
        toast({
            title: 'Login Successfull.',
            // description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
        })
      window.location.href = "/";
    }else{
      toast({
        title: 'Wrong credential',
        status: 'error',
        duration: 9000,
        isClosable: true,
    })
    }
    }
  

return (
    <Box>
       <Navbar />
       <Subnav />
     <Heading textAlign={"center"}>Login</Heading>
     <Center>
       
     <Box mt = {13} w= {400}  backgroundImage= "./bg.jpg" >
     <Box>
        <Image src='https://d2g9wbak88g7ch.cloudfront.net/staticimages/loginbanner.png' />

        </Box>
<FormControl>
  <FormLabel mt={10}>Email address</FormLabel>
  <Input type='email' name="email" value={email} onChange={handlechange} />
  <FormHelperText>We'll never share your email.</FormHelperText>
  <FormLabel>Password</FormLabel>
  <Input type='password' name='password' value={password} onChange={handlechange} />
  <Center>
  <Button bg="pink.500"  onClick={handleclick} w={200} mt={5}>LOGIN</Button>
  </Center>
  <Center>
  <Link to={"/signup"}>
  <Text fontWeight={"semibold"} pt="5px" >
       New to Bookswagon? Sign up
    </Text>
  </Link> 
  </Center>
</FormControl>
</Box>
     </Center>
     <hr style={{margin:"60px 80px 30px 160px"}} />
    <Footer />
    <hr style={{margin:"60px 80px 30px 160px"}} />
    
    </Box>
   
)


}

export {Login};