import {
    FormControl,
    FormLabel,
    FormHelperText,Input,Box,Heading, Center, Image, Button, useToast,
  } from '@chakra-ui/react'
import { useState } from 'react';
import { Navbar } from '../Components/Navbar';
import { Footer } from '../Components/Pages/Footer';
import { Subnav } from '../Components/Pages/Subnav';

const initState = {
  name: "",
  email: "",
  password: "",
  number: "",
}

const Signup = ()=>{
const [user, setuser] = useState(initState);
const toast = useToast()

const handlechange =(e)=>{
  const {name, value} = e.target;
      setuser({...user, [name]: value}) 

}

const {name,email, number, password} = user;

 const handleclick= (e)=>{
  e.preventDefault();
        localStorage.setItem("user",JSON.stringify(user));
        toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        window.location.href = "/Login";     
  }




return (
    <Box >
     <Navbar />
       <Subnav />
     <Heading fontSize={20} textAlign={"center"} mt={4}>SIGN UP</Heading>
     <Center  >
     <Box  >
     <Box>
        <Image src='https://d2g9wbak88g7ch.cloudfront.net/staticimages/loginbanner.png' />

        </Box>
<FormControl mt="5px" mb="5px">

<FormLabel>Name</FormLabel>
  <Input type='text'  name="name" value={name} onChange={handlechange} />
  <FormLabel >Phone Number</FormLabel>
  <Input type='number' name="number" value={number} onChange={handlechange} />
  <FormLabel>Email address</FormLabel>
  <Input type='email' name="email" value={email} onChange={handlechange} />
  <FormHelperText>We'll never share your email.</FormHelperText>
  <FormLabel>Password</FormLabel>
  <Input type='password' name="password" value={password} onChange={handlechange} />
 <Center> <Button type='submit' onClick={handleclick} bg="red.500" ml={8} mt={8} w={200} alignItems="center" >Signup</Button> </Center>

</FormControl>
</Box>
     </Center>
     <hr style={{margin:"60px 80px 30px 160px"}} />
    <Footer />
    <hr style={{margin:"60px 80px 30px 160px"}} />
    
    </Box>
   
)


}

export { Signup };