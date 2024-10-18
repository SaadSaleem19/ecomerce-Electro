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
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup, useToast } from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon, ViewIcon } from "@chakra-ui/icons";
// import '../css/index.css'
import { NavLink, useNavigate } from "react-router-dom";
import { apiServices } from "../api";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
const Public = (props) => {
  const { Component } = props;

  const navigation = useNavigate();
  useEffect(() => {
    let userLocalstorage = localStorage.getItem("userData")
    if(userLocalstorage) {
      const user = JSON.parse(userLocalstorage);
      console.log("user", user);
  
      const token = jwtDecode(user?.accessToken);
      console.log("exp", token);
  
      const expire = new Date(token.exp).getTime();
      console.log("expire", expire);
      // console.log("expire", new Date());
      const date = new Date().getTime();
  
      if (user && date > expire){
        navigation("/dashboard")
      } else{
        navigation("/login")
      }
    }else {
      navigation("/login")
    }
   
  }, []);
  return <Component />;
};
export default Public;
