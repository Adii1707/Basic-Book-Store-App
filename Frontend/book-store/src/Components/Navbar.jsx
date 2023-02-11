import React from 'react'
import {Box, Flex, Input, Image, Spacer} from "@chakra-ui/react"
import {BsCart3} from "react-icons/bs";
import { Hide } from '@chakra-ui/react'
import {SearchIcon} from "@chakra-ui/icons"
import { Link } from 'react-router-dom';


export const Navbar = () => {
  return (
   <Hide below='md' >
    <Flex w="100%" m="1px" >
      <Box>
       <Image src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/logo-new.png" />
      </Box>
      <Spacer />
      <Flex mt="8px" h="45px" border='13px' borderColor="red.500" >
        <Input type="text" focusBorderColor="red.600"   h="45px" w={"380px"}  placeholder="Search by Title, Author, Publisher"   />
        <SearchIcon boxSize={6} mt="10px" ml="-28px" color="red.500"  />
      </Flex>
      <Spacer />
      <Link to={"/login"} ><Box h="45px" mt={"6px"} mr="30px">
      <BsCart3 size={"lg"}  /> 
      </Box></Link>
    </Flex>
    </Hide>
  )
}
