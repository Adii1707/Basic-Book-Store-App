import React from 'react'
import {Box, Flex, Center, Image, Spacer, Text, Menu, MenuButton, MenuList, IconButton, Show, Hide} from "@chakra-ui/react"
import { HamburgerIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

export const Subnav = () => {
  return (
    <Box>
      <Show below="md">
        <Flex bg="#e42b26" width={"full"} >
      <Menu >
  <MenuButton 
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
    mt="9px"
  />
  <MenuList bg="#e42b26">
  <Box ml="8px">
       <Box mt={3} ml="12px" >
       <Link to="/Books"><Text cursor={"pointer"} color="white" >Books</Text></Link> 
       </Box>
        </Box>
       <Box mt={3}  ml="12px">
        <Text color="white" cursor={"pointer"} fontSize="16px">New Arrivals</Text>
        </Box>
       <Box mt={3} ml="12px">
        <Text color="white" cursor={"pointer"} fontSize="16px">Box Sets</Text>
        </Box>
       <Box mt={3} ml="12px"><Text color="white" cursor={"pointer"} fontSize="16px">Best sellers</Text></Box>
       <Box mt={3} ml="12px"><Text color="white" cursor={"pointer"} fontSize="16px">Fiction Books</Text></Box>
       <Box mt={3} ml="12px"><Text color="white" cursor={"pointer"} fontSize="16px">Award Winners</Text></Box>
       <Box mt={3} ml="12px"><Text color="white" cursor={"pointer"} fontSize="16px">Featured Authors</Text></Box>
       <Box mt={3} ml="12px"><Text color="white" cursor={"pointer"} fontSize="16px">Request Book</Text></Box>
       
      
  </MenuList>
</Menu>
<Spacer />
       <Box>
        <Image src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/android_withhover.svg" />
       </Box>
</Flex>
      </Show>
      <Hide below='md'>
      <Flex p="5px" mt="13px" alignItems='center' gap= "30px" bg="#e42b26" h="60px" color="white" >
       <Box ml="8px">
       <Center  >
       <Link to="/Books"><Text cursor={"pointer"} color="white" >Books</Text></Link> 
       </Center>
        </Box>
       <Box ml="12px">
        <Text fontSize="16px">New Arrivals</Text>
        </Box>
       <Box ml="12px">
        <Text fontSize="16px"></Text>
        Box Sets
        </Box>
       <Box ml="12px"><Text fontSize="16px">Best sellers</Text></Box>
       <Box ml="12px"><Text fontSize="16px">Fiction Books</Text></Box>
       <Box ml="12px"><Text fontSize="16px">Award Winners</Text></Box>
       <Box ml="12px"><Text fontSize="16px">Featured Authors</Text></Box>
       <Box ml="12px"><Text fontSize="16px">Request Book</Text></Box>
       
       <Spacer />
       <Box>
        <Image src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/android_withhover.svg" />
       </Box>
    </Flex>
      </Hide>
    
    </Box>
  )
}
