
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
import { ImGoogle } from "react-icons/im";
export function Product6(props) {

    return(<><Box style={{  alignItems: "center", }} mt={"7%"}  height={"175px"} borderRadius={"10px"} width={"400px"} backgroundColor={"#f2efe9"} marginLeft={"50px"} >
     <a href="#"><Box>  <Image src={props.veelues.img} style={{marginLeft:"20px",marginTop:"20px"}}></Image></Box></a> 
       <a href="#"><Box>
            <Text ml={"20px"} fontSize={"14px"}w={"230px"} style={{display:"flex",flexWrap:"wrap"}}  color={"grey"}>
                {props.veelues.title}
            </Text>
            </Box>    </a> 
            <a  href="#"><Box>
                <Image src={props.veelues.img2} ml={"70%"}></Image>
            </Box></a>

    </Box>
 
    </>
    )
}