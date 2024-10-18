
import { Box, MenuDescendantsProvider, Link, Text, Button, Input, Tooltip, WrapItem, Image, ChakraProvider } from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon, SearchIcon, RepeatIcon } from '@chakra-ui/icons'
import { BiHeart, BiUser, BiShoppingBag } from "react-icons/bi";
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
export function Product1(props) {

    return(<><Box style={{alignItems:"center"}} mt={"7%"}  height={"165px"} borderRadius={"10px"} width={"235px"} backgroundColor={"#f2efe9"} marginLeft={"50px"} >
        <Box style={{marginLeft:"40px",marginTop:"-50px"}}>
            <Image src={props.val.img}></Image>
        </Box>
        <Box  h={"1px"}w={"80%"} backgroundColor={"#d8d8d8"} mt={"10%"} ml={"20px"}></Box>
        <Box mt={"15px"}>
            <Text style={{display:"flex",justifyContent:"center",fontWeight:700}}>
                {props.val.title}
            </Text>
            
    
     
            <Text  style={{display:"flex",justifyContent:"center"}}>
                {props.val.id}
            </Text>
        </Box>

    </Box>
 
    </>
    )
}