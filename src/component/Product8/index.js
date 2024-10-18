import { Box, MenuDescendantsProvider, Link, Text, Button, Input, Tooltip, WrapItem, Image, ChakraProvider } from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon, SearchIcon, RepeatIcon } from '@chakra-ui/icons'
import { BiHeart, BiUser, BiShoppingBag,BiCartDownload } from "react-icons/bi";
import ReactStars from 'react-rating-stars-component';
// import ratingChanged from 'react-rating-stars-component';
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
export function Product8(props){
return<><Box w={"50%"} mt={"20px"} ml={"500px"} style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
<a href="#"><Box>
    <Image w={"80px"} h={"80px"} src={props.seclast.img}></Image>
</Box>
</a>

<Box style={{display:"flex",flexDirection:"column"}}  ml={"-30px"}>
    <a href="#">
<Box ml={"70px"} w={"240px"}>
    <Text color={"#0066cc"} fontSize={"14px"} fontWeight={700}>{props.seclast.title}</Text>
</Box>
</a>
<Box  ml={"70px"}>
   <ReactStars
    count={5}
    size={14}
    activeColor="#ffd700"
  />
</Box>
<Box ml={"70px"} mt={"5px"}>
    <Text color={"black"}>{props.seclast.price}</Text>
</Box>
</Box>
</Box>

</>
}