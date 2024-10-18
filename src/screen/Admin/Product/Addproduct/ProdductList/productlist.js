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
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  ViewIcon,
  DeleteIcon,
  EditIcon,
} from "@chakra-ui/icons";

// import '../css/index.css'
// import { NavLink } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import { apiServices } from "../../../../../api";
import { Textarea } from "@chakra-ui/react";
import { PiHorseBold } from "react-icons/pi";
import { Electro } from "../../../../Dashboard";
import Layout from "../../../../../component/layout/adminLayout";
import { useEffect } from "react";
const ProdductList = () => {
  // const [list, setlist] = useState([
  //   {
  //     img: "https://remosnextjs.vercel.app/images/products/41.png",
  //     title: "Dog Food, Chicken & Chicken Liver Recipe...",
  //     id: "#7712309",
  //     price: "$1,452.500",
  //     quantity: "1,638",
  //     stock: "Out of stock",
  //     startdate: "$28,672.36",
  //   },
  //   {
  //     img: "https://remosnextjs.vercel.app/images/products/42.png",
  //     title: "Grain Free Dry Dog Food | Rachael Ray® Nutrish®",
  //     id: "#7712309",
  //     price: "$1,452.500",
  //     quantity: "1,638",
  //     stock: "Out of stock",
  //     startdate: "$28,672.36",
  //   },
  //   {
  //     img: "https://remosnextjs.vercel.app/images/products/43.png",
  //     title: "Weruva Pumpkin Patch Up! Pumpkin With Ginger..",
  //     id: "#7712309",
  //     price: "$1,452.500",
  //     quantity: "1,638",
  //     stock: "Out of stock",
  //     startdate: "$28,672.36",
  //   },
  //   {
  //     img: "https://remosnextjs.vercel.app/images/products/44.png",
  //     title: "Milk-Bone Mini's Flavor Snacks Dog Treats, 15 Ounce",
  //     id: "#7712309",
  //     price: "$1,452.500",
  //     quantity: "1,638",
  //     stock: "Out of stock",
  //     startdate: "$28,672.36",
  //   },
  //   {
  //     img: "https://remosnextjs.vercel.app/images/products/45.png",
  //     title: "Milk-Bone Mini's Flavor Snacks Dog Treats, 15 Ounce",
  //     id: "#7712309",
  //     price: "$1,452.500",
  //     quantity: "1,638",
  //     stock: "Out of stock",
  //     startdate: "$28,672.36",
  //   },
  //   {
  //     img: "https://remosnextjs.vercel.app/images/products/46.png",
  //     title: "Milk-Bone Mini's Flavor Snacks Dog Treats, 15 Ounce",
  //     id: "#7712309",
  //     price: "$1,452.500",
  //     quantity: "1,638",
  //     stock: "Out of stock",
  //     startdate: "$28,672.36",
  //   },
  //   {
  //     img: "https://remosnextjs.vercel.app/images/products/47.png",
  //     title: "Milk-Bone Mini's Flavor Snacks Dog Treats, 15 Ounce",
  //     id: "#7712309",
  //     price: "$1,452.500",
  //     quantity: "1,638",
  //     stock: "Out of stock",
  //     startdate: "$28,672.36",
  //   },
  //   {
  //     img: "https://remosnextjs.vercel.app/images/products/48.png",
  //     title: "Milk-Bone Mini's Flavor Snacks Dog Treats, 15 Ounce",
  //     id: "#7712309",
  //     price: "$1,452.500",
  //     quantity: "1,638",
  //     stock: "Out of stock",
  //     startdate: "$28,672.36",
  //   },
  //   {
  //     img: "https://remosnextjs.vercel.app/images/products/49.png",
  //     title: "Milk-Bone Mini's Flavor Snacks Dog Treats, 15 Ounce",
  //     id: "#7712309",
  //     price: "$1,452.500",
  //     quantity: "1,638",
  //     stock: "Out of stock",
  //     startdate: "$28,672.36",
  //   },
  //   {
  //     img: "https://remosnextjs.vercel.app/images/products/50.png",
  //     title: "Milk-Bone Mini's Flavor Snacks Dog Treats, 15 Ounce",
  //     id: "#7712309",
  //     price: "$1,452.500",
  //     quantity: "1,638",
  //     stock: "Out of stock",
  //     startdate: "$28,672.36",
  //   },
  // ]);
  const [list, setlist] = useState([]);
  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);
  const [id, setid] = useState("");
  // const [listdel, setlistdel] = useState("")
  const navigation = useNavigate();

  const toast = useToast();

  useEffect(() => {
    addlist();
  }, []);
  const addlist = async () => {
    try {
      const list1 = await apiServices.get("/product");
      setlist(list1.data);
    } catch (error) {
      console.log("error6", error);
      toast({
        title: "deleted your product ",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  console.log("list", list);
  console.log("tit", title);
  console.log("pri", price);
  const Update = async () => {
    try {
      const update = await apiServices.put(`/product/${id}`, {
        title: title,
        price: price,
      });
      addlist();
    } catch (error) {
      console.log(error);
    }
  };
  const Edit = (_id) => {
    // console.log("tit",tit)
    const dt = list.filter((val) => val._id === _id);
    if (dt !== undefined) {
      settitle(dt[0].title);
      setid(dt[0]._id);
      setprice(dt[0].price);
    }
  };
  const Delete = async (_id) => {
    try {
      const listdel = await apiServices.delete(`/product/${_id}`);
      const list1 = await apiServices.get("/product");
      setlist(list1.data);
    } catch (error) {
      console.log("error5", error);
    }
  };
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
          <Input
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
            mt={"5px"}
            w={"150px"}
          />
          <Input
            value={price}
            onChange={(e) => {
              setprice(e.target.value);
            }}
            mt={"20px"}
            w={"150px"}
            ml={"20px"}
          />
          <Button
            ml={"10px"}
            onClick={() => {
              Update();
            }}
          >
            Update
          </Button>
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
            gap={"305px"}
            fontSize={"16px"}
          >
            <Text fontWeight={"bold"} color={"black"}>
              Product
            </Text>
            <Text fontWeight={"bold"}>Product ID</Text>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"row"}
            gap={"110px"}
            ml={"110px"}
          >
            <Text fontWeight={"bold"}>Price</Text>
            <Text fontWeight={"bold"}>Quantity</Text>
          </Box>
          <Box display={"flex"} flexDirection={"row"} gap={"40px"} ml={"30px"}>
            {/* <Text fontWeight={"bold"}>Sale</Text> */}
            <Text fontWeight={"bold"}>stock</Text>
          </Box>
          <Box display={"flex"} flexDirection={"row"} gap={"130px"} ml={"30px"}>
            <Text fontWeight={"bold"}>startdate</Text>
            {/* <Text fontWeight={"bold"}>stock</Text> */}
          </Box>
        </Box>

        {list.map((val) => {
          return (
            <Box
              padding={"20px"}
              id="list"
              backgroundColor={"#f6f8fb"}
              w={"95%"}
              ml={"20px"}
              borderRadius={"20px"}
              _hover={{ backgroundColor: "#f4f4f4" }}
              height={"70px"}
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              mt={"20px"}
            >
              <Box
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                gap={"40px"}
              >
                <Image src={val.photos} width={"50px"}></Image>
                <Text
                  ml={"-30px"}
                  fontSize={"13px"}
                  fontWeight={"bold"}
                  _hover={{ color: "blue" }}
                  w={"300px"}
                >
                  <a href="#">{val.title}</a> 
                </Text>
                <Box
                  gap={"70px"}
                  display={"flex"}
                  textAlign={"center"}
                  alignItems={"center"}
                >
                  <Box
                    display={"flex"}
                    flexDirection={"row"}
                    gap={"70px"}
                    ml={"-30px"}
                    w={"300px"}
                  >
                    <Text fontSize={"14px"}> {val._id}</Text>
                    <Text fontSize={"14px"} w={"100px"}>
                      {" "}
                      {val.price}
                    </Text>
                  </Box>

                  <Box
                    // gap={"120px"}
                    display={"flex"}
                    flexDirection={"row"}
                    alignItems={"center"}
                    textAlign={"center"}
                    ml={"40px"}
                  >
                    <Box
                      display={"flex"}
                      flexDirection={"row"}
                      alignItems={"center"}
                      textAlign={"center"}
                      gap={"50px"}
                    >
                      <Box w={"105px"}>
                        <Text fontSize={"14px"} w={"205px"} ml={"-80px"}>
                        {val.title}
                        </Text>
                      </Box>
                      <Box gap={"-10px"}>
                        <Box
                          backgroundColor={"FFEBEE"}
                          display={"flex"}
                          alignItems={"center"}
                          textAlign={"center"}
                        >
                          <Text fontSize={"14px"} color={"red"}>
                            Outofstock
                          </Text>
                          {/* </Box> */}
                        </Box>
                      </Box>
                      <Box
                        w={"190px"}
                        display={"flex"}
                        flexDirection={"row"}
                        alignItems={"center"}
                      >
                        <Text fontSize={"14px"}> {val.createdAt}</Text>
                        <Box
                          display={"flex"}
                          flexDirection={"row"}
                          gap={"6px"}
                          ml={"10px"}
                        >
                          <Button
                            onClick={() => {
                              Delete(val._id);
                            }}
                          >
                            <DeleteIcon />
                          </Button>
                          <Button
                            onClick={() => {
                              Edit(val._id);
                            }}
                          >
                            <EditIcon />
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
export default ProdductList;
