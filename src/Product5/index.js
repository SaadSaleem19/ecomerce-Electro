import { Box, MenuDescendantsProvider, Link, Text, Button, Input, Tooltip, WrapItem, Image, ChakraProvider } from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon, SearchIcon, RepeatIcon } from '@chakra-ui/icons'
import { BiHeart, BiUser, BiShoppingBag,BiCartDownload } from "react-icons/bi";
import React from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    IconButton,

} from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter,Stack,Heading } from '@chakra-ui/react'
export function Product5(props){
return<><Box mt={"40px"}><Card w={"700px"} pos={"relative"}  borderRadius='lg' border={"none"}>
<CardBody _hover={{boxShadow:"0px 0px 26px -7px"}}>
  <Image
    src={props.velues.img}
    alt='Green double couch with wooden legs'
    borderRadius='lg'
   display={"flex"} 
   ml={"15px"}
  />
  <Stack mt='6' spacing='3'>
    <Text  fontSize={"14px"}ml={"15px"} fontWeight={700}>{props.velues.id}</Text>
    <Heading size='md' ml={"15px"}>{props.velues.title}</Heading>
    <Text ml={"15px"} color={"grey"}>
     {props.velues.discription}
    </Text>

   
  </Stack>
</CardBody>


</Card>
</Box>
</>
}