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
    Link
} from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
// import '../css/index.css'
import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <>

            <Box p={"90px"} backgroundImage={"https://brainwavesindia.com/wp-content/uploads/2021/01/brainwaves-website-pages-_06-01-2021-_-01.jpg"}   h={"853px"} display={"flex"} justifyContent={"center"}>
            <Box backgroundColor={"white"} w={"40rem"} boxShadow={"0px 0px 14px -5px"}  borderRadius={"30px"}  h={"700px"}>
                <Box paddingBottom={"50px"}>
                    <Text ml={"42px"} fontSize={"40px"} fontWeight={900} color={"#333e48"}>electro<span style={{ color: "#fed700", fontSize: "50px" }}>.</span></Text>
                </Box>
                <Text fontSize={"25px"} fontWeight={500} ml={"42px"} pos={"relative"}>
                    Login
                </Text>

                <Box w={"24%"} h={"1px"} bgColor={"#D3D3D3"} mt={"18px"} ml={"42px"} pos={"absolute"}></Box>
                <Box w={"5%"} h={"2px"} bgColor={"#fed700 "} mt={"18px"} ml={"42px"} pos={"absolute"}></Box>
                <Box>
                    <Text fontWeight={700} fontSize={"14px"} paddingTop={"60px"} paddingLeft={"35px"}>
                        Username or email address *
                    </Text>
                    <Box paddingTop={"15px"} paddingLeft={"35px"} w={"400px"}>

                        <Input borderRadius={"20px"} h={"45px"} />
                    </Box>
                </Box>
                <Box>
                    <Text fontWeight={700} fontSize={"14px"} paddingTop={"40px"} paddingLeft={"35px"}>
                        Password *                        </Text>

                    <Box paddingLeft={"35px"} paddingTop={"10px"}>
                        <Input borderRadius={"20px"} h={"45px"} w={"370px"} />
                    </Box>
                    <Box paddingLeft={"35px"} paddingTop={"20px"}>
                        <Checkbox defaultChecked paddingTop={"10px"}> Remember me</Checkbox>
                    </Box>
                    <Box paddingLeft={"30px"} paddingTop={"20px"}>
                        <Button _hover={{ backgroundColor: "black", color: "white" }} backgroundColor={"#efecec"} w={"110px"} h={"50px"} borderRadius={"30px"}><NavLink to="/dashboard"> Log in</NavLink> </Button>
                        <a href="#"> <Text fontSize={"15px"} ml={"10px"} mt={"20px"}>Lost your password?</Text></a>
                        <Box  paddingTop={"10px"}>
                            <Text fontWeight={600} ml={"10px"}>
                                you don't have any accout?so you create<br></br> an account <NavLink style={{ fontWeight: "300" }} to="/sign-up"><Link  id="text">Signin</Link></NavLink>
                            </Text>

                        </Box>
                    </Box>

                 </Box>
                </Box>
            </Box>


        </>
    )
}
export default Login