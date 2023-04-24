import React from 'react'
import { SimpleGrid } from '@chakra-ui/react';
import {Text, Box} from "@chakra-ui/react"
export const Footer = () => {
  return (
    <SimpleGrid width={"70%"} m="auto" mt = "10px" minChildWidth='120px' columns={2} spacing={10}>
     <Box>
        <h1 style={{color:"red"}}>Company</h1>
        <Text>About Us</Text>
        <Text>Career</Text>
        <Text>Blog</Text>
        <Text>Contact Us</Text>
     </Box>
     <Box>
     <h1 style={{color:"red"}}>Policies</h1>

     <Text>Privacy Policies</Text>
        <Text>Terms of Use</Text>
        <Text>Secure Shopping</Text>
        <Text>Copyright Policy</Text>
     </Box>
     <Box>
     <h1 style={{color:"red"}}>Help</h1>

     <Text>Payment</Text>
        <Text>Shipping</Text>
        <Text>Return</Text>
        <Text>FAQ</Text>
     
     </Box>
     <Box>
     <h1 style={{color:"red"}}>Misc</h1>
        
     <Text>Affiliate</Text>
        <Text>Sitemap</Text>
        <Text></Text>
        <Text></Text>
     </Box>
    </SimpleGrid>
  )
}
