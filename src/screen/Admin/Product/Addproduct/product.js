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
import { apiServices } from "../../../../api";
import { Textarea } from "@chakra-ui/react";
import { PiHorseBold } from "react-icons/pi";
import { Electro } from "../../../Dashboard";
import Layout from "../../../../component/layout/adminLayout";
const Addproduct = () => {
    const navigation = useNavigate();
    const [title,settitle]= useState("")
    const [description,setdescription]= useState("")
    const [photo,setphoto]= useState("")
    const [price,setprice]= useState("")
    const toast = useToast()
const addproduct = async () => {
    try {
      const product = await apiServices.post("/product", {
        title: title,
        description: description,
        price:price,
        photos:photo,
      });

      console.log("response", product?.data);
      if (product?.data) {
       
        toast({
          title: 'added  product',
          description: "We've created your account for you.",
          status: 'success',
          duration: 7000,
          isClosable: true,
        })
        navigation("/dashboard");
      }
    } catch (error) {
      toast({title: error?.response?.data?.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      console.log("error", error);
    }
  };
  return (
    <>
      <Box display={"flex"} justifyContent={"center"} p={"96px"}>
        <Box
          style={{
            height: "700px",
            width: "600px",
            borderRadius: "17px",
            boxShadow: "0px 0px 45px -17px",
          }}
        >
          <Box>
            <Text padding={"30px"} fontSize={"20px"} fontWeight={"600"}>
              Tittle
            </Text>
            <Input
              width={"60%"}
              marginTop={"-10px"}
              marginLeft={"30px"}
              placeholder="Product tittle."
              onChange={(e) => {
                settitle(e.target.value);
              }}
            ></Input>
          </Box>
          <Box>
            <Text padding={"30px"} fontSize={"20px"} fontWeight={"600"}>
              Discription
            </Text>
            <Textarea
              placeholder="Product discription...."
              marginTop={"-10px"}
              marginLeft={"30px"}
              w={"60%"}
              onChange={(e)=>{setdescription(e.target.value)}}
            />
          </Box>
          <Box>
          <Text padding={"30px"} fontSize={"20px"} fontWeight={"600"}>
              upload product photo
            </Text>
            <Input
              width={"60%"}
              marginTop={"-10px"}
              marginLeft={"30px"}
              placeholder="photo link."
              onChange={(e)=>{setphoto(e.target.value)}}
            ></Input>
          </Box>
          <Box>
          <Text padding={"30px"} fontSize={"20px"} fontWeight={"600"}>
             Price
            </Text>
            <Input
              width={"60%"}
              marginTop={"-10px"}
              marginLeft={"30px"}
              placeholder="Product price."
              onChange={(e)=>{setprice(e.target.value)}}
            ></Input>
          </Box>
          <Box padding={"30px"}>
          <Button colorScheme='balck' variant='outline' onClick={addproduct} >
            Submit
          </Button>
          </Box>
        </Box>
      </Box>
   
    </>
  );
};
export default Addproduct;
