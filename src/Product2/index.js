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
export function Product2(props) {
    console.log("props",props)
    return    <><Box style={{  marginLeft: "-6px"}} >
        <Box _hover={{ boxShadow: "0px 1px 15px -3px", }} backgroundColor={"white"} h={"350px"} w={"220px"} ml={"3.5%"} >

            <Box style={{ fontSize: "12px", margin: "20px", }}>
                <a href="#" ><Text color={"grey"} paddingTop={"10px"} _hover={{ color: "black" }}>{props.vel.id}</Text></a>
            </Box>
            <Box style={{ fontSize: "15px", fontWeight: 700, display: "flex", justifyContent: "center", margin: "20px", marginTop: "-10px" }}>
                <a href="#"> <Text color={"#0066cc"}>{props.vel.title}</Text></a>
            </Box>
            <Box style={{ display: "flex", justifyContent: "center" }}>
                
                <a href="#"><Image h={"160px"} w={"160px"} src={props.vel.img}></Image></a>
            </Box>
            <Box style={{display:'flex',flexDirection:"row"}}>
                
                <Text paddingLeft={"25px"} fontSize={"20px"}>
                    $159.00
                </Text>
              
                <a href="#"><Tooltip label='Add to cart' placement='top' hasArrow arrowSize={15}>
                 <Box style={{ display:"flex",justifyContent:"flex-end",marginLeft:"62px"}}>
                <Box  style={{ display:"flex",backgroundColor:"#fed700",borderRadius:"40px",height:"40px",width:"40px"}}>
                <BiCartDownload size={"1.3em"}color="white" style={{marginTop:"10px",marginLeft:"8px"}}/>
                </Box>
                </Box>
      
    </Tooltip></a>

                    
                
            </Box>
            <Menu>
                <MenuDivider ml={"12px"} w={"190px"} />
            </Menu>
            <Box style={{ marginLeft: "10px", display: "flex", flexDirection: "row", }}>
                <a href="#"><Text color={"grey"} gap={"5px"} _hover={{ color: "black" }} style={{ display: "flex", flexDirection: "row", padding: "0px", fontSize: "15px" }}>
                    <BiHeart style={{ marginTop: "3px" }} /> <Text> Wishlist</Text>

                </Text>
                </a>
                <Box ml={"40px"}> <a href="#"><Text color={"grey"} gap={"5px"} _hover={{ color: "black" }} style={{ display: "flex", flexDirection: "row", padding: "0px", fontSize: "15px" }}>
                    <RepeatIcon style={{ marginTop: "3px" }} /> <Text> Compare</Text>

                </Text>
                </a></Box>
            </Box>

        </Box>

    </Box>
    <Box w={"1px"} backgroundColor={"#D3D3D3"} ml={"8px"} mt={"50px"} h={"280px"}></Box>
    </>
    
}