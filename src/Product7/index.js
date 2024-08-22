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
export function Product7(props){
return<><Box w={"70%"} mt={"20px"} ml={"100px"} style={{display:"flex",flexDirection:"row",}}>
<a href="#"><Box>
    <Image w={"80px"} h={"80px"} src={props.veeluees.img}></Image>
</Box>
</a>

<Box style={{display:"flex",flexDirection:"column"}}  ml={"-30px"}>
    <a href="#">
<Box ml={"70px"}>
    <Text color={"#0066cc"} fontSize={"14px"} fontWeight={700}>{props.veeluees.title}</Text>
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
    <Text color={"black"}>{props.veeluees.price}</Text>
</Box>
</Box>
</Box>

</>
}