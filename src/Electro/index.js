import React, { useState } from "react";
import { Box, MenuDescendantsProvida, WrapItem, Text, Button, Input, Tooltip, Watem, Image, ChakraProvider, Divider } from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon, SearchIcon, RepeatIcon } from '@chakra-ui/icons'
import { BiHeart, BiUser, BiShoppingBag } from "react-icons/bi";
import { Rating } from 'react-simple-star-rating'
import { PiHeadset } from "react-icons/pi";
import { MdOutlineFacebook } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSignal } from "react-icons/fa";
import { Link } from "react-router-dom";
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
import { PiTelegramLogoLight } from "react-icons/pi";
// import { RxValue } from "react-icons/rx";
import { Product1 } from "../Product1/index"
import { Product2 } from "../Product2/index"
import { color } from "framer-motion";
import { AiOutlineUser } from "react-icons/ai";
import { Product3 } from "../Product3/index"
import { Product4 } from "../Product4/index"
import { Product5 } from "../Product5/index"
import { Product6 } from "../Product6/index"
import { Product7 } from "../Product7/index"
import { Product8 } from "../Product8/index"
import { Product9 } from "../Product9/index"
import '../css/index2.css'

export function Electro() {

    const [data, setdata] = useState([
        {
            id: "Bluetooth",
            title: "Stero",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2021/11/image-1.png",

        },
        {
            id: "7 product",
            title: "Home Theatre",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2021/11/image-2.png",

        },
        {
            id: "7 product",
            title: "Bluetooth Speaker",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2021/11/image-3.png",

        },
        {
            id: "7 product",
            title: "Headphones",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2021/11/image-4.png",
        },
        {
            id: "7 product",
            title: "Speaker",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2021/11/image-5.png",
        }
    ])

    const [data2, setdata2] = useState([
        {
            id: "Bluetooth Speakers,",
            title: "Notebook Widescreen Y700-17 GF790",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2021/11/prodcut-300x300.png",

        },
        {
            id: "Bluetooth Speakers,",
            title: "Tablet Thin EliteBook Revolve 810 G2",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2021/11/prodcut2-300x300.png",

        },
        {
            id: "Bluetooth Speakers,",
            title: "Smartphone 6S 32GB LTE",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2021/11/prodcut3-300x300.png",

        },
        {
            id: "Bluetooth Speakers,",
            title: "Wireless Audio System Multiroom 360",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2021/11/prodcut4-300x300.png",
        },
        {
            id: "Bluetooth Speakers,",
            title: "Tablet Thin EliteBook Revolve 810 G2",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2021/11/prodcut5-300x300.png",
        },
        {
            id: "Bluetooth Speakers,",
            title: "Tablet Thin EliteBook Revolve 810 G2",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2021/11/prodcut6-300x300.png",
        }
    ])
    const [data3, setdata3] = useState([
        {
            id: "Headphone Cases",
            title: "Universal Headphones Case in Black",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2016/03/headphonecase-300x300.png",

        },
        {
            id: "Headphone Accessories",
            title: "Headphones USB Wires",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2016/03/usbheadphone-300x300.png",

        },
        {
            id: "Headphone",
            title: "Ultra Wireless S50 Headphones S50 with",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2016/03/1-300x300.png",

        },
        {
            id: "Audio Speakers",
            title: "Wireless Audio System Multiroom 360",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2016/03/WirelessSound-300x300.png",
        },
        {
            id: "Laptops",
            title: "Tablet White EliteBook Revolve 810 G2",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2016/03/Ultrabooks-300x300.png",
        },
        {
            id: "Headphone",
            title: "Purple Solo 2 Wireless",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2016/03/heade1-300x300.png",
        }
    ])
    const [data4, setdata4] = useState([
        {
            id: "Bluetooth Speakers,",
            title: "Notebook Widescreen Y700-17 GF790",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2021/11/prodcut-300x300.png",

        },
        {
            id: "Bluetooth Speakers,",
            title: "Tablet Thin EliteBook Revolve 810 G2",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2021/11/prodcut2-300x300.png",

        },
        {
            id: "Bluetooth Speakers,",
            title: "Smartphone 6S 32GB LTE",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2021/11/prodcut3-300x300.png",

        },
        {
            id: "Bluetooth Speakers,",
            title: "Wireless Audio System Multiroom 360",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2021/11/prodcut4-300x300.png",
        },
        {
            id: "Bluetooth Speakers,",
            title: "Tablet Thin EliteBook Revolve 810 G2",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2021/11/prodcut5-300x300.png",
        },
        {
            id: "Bluetooth Speakers,",
            title: "Tablet Thin EliteBook Revolve 810 G2",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2021/11/prodcut6-300x300.png",
        }
    ])
    const [data5, setdata5] = useState([
        {
            id: "Tips & Tricks",
            title: "7 Expert Tips to Improve your Home Entertainment Sound",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2015/11/blog-1.jpg",
            discription: "A cinema like sound of home entertainment is mostly the dream of the home owner like you, a nice and high quality of sounds to make your entertainment at home be like a world class entertainment. Use a home audio amplifier to improve your home entertainment sound."
        },
        {
            id: "Inspirations",
            title: "Improve Your Interior Design with Smart Audio",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2015/11/blog-2.jpg",
            discription: "While your home theater and speakers deliver impressive visuals and sound, they’re rarely designed with your home’s interior design in mind. TVs may be thinner than in the past, and high-end speakers often have a futuristic look, but they still draw attention away from other décor in a space."
        },

    ])
    const [data6, setdata6] = useState([
        {

            title: "Brings you the best in music, plus all things culture, style, and sports",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2021/11/brand-1.png",
            img2: "https://electro.madrasthemes.com/wp-content/uploads/2021/11/image-6-1.png"
        },
        {

            title: "Brings you the best in music, plus all things culture, style, and sports",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2021/11/brand-2.png",
            img2: "https://electro.madrasthemes.com/wp-content/uploads/2021/11/image-7-1.png"
        },
        {

            title: "Brings you the best in music, plus all things culture, style, and sports",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2021/11/brand-3.png",
            img2: "https://electro.madrasthemes.com/wp-content/uploads/2021/11/image-8-1.png"
        },
        {

            title: "Brings you the best in music, plus all things culture, style, and sports",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2021/11/brand-4.png",
            img2: "https://electro.madrasthemes.com/wp-content/uploads/2021/11/image-9-1.png"
        },
        {

            title: "Brings you the best in music, plus all things culture, style, and sports",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2021/11/brand-5.png",
            img2: "https://electro.madrasthemes.com/wp-content/uploads/2021/11/image-10-1.png"
        }
    ])
    const [data7, setdata7] = useState([
        {

            title: "Tablet Thin EliteBook Revolve 810 G6",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2016/03/redPhone-300x300.png",
            // img2:"https://electro.madrasthemes.com/wp-content/uploads/2021/11/image-6-1.png"
            price: "$1,300.00"
        },
        {

            title: "Notebook Widescreen Z51-70 40K6013UPB",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2016/03/sam2-300x300.png",
            // img2:"https://electro.madrasthemes.com/wp-content/uploads/2021/11/image-7-1.png"
            price: "$1,100.00"
        },
        {

            title: "Smartphone 6S 128GB LTE",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2016/03/lgphone-300x300.png",
            // img2:"https://electro.madrasthemes.com/wp-content/uploads/2021/11/image-8-1.png"
            price: "$750.00"
        },

    ])
    const [data8, setdata8] = useState([
        {

            title: "Game Console Controller + USB 3.0 Cable",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2016/03/consal-300x300.png",
            // img2:"https://electro.madrasthemes.com/wp-content/uploads/2021/11/image-6-1.png"
            price: "$99.00"
        },
        {

            title: "Tablet Thin EliteBook Revolve 810 G6",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2016/03/redPhone-300x300.png",
            // img2:"https://electro.madrasthemes.com/wp-content/uploads/2021/11/image-7-1.png"
            price: "$1,100.00"
        },
        {

            title: "Wireless Audio System Multiroom 360",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2016/03/WirelessSound-300x300.png",
            // img2:"https://electro.madrasthemes.com/wp-content/uploads/2021/11/image-8-1.png"
            price: "$2,299.00"
        },

    ])

    const [data9, setdata9] = useState([
        {

            title: "Aerocool EN52377 Dead Silence Gaming Cube Case",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2016/03/gamecabin-300x300.png",
            // img2:"https://electro.madrasthemes.com/wp-content/uploads/2021/11/image-6-1.png"
            price: "$150.00"
        },
        {

            title: "Smartphone 6S 128GB LTE",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2016/03/lgphone-300x300.png",
            // img2:"https://electro.madrasthemes.com/wp-content/uploads/2021/11/image-8-1.png"
            price: "$750.00"
        },
        {

            title: "Ultrabook UX305CA-FC050T",
            img: "https://electro.madrasthemes.com/wp-content/uploads/2016/03/redmi-300x300.png",
            // img2:"https://electro.madrasthemes.com/wp-content/uploads/2021/11/image-8-1.png"
            price: "$1,200.00"
        },

    ])

    return (

        <Box id="box0" width={"fit-content"} backgroundColor={"#f2efe9"} height={'fit-content'} style={{ color: "#333e48", display: "flex", flexWrap: "wrap", flexDirection: "column", }} >
            <Box style={{ padding: "10px" }}>
                <nav id="nav" style={{ display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}>

                    <Text mt={"0.5%"} fontSize={"40px"} fontWeight={900} color={"#333e48"}>electro<span style={{ color: "#fed700", fontSize: "50px" }}>.</span></Text>
                    <Menu >
                        <MenuButton
                            id="icon"
                            style={{ marginTop: "2%", marginLeft: "2%" }}
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon />}
                            variant='outline'
                        />
                        <MenuList>
                            <MenuItem >
                                New Tab
                            </MenuItem>
                            <MenuItem >
                                New Window
                            </MenuItem>
                            <MenuItem >
                                Open Closed Tab
                            </MenuItem>
                            <MenuItem >
                                Open File...
                            </MenuItem>
                        </MenuList>
                    </Menu>
                    <Box style={{ display: "flex", flexDirection: "row", gap: "15px", padding: "2%", flexWrap: "wrap" }}>
                        <dd><Menu>
                            <MenuButton
                                px={4}
                                py={3}
                                transition='all 0.2s'
                                fontWeight={700}
                                fontSize={"14px"}



                            >
                                Home <ChevronDownIcon />
                            </MenuButton>
                            <MenuList>
                                <Box style={{ backgroundColor: "#fed700", height: "2px", marginTop: "-10px" }}></Box>
                                <MenuItem>Home v1</MenuItem>
                                <MenuItem>Home v2</MenuItem>
                                <MenuItem>Home v3</MenuItem>
                                <MenuItem>Home v4</MenuItem>
                                <MenuItem>Home v5</MenuItem>
                                <MenuItem>Home v6</MenuItem>
                                <MenuItem>Home v7</MenuItem>
                                <MenuItem>Home v8</MenuItem>
                                <MenuItem>Home v9</MenuItem>
                                <MenuItem>Home v10</MenuItem>
                                <MenuItem>Home v11</MenuItem>
                                <MenuItem>Home v12</MenuItem>
                                <MenuItem>Home v13</MenuItem>
                                <MenuItem>Home v14</MenuItem>
                                <MenuItem>Home v15</MenuItem>
                                <MenuItem>Home v16</MenuItem>
                                <MenuItem>Home v17</MenuItem>
                            </MenuList>
                        </Menu></dd>
                        <Menu>
                            <MenuButton><dd style={{ fontWeight: 700, fontSize: "14px" }}>About us</dd></MenuButton></Menu>

                        <dd>
                            <Menu>
                                <MenuButton
                                    px={4}
                                    py={3}
                                    transition='all 0.2s'
                                    fontWeight={700}
                                    fontSize={"14px"}




                                >Blog<ChevronDownIcon />
                                </MenuButton>

                                <MenuList>
                                    <Box style={{ backgroundColor: "#fed700", height: "2px", marginTop: "-10px" }}></Box>
                                    <MenuItem>Home v1</MenuItem>
                                    <MenuItem>Home v2</MenuItem>
                                    <MenuItem>Home v3</MenuItem>

                                </MenuList>
                            </Menu></dd>
                        <dd>
                            <Menu>

                                <MenuButton
                                    px={4}
                                    py={3}
                                    transition='all 0.2s'
                                    fontWeight={700}
                                    fontSize={"14px"}




                                >
                                    Pages <ChevronDownIcon />
                                </MenuButton>
                                <MenuList style={{
                                    display: "flex", flexDirection: "row", width: "970px",
                                    gap: "20px",
                                    marginLeft: "-334px"
                                }}>
                                    <Box style={{ backgroundColor: "#fed700", height: "2px", marginTop: "-10px", position: "absolute", width: "965px" }}></Box>

                                    <MenuList border={"none"} boxShadow={"none"}>
                                        <MenuItem style={{ fontWeight: 500 }}>Home page</MenuItem>
                                        <MenuItem><a href="#">Home v1</a></MenuItem>                             <a href="#"> <MenuItem>Home v1</MenuItem></a>
                                        <a href="#"><MenuItem>Home v2</MenuItem></a>
                                        <a href="#"><MenuItem>Home v3</MenuItem></a>
                                        <a href="#"><MenuItem>Home v4</MenuItem></a>
                                        <a href="#"><MenuItem>Home v5</MenuItem></a>
                                        <a href="#"><MenuItem>Home v6</MenuItem></a>
                                        <a href="#"><MenuItem>Home v7</MenuItem></a>
                                        <a href="#"><MenuItem>Home v8</MenuItem></a>
                                        <a href="#"><MenuItem>Home v9</MenuItem></a>
                                        <a href="#"><MenuItem>Home v10</MenuItem></a>
                                        <a href="#"><MenuItem>Home v11</MenuItem></a>
                                        <a href="#"><MenuItem>Home v12</MenuItem></a>
                                        <a href="#"><MenuItem>Home v13</MenuItem></a>
                                        <a href="#"><MenuItem>Home v14</MenuItem></a>
                                        <a href="#"><MenuItem>Home v15</MenuItem></a>
                                        <a href="#"><MenuItem>Home v16</MenuItem></a>
                                        <a href="#"><MenuItem>Home v17</MenuItem></a>
                                    </MenuList>
                                    <MenuList style={{ border: "none", boxShadow: "none" }}>

                                        <MenuItem>Home v1</MenuItem>
                                        <MenuItem>Home v2</MenuItem>
                                        <MenuItem>Home v3</MenuItem>
                                        <MenuItem>Home v4</MenuItem>
                                        <MenuItem>Home v5</MenuItem>
                                        <MenuItem>Home v6</MenuItem>
                                        <MenuItem>Home v7</MenuItem>
                                        <MenuItem>Home v8</MenuItem>
                                        <MenuItem>Home v9</MenuItem>
                                        <MenuItem>Home v10</MenuItem>
                                        <MenuItem>Home v11</MenuItem>
                                        <MenuItem>Home v12</MenuItem>
                                        <MenuItem>Home v13</MenuItem>
                                        <MenuItem>Home v14</MenuItem>
                                        <MenuItem>Home v15</MenuItem>
                                        <MenuItem>Home v16</MenuItem>
                                        <MenuItem>Home v17</MenuItem>
                                    </MenuList>
                                    <MenuList style={{ border: "none", boxShadow: "none" }}>

                                        <MenuItem>Home v1</MenuItem>
                                        <MenuItem>Home v2</MenuItem>
                                        <MenuItem>Home v3</MenuItem>
                                        <MenuItem>Home v4</MenuItem>
                                        <MenuItem>Home v5</MenuItem>
                                        <MenuItem>Home v6</MenuItem>
                                        <MenuItem>Home v7</MenuItem>
                                        <MenuItem>Home v8</MenuItem>
                                        <MenuItem>Home v9</MenuItem>
                                        <MenuItem>Home v10</MenuItem>
                                        <MenuItem>Home v11</MenuItem>
                                        <MenuItem>Home v12</MenuItem>
                                        <MenuItem>Home v13</MenuItem>
                                        <MenuItem>Home v14</MenuItem>
                                        <MenuItem>Home v15</MenuItem>
                                        <MenuItem>Home v16</MenuItem>
                                        <MenuItem>Home v17</MenuItem>
                                    </MenuList><MenuList style={{ border: "none", boxShadow: "none" }}>

                                        <MenuItem>Home v1</MenuItem>
                                        <MenuItem>Home v2</MenuItem>
                                        <MenuItem>Home v3</MenuItem>
                                        <MenuItem>Home v4</MenuItem>
                                        <MenuItem>Home v5</MenuItem>
                                        <MenuItem>Home v6</MenuItem>
                                        <MenuItem>Home v7</MenuItem>
                                        <MenuItem>Home v8</MenuItem>
                                        <MenuItem>Home v9</MenuItem>
                                        <MenuItem>Home v10</MenuItem>
                                        <MenuItem>Home v11</MenuItem>
                                        <MenuItem>Home v12</MenuItem>
                                        <MenuItem>Home v13</MenuItem>
                                        <MenuItem>Home v14</MenuItem>
                                        <MenuItem>Home v15</MenuItem>
                                        <MenuItem>Home v16</MenuItem>
                                        <MenuItem>Home v17</MenuItem>
                                    </MenuList>
                                </MenuList>
                            </Menu>
                        </dd>
                        <Menu>
                            <MenuButton px={4}
                                py={3}><dd style={{
                                    fontWeight: 700, fontSize: "14px"
                                }}>Features</dd></MenuButton></Menu>
                        <Menu>
                            <MenuButton><dd style={{ fontWeight: 700, fontSize: "14px" }}>Contact us</dd></MenuButton></Menu>
                        <Box style={{ marginRight: "40px" }}></Box>
                        <Box>
                            <Box style={{ border: "2px  solid #fed700 ", borderRadius: "30px", display: "flex", flexDirection: "row", width: "230px" }}>
                                <Input id="input" variant={"none"} style={{ width: "200px", height: "38px", borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px" }} placeholder="Search..." />
                                <Box id="search" style={{ backgroundColor: "#fed700", width: "70px", borderTopRightRadius: "20px", borderBottomRightRadius: "20px", }}>
                                    <SearchIcon style={{ marginTop: "6px", marginLeft: "10px" }} w={8} h={5} />
                                </Box>
                            </Box>
                        </Box>
                        <Box style={{ display: "flex", flexDirection: "row", gap: "35px" }}>


                            <Menu>
                                <WrapItem >
                                    <Tooltip label='Compare' hasArrow arrowSize={15}>
                                        <MenuButton >
                                            < RepeatIcon w={8} h={5} mt={"10px"} />

                                        </MenuButton>
                                    </Tooltip>
                                </WrapItem>
                                <WrapItem >
                                    <Tooltip label='Wishlist' hasArrow arrowSize={15}>
                                        <MenuButton >
                                            <Box id="heart" style={{ marginTop: "6px" }}>
                                                <BiHeart size={"1.5em"} />
                                            </Box>

                                        </MenuButton>
                                    </Tooltip>
                                </WrapItem>
                                <WrapItem >
                                    <Tooltip label='My Account' hasArrow arrowSize={15}>
                                        <MenuButton as={Link} to="/Login">
                                            {/* <Link to="/Login"> */}
                                                <Box style={{ marginTop: "6px" }}>
                                                    <AiOutlineUser size={"1.5em"} />
                                                </Box>
                                            {/* </Link> */}
                                        </MenuButton>
                                    </Tooltip>
                                </WrapItem>
                                <WrapItem >
                                    <Tooltip label='Cart' hasArrow arrowSize={15}>
                                        <MenuButton>
                                            <Box style={{ marginTop: "6px" }}>
                                                <BiShoppingBag size={"1.5em"} />
                                            </Box>

                                        </MenuButton>
                                    </Tooltip>
                                </WrapItem>

                            </Menu>



                        </Box>
                    </Box>
                </nav>
            </Box>
            <Box style={{ display: "flex", alignItems: "center", justifyContent: "center",}}>
                <Box id="box1" mt={"-180px"}w={"25%"}>
                    <Text style={{ fontSize: "300%", fontFamily: "Inter, Open Sans, HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif" }}>
                        END SEASON <br></br> <span style={{ fontWeight: -900 }}>SMART PHONES</span>
                    </Text>
                    <Text color={"#333e48"} fontWeight={"bold"} fontFamily={"Inter, Open Sans, HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"}>
                        LAST CALL FOR UP TO <span style={{ fontSize: "360%" }}><sup>$</sup>250 <sub style={{ fontSize: "15px" }}>OFF!</sub></span>
                    </Text>
                    <Box>
                        <Button colorScheme="yellow" backgroundColor={"#fed700"} fontWeight={"none"} w={"180px"}>Start Buying</Button>
                    </Box>
                </Box>

                <Box id="box2" mt={"-100px"} ml={"1.3%"}>
                    <Image src="https://electro.madrasthemes.com/wp-content/uploads/2021/11/slider-v12-image.png" w={"180%"}></Image>
                </Box>

            </Box>
            <Box id="box3" backgroundColor={"white"} h={"60%"} ml={"150px"} mt={"-8px"} borderLeftRadius={"20px"} pos={"sticky"}>
                <Box id="box4" style={{ display: "flex", flexWrap: "wrap" ,width: "95%"}}>
                    {data?.map((value) => {
                        return (
                            <Product1 val={value} />
                        )
                    })}
                </Box>
                <Box>
                    <Box marginLeft={"50px"} mt={"3.5%"}>
                        <Text style={{ fontSize: "25px" }}>
                            Hot Products Today
                        </Text>
                    </Box>
                    <Box w={"79%"} h={"1px"} bgColor={"#D3D3D3"} mt={"18px"} ml={"42px"} pos={"absolute"}></Box>
                    <Box w={"200px"} h={"2px"} bgColor={"#fed700 "} mt={"18px"} ml={"42px"} pos={"absolute"}></Box>
                    <Box style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", marginLeft: "40px", gap: "none" ,width: "90%"}}>

                        {data2.map((values) => {
                            return (
                                <Product2 vel={values} />
                            )
                        })}

                    </Box>
                    <Box marginLeft={"50px"} mt={"3.5%"}>
                        <Text style={{ fontSize: "25px" }}>
                            New Products
                        </Text>
                    </Box>
                    <Box w={"79%"} h={"1px"} bgColor={"#D3D3D3"} mt={"18px"} ml={"42px"} pos={"absolute"}></Box>
                    <Box w={"200px"} h={"2px"} bgColor={"#fed700 "} mt={"18px"} ml={"42px"} pos={"absolute"}></Box>
                    <Box style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", marginLeft: "40px", gap: "none" ,width: "90%"}}>

                        {data3.map((velue) => {
                            return (
                                <Product3 value={velue} />
                            )
                        })}

                    </Box>
                    <Box marginLeft={"50px"} mt={"3.5%"}>
                        <Text style={{ fontSize: "25px" }}>
                            Recommendations
                        </Text>
                    </Box>
                    <Box w={"79%"} h={"1px"} bgColor={"#D3D3D3"} mt={"18px"} ml={"42px"} pos={"absolute"}></Box>
                    <Box w={"200px"} h={"2px"} bgColor={"#fed700 "} mt={"18px"} ml={"42px"} pos={"absolute"}></Box>
                    <Box style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", marginLeft: "40px", gap: "none",width: "90%" }}>

                        {data4.map((velues) => {
                            return (
                                <Product4 values={velues} />
                            )
                        })}

                    </Box>
                    <Box marginLeft={"50px"} mt={"3.5%"}>
                        <Text style={{ fontSize: "25px" }}>
                            Tips & Inspirations
                        </Text>
                    </Box>
                    <Box w={"79%"} h={"1px"} bgColor={"#D3D3D3"} mt={"18px"} ml={"42px"} pos={"absolute"}></Box>
                    <Box w={"200px"} h={"2px"} bgColor={"#fed700 "} mt={"18px"} ml={"42px"} pos={"absolute"}></Box>
                    <Box  id="lg" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", marginLeft: "40px", gap: "none",width: "95s%" }}>

                        {data5.map((vaalue) => {
                            return (
                                <Product5 velues={vaalue} />
                            )
                        })}

                    </Box>
                    <Box marginLeft={"50px"} mt={"3.5%"}>
                        <Text style={{ fontSize: "25px" }}>
                            Known Brands

                        </Text>
                    </Box>
                    <Box w={"79%"} h={"1px"} bgColor={"#D3D3D3"} mt={"18px"} ml={"42px"} pos={"absolute"}></Box>
                    <Box w={"200px"} h={"2px"} bgColor={"#fed700 "} mt={"18px"} ml={"42px"} pos={"absolute"}></Box>
                    <Box id="box6" h={"700px"} style={{ display: "flex", flexWrap: "wrap", marginLeft: "40px", gap: "none" }}>

                        {data6.map((valuee) => {
                            return (
                                <Product6 veelues={valuee} />
                            )
                        })}

                    </Box>
                </Box>
            </Box>
            <Box mt={"10%"} backgroundColor={"white"} height={"400px"} style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", alignItems: "center" }}>
                <Box id="box71" w={"100%"} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                    <Box id="box7" mt={"200px"} ml={"50px"}  >
                        <Box marginLeft={"100px"} mt={"-14.5%"}>
                            <Text style={{ fontSize: "22px", fontWeight: 500 }}>
                                Featured Products

                            </Text>
                        </Box>

                        <Box w={"22%"} h={"1px"} bgColor={"#D3D3D3"} mt={"18px"} ml={"100px"} pos={"absolute"}  ></Box>
                        <Box w={"80px"} h={"2px"} bgColor={"#fed700 "} mt={"18px"} ml={"100px"} pos={"absolute"}></Box>
                        <Box id="star" mt={"50px"}>
                            {data7.map((vaaluee) => {
                                return (
                                    <Product7 veeluees={vaaluee} />
                                )
                            })}
                        </Box>
                    </Box>
                    <Box id="box8" mt={"249px"} ml={"-30.5%"} >
                        <Box marginLeft={"500px"} mt={"-14.5%"}>
                            <Text style={{ fontSize: "22px", fontWeight: 500 }}>
                                Top Selling Products

                            </Text>
                        </Box>

                        <Box w={"21%"} h={"1px"} bgColor={"#D3D3D3"} mt={"18px"} ml={"500px"} pos={"absolute"}></Box>
                        <Box w={"80px"} h={"2px"} bgColor={"#fed700 "} mt={"18px"} ml={"500px"} pos={"absolute"}></Box>
                        <Box mt={"50px"}>
                            {data8.map((veeluees) => {
                                return (
                                    <Product8 seclast={veeluees} />
                                )
                            })}
                        </Box>
                    </Box>
                    <Box id="box9" mt={"-201px"} ml={"-40px"} >
                        <Box marginLeft={"1000px"} mt={"-14.5%"}>
                            <Text style={{ fontSize: "22px", fontWeight: 500 }}>
                                On-sale Products

                            </Text>
                        </Box>

                        <Box w={"20%"} h={"1px"} bgColor={"#D3D3D3"} mt={"18px"} ml={"1000px"} pos={"absolute"}></Box>
                        <Box w={"80px"} h={"2px"} bgColor={"#fed700 "} mt={"18px"} ml={"1000px"} pos={"absolute"}></Box>
                        <Box mt={"50px"}>
                            {data9.map((valuees) => {
                                return (
                                    <Product9 last={valuees} />
                                )
                            })}
                        </Box>
                    </Box>
                </Box>
                <Box id="seclastbox" w={"160%"}>
                    <Box backgroundColor={"#fed700"} h={"100px"} mt={"50px"} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "30px" }} >
                        <Box ml={"160px"}>


                            <PiTelegramLogoLight size={"2em"} />
                        </Box>

                        <Box >
                            <Text fontSize={"20px"} fontWeight={500}>Sign up to Newsletter</Text>
                        </Box>
                        <Box m={"50px"}>
                            <Text>
                                ...and receive<span style={{ fontSize: "17px", fontWeight: 700 }}> $20 coupon for first shopping</span>
                            </Text>
                        </Box>
                        <Box style={{ border: "2px  solid #fed700 ", borderRadius: "30px", display: "flex", flexDirection: "row", width: "530px" }}>
                            <Input variant={"none"} style={{ width: "600px", height: "38px", borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px" }} placeholder="Search..." />
                            <Box style={{ backgroundColor: "#333e48", width: "200px", borderTopRightRadius: "20px", borderBottomRightRadius: "20px", }}>
                                <Text style={{ marginTop: "6px", marginLeft: "40px", color: "white" }}  >Sign up</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box id="last" padding={"140px"} mt={"9%"} style={{ display: "flex", flexDirection: "row" }}>
                    <Box>
                        <Box id="lastcontent">
                            <Text mt={"-250px"} fontSize={"50px"} fontWeight={900} color={"#333e48"}><span id="text2">electro</span><span style={{ color: "#fed700", fontSize: "50px" }}>.</span></Text>
                            <Box style={{ display: "flex", flexDirection: "row" }}>
                                <PiHeadset color="#fed700" size={"3em"} />
                                <Text id="text">
                                    <span style={{ display: "flex", flexDirection: "column", marginLeft: "25px" }}>
                                        <span style={{ fontSize: "13px" }}>Got Questions ? Call us 24/7!</span>

                                        <span style={{ fontSize: "22px" }}>(800) 8001-8588, (0600) 874 548</span>
                                    </span>
                                </Text>
                            </Box>
                            <Box mt={"50px"} id="contact">
                                <Text fontWeight={600}>Contact Info</Text>
                                <Text fontSize={"13px"}>17 Princess Road, London, Greater London NW1 8JR, UK</Text>
                            </Box>
                        </Box>
                        <Box id="logo" mt={"9%"} style={{ display: "flex", flexDirection: "row" }} gap={"60px"}>
                            <Text w={"10px"} color={"gray"} _hover={{ color: "blue" }}>
                                <MdOutlineFacebook size={"2em"} />
                            </Text>
                            <Text w={"10px"} color={"gray"} _hover={{ color: "green" }}>
                                <FaWhatsapp size={"1.8em"} />
                            </Text>
                            <Text w={"10px"} color={"gray"} _hover={{ color: "#0066cc" }}>
                                <IoLogoLinkedin size={"1.8em"} />
                            </Text>
                            <Text w={"10px"} color={"gray"} _hover={{ color: "orange" }}>
                                <FaInstagram size={"1.8em"} />
                            </Text>
                            <Text w={"10px"} color={"gray"} _hover={{ color: "red" }}>
                                <FaYoutube size={"1.8em"} />
                            </Text>
                            <Text w={"10px"} color={"gray"} _hover={{ color: "orange" }}>
                                <FaSignal size={"1.8em"} />
                            </Text>


                        </Box>
                    </Box>
                    <Box id="help" mt={"-200px"} ml={"200px"}  >
                        <Box style={{ display: "flex", flexDirection: "row" }} fontWeight={700} gap={"400px"}>
                            <Text>Find it Fast</Text>
                            <Text>Customer care</Text>
                        </Box>
                        <Box style={{ display: "flex", flexDirection: "row" }} fontSize={"14px"}>
                            <Box mt={"20px"}>

                                <a href="#"> <Text mt={"10px"}>Laptops & computers</Text></a>
                                <a href="#"><Text mt={"10px"}>Cameras & Photography</Text></a>
                                <a href="#"> <Text mt={"10px"}>Smart Phones & Tablets</Text></a>
                                <a href="#"><Text mt={"10px"}>Video Games & Consoles</Text></a>
                                <a href="#"> <Text mt={"10px"}>TV & Audio</Text></a>
                                <a href="#"><Text mt={"10px"}>Gadgets</Text></a>
                                <a href="#"><Text mt={"10px"}>Waterproof Headphones</Text></a>

                            </Box>
                            <Box mt={"20px"} ml={"80px"}>

                                <a href="#"> <Text mt={"10px"}>About</Text></a>
                                <a href="#"><Text mt={"10px"}>Contact</Text></a>
                                <a href="#"><Text mt={"10px"}>Wishlist</Text></a>
                                <a href="#"><Text mt={"10px"}>Compare</Text></a>
                                <a href="#"> <Text mt={"10px"}>FAQ</Text></a>
                                <a href="#"> <Text mt={"10px"}>Social Directory</Text></a>


                            </Box>
                            <Box mt={"20px"} ml={"140px"}>

                                <a href="#"> <Text mt={"10px"}>My Account</Text></a>
                                <a href="#"> <Text mt={"10px"}>Trackk your Order</Text></a>
                                <a href="#"> <Text mt={"10px"}>Customer Service</Text></a>
                                <a href="#"> <Text mt={"10px"}>Return/Exchange</Text></a>
                                <a href="#"><Text mt={"10px"}>FAQs</Text></a>
                                <a href="#"><Text mt={"10px"}>Product Spport</Text></a>


                            </Box>
                        </Box>
                    </Box>


                </Box>
                <Box id="footer" backgroundColor={"#e8e8e8"} mt={"-50px"} height={"70px"} w={"160%"}>
                    <Box paddingLeft={"140px"} paddingTop={"25px"}>
                        <Text id="text3" fontWeight={600}>© <a href="#">Electro </a><span style={{ fontWeight: "normal", fontSize: "13px" }}>- All Rights Reserved/span</span>
                        </Text>


                        <Box paddingLeft={"1100px"} mt={"-20px"}>
                            <Image src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/patment-icon1.png"></Image>
                        </Box>
                    </Box>
                </Box>

            </Box>

        </Box>



    )
}