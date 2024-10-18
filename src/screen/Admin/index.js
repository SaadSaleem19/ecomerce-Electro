import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Button,
  Box,
  Text,
  Link,
  InputRightElement,
  InputGroup,
  background,
  LinkBox,
} from "@chakra-ui/react";
// import { Divider } from '@chakra-ui/react'
import {
  MenuDescendantsProvida,
  WrapItem,
  Tooltip,
  Watem,
  Image,
  ChakraProvider,
  Divider,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  ChevronDownIcon,
  SearchIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import { BiHeart, BiUser, BiShoppingBag } from "react-icons/bi";
import { Rating } from "react-simple-star-rating";
import { PiHeadset } from "react-icons/pi";
import { MdOutlineFacebook } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSignal } from "react-icons/fa";
import { apiServices } from "../../api";
import { AiOutlineUser } from "react-icons/ai";

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
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup, useToast } from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon, ViewIcon } from "@chakra-ui/icons";
// import '../css/index.css'
import { NavLink, useNavigate } from "react-router-dom";
// import { apiServices } from "../api";
import { useEffect, useState } from "react";
import styled from "@emotion/styled/macro";
// import "../Admin/index.css";

const Admin = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const menues = [
    {
      title: "Dashboard",
      childs: [
        {
          title: "child 1",
          path: "/child1",
        },
        {
          title: "child 2",
          path: "/child1",
        },
        {
          title: "child 3",
          path: "/child1",
        },
      ],
    },
    {
      title: "Product",
      childs: [
        {
          title: "Add product",
          path: "/product",
        },
      ],
    },
    {
      title: "Order",
      childs: [
        {
          title: "Order List",
          path: "/child1",
        },
        {
          title: "Order Detail",
          path: "/child1",
        },
        {
          title: "Order Tracking",
          path: "/child1",
        },
      ],
    },
  ];
  return (
    <Box backgroundColor={"#e8f0f8"} height={"100px"}>
      {/* NAVBAR */}
      <Box
        style={{
          padding: "10px",
        

          paddingTop: "-30px",
        }}
       
      >
        <nav
          id="nav"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "30px",
          }}
        >
         
          <Menu>
            <MenuButton
              id="icon"
              style={{ marginTop: "2%", marginLeft: "2%" }}
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem>New Tab</MenuItem>
              <MenuItem>New Window</MenuItem>
              <MenuItem>Open Closed Tab</MenuItem>
              <MenuItem>Open File...</MenuItem>
            </MenuList>
          </Menu>

          
          <Box
            style={{ display: "flex", flexDirection: "row", gap: "35px" }}
            paddingTop={"30px"}
          >
            <Menu>
              <WrapItem>
                <Tooltip label="Compare" hasArrow arrowSize={15}>
                  <MenuButton>
                    <RepeatIcon w={8} h={5} mt={"10px"} />
                  </MenuButton>
                </Tooltip>
              </WrapItem>
              <WrapItem>
                <Tooltip label="Wishlist" hasArrow arrowSize={15}>
                  <MenuButton>
                    <Box id="heart" style={{ marginTop: "6px" }}>
                      <BiHeart size={"1.5em"} />
                    </Box>
                  </MenuButton>
                </Tooltip>
              </WrapItem>
              <WrapItem>
                <Tooltip label="My Account" hasArrow arrowSize={15}>
                  <MenuButton as={Link} to="/Login">
                    {/* <Link to="/Login"> */}
                    <Box style={{ marginTop: "6px" }}>
                      <AiOutlineUser size={"1.5em"} />
                    </Box>
                    {/* </Link> */}
                  </MenuButton>
                </Tooltip>
              </WrapItem>
              <WrapItem>
                <Tooltip label="Cart" hasArrow arrowSize={15}>
                  <MenuButton>
                    <Box style={{ marginTop: "6px" }}>
                      <BiShoppingBag size={"1.5em"} />
                    </Box>
                  </MenuButton>
                </Tooltip>
              </WrapItem>
            </Menu>
          </Box>
        </nav>
      </Box>
      {/* SIDEBAR */}
      <Box
        backgroundColor={"white"}
        marginTop={"-100px"}
        width={"300px"}
        h={"860px"}
        boxShadow={"0px 0px 117px -51px"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Divider mt={"100px "}  width={"300px"} />
        <Box >
          <Box ml={"20px"} mt={"10px"}>
            {menues?.map((item, index) => {
              return (
                <div>
                  <a href="#" id="link">
                    <Box
                      id="back"
                      style={{
                        height: "40px",
                        width: "200px",
                        background:
                          selectedItem == item.title ? "#FFFF93" : "white",
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "10px",
                      }}
                     
                    >
                      <Text fontWeight={"600"} ml={"10px"}>
                        {" "}
                        {item.title}
                      </Text>
                    </Box>
                  </a>
                  {item.title == selectedItem && (
                    <div style={{ marginTop: "10px" }}>
                      {item.childs.map((val) => {
                        return (
                          <a href={val.path} id="link2">
                            <div
                              style={{ marginLeft: "10px", marginTop: "10px" }}
                            >
                              {val.title}
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </Box>
        </Box>
        
      </Box>
      
    </Box>
  );
};
export default Admin;
