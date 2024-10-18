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
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
const Protected = ({children}) => {
  // const { Component } = props;

  const navigation = useNavigate();
  useEffect(() => {
    const user =JSON.parse(localStorage.getItem("userData"));
    // console.log("user data", typeof JSON.parse(localStorage.getItem('login')));
    const token = jwtDecode(user?.accessToken);
    console.log("exp", token);

    const expire = new Date(token.exp).getTime();
    console.log("expire", expire);
    // console.log("expire", new Date());
    const date = new Date().getTime();

    if (!user || date < expire ) {
      navigation("/login");
    }
  }, [])
  return(
    <div>
      {children}
    </div>
  )

};
export default Protected;
