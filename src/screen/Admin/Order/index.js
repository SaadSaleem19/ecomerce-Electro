import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Image,
  Input,
  Button,
  Box,
  Text,
  Link,
  flexbox,
} from "@chakra-ui/react";
import {
  Checkbox,
  CheckboxGroup,
  useToast,
  InputGroup,
} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon, ViewIcon } from "@chakra-ui/icons";
// import '../css/index.css'
// import { NavLink } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import { apiServices } from "../../../api";
import { Textarea } from "@chakra-ui/react";
import { PiHorseBold } from "react-icons/pi";
import { Electro } from "../../Dashboard";
import Layout from "../../../component/layout/adminLayout";

const Order = () => {
  const [list, setlist] = useState([
    {
      img: "https://remosnextjs.vercel.app/images/products/51.png",
      title:"Kristin Watson",
      id: "#7712309",
      price: "$1,452.500",
      quantity: "1,638",
      Payment:"20",
      status: "Succes",
      startdate: "$28,672.36",
    },
    {
      img: "https://remosnextjs.vercel.app/images/products/52.png",
      title :"Kristin Watson",
      id: "#7712309",
      price: "$1,452.500",
      quantity: "1,638",
      Payment:"20",
      status: "Succes",
      startdate: "$28,672.36",
    },
    {
      img: "https://remosnextjs.vercel.app/images/products/53.png",
      title:" Kristin Watson",
      id: "#7712309",
      price: "$1,452.500",
      quantity: "1,638",
      Payment:"20",
      status:"pending",
      startdate: "$28,672.36",
    },
    {
      img: "https://remosnextjs.vercel.app/images/products/54.png",
      title: "Kristin Watson",
      id: "#7712309",
      price: "$1,452.500",
      quantity: "1,638",
      Payment:"20",
      status: "Succes",
      startdate: "$28,672.36",
    },
    {
      img: "https://remosnextjs.vercel.app/images/products/55.png",
      title: "Kristin Watson",
      id: "#7712309",
      price: "$1,452.500",
      quantity: "1,638",
      Payment:"20",
      status: "Succes",
      startdate: "$28,672.36",
    },
    {
      img: "https://remosnextjs.vercel.app/images/products/56.png",
      title: "Kristin Watson",
      id: "#7712309",
      price: "$1,452.500",
      quantity: "1,638",
      Payment:"20",
      status: "cancel",
      startdate: "$28,672.36",
    },
    {
      img: "https://remosnextjs.vercel.app/images/products/57.png",
      title: "Kristin Watson",
      id: "#7712309",
      price: "$1,452.500",
      quantity: "1,638",
      Payment:"20",
      status: "Succes",
      startdate: "$28,672.36",
    },
    {
      img: "https://remosnextjs.vercel.app/images/products/58.png",
      title: "Kristin Watson",
      id: "#7712309",
      price: "$1,452.500",
      quantity: "1,638",
      Payment:"20",
      status: "Succes",
      startdate: "$28,672.36",
    },
    {
      img: "https://remosnextjs.vercel.app/images/products/59.png",
      title: "Kristin Watson",
      id: "#7712309",
      price: "$1,452.500",
      quantity: "1,638",
      Payment:"20",
     status:"pending",
      startdate: "$28,672.36",
    },
    {
      img: "https://remosnextjs.vercel.app/images/products/60.png",
      title: "Kristin Watson",
      id: "#7712309",
      price: "$1,452.500",
      quantity: "1,638",
      Payment:"20",
      status: "pending",
      startdate: "$28,672.36",
    },
  ]);

  return (
    <Box>
      <Box>
        <Text marginLeft={"20px"} fontSize={"27px"} fontWeight={700}>
          Add Attribute
        </Text>
      </Box>
      <Box
        backgroundColor={"white"}
        h={"1100px"}
        borderRadius={"20px"}
        mt={"20px"}
        boxShadow={"0px 0px 25px -22px;"}
        ml={"20px"}
      >
        <Box padding={"30px"}>
          <Text fontSize={"15px"} color={"gray"}>
            Tip search by Product ID: Each product is provided with a unique ID,
            which you can rely on to find the exact product you need.
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          gap={"60px"}
          backgroundColor={"#f6f8fb"}
          height={"70px"}
          alignItems={"center"}
          w={"95%"}
          ml={"20px"}
          borderRadius={"20px"}
        >
          <Box
            paddingLeft={"40px"}
            display={"flex"}
            flexDirection={"row"}
            gap={"360px"}
            fontSize={"16px"}
          >
            <Text fontWeight={"bold"} color={"black"}>
              Product
            </Text>
            <Text fontWeight={"bold"}>Product ID</Text>
          </Box>
          <Box display={"flex"} flexDirection={"row"} gap={"130px"}>
            <Text fontWeight={"bold"}>Price</Text>
            <Text fontWeight={"bold"}>Quantity</Text>
          </Box>
          <Box display={"flex"} flexDirection={"row"} gap={"80px"}>
            <Text fontWeight={"bold"}>Payment</Text>
            <Text fontWeight={"bold"}>stock</Text>
          </Box>
          <Box display={"flex"} flexDirection={"row"} gap={"130px"} ml={"50px"}>
            <Text fontWeight={"bold"}>startdate</Text>
            {/* <Text fontWeight={"bold"}>stock</Text> */}
          </Box>
        </Box>

        {list.map((val)=>{ 
          return <Box
          padding={"20px"}
          backgroundColor={"#f6f8fb"}
          w={"95%"}
          ml={"20px"}
          borderRadius={"20px"}
          _hover={{backgroundColor:"#f4f4f4"}}
          height={"70px"}
          display={"flex"} flexDirection={"row"} alignItems={"center"}
          mt={"20px"}
        >
          <Box display={"flex"} flexDirection={"row"} alignItems={"center"} gap={"40px"}>
            <Image
              src={val.img}
              width={"50px"}
            ></Image>
            <Text   ml={"-30px"} fontSize={"13px"} fontWeight={"bold"} _hover={{color:"blue"}}w={"350px"}>
             {val.title}
            </Text>
          
            <Box   display={"flex"} flexDirection={"row"}gap={"60px"}>
            <Text fontSize={"14px"} > {val.id}</Text>
            <Text  fontSize={"14px"} > {val.price}</Text>
            </Box>
            
            <Box  gap={"110px"} display={"flex"} flexDirection={"row"} ml={"70px"}>
            <Text  fontSize={"14px"}  >{val.quantity}</Text>
            <Text fontSize={"14px"}  > {val.Payment}</Text>
            </Box>
            <Box  gap={"70px"} display={"flex"} flexDirection={"row"} ml={"40px"}>
              <Box   backgroundColor= {val.status  == "Succes" ? "#EDF9Eb " : val.status == "pending" ? "#eeeeee"  : "#ffeaea"} w={"65px"} display={"flex"}   textAlign={"center"} borderRadius={"5px"}>
           { <Text  ml={"6px"} fontSize={"14px"} color={val.status=="pending" ? "grey" : val.status == "cancel" ? "red":  "green" } >{val.status}</Text>}
            </Box>
            <Text  fontSize={"14px"} > 
           {val.startdate}</Text>
            </Box>
           

          </Box>
        </Box>})}
      </Box>
    </Box>
  );
};
export default Order;
