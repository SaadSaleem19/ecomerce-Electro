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
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup, useToast,InputGroup } from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon, ViewIcon } from "@chakra-ui/icons";
// import '../css/index.css'
// import { NavLink } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import { apiServices } from "../../api";
// import { useState } from "react";
const Signup = () => {
  const navigation = useNavigate();
  const [emailval, setemailval] = useState("");
  const [pass, setpass] = useState("");
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
 
  const toast = useToast();
  const status = ["error"];
  const onSigup = async () => {
    try {
      const Signup = await apiServices.post("/auth/register", {
        email: emailval,
        password: pass,
      });

      console.log("Signup", Signup?.data);
      if (Signup?.data?.user) {
        toast({
          title: "Account created",
          description: "We've created your account",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        navigation("/login");
      }
    } catch (error) {
      toast({
        title: "This email has already account",
        status: status,
        isClosable: true,
      });
      console.log("error", error);
    }
  };
  return (
    <>
      <Box
        p={"90px"}
        backgroundImage={
          "https://brainwavesindia.com/wp-content/uploads/2021/01/brainwaves-website-pages-_06-01-2021-_-01.jpg"
        }
        h={"950px"}
        display={"flex"}
        justifyContent={"center"}
      >
        <Box
          backgroundColor={"white"}
          w={"40rem"}
          boxShadow={"0px 0px 14px -5px"}
          borderRadius={"30px"}
          h={"810px"}
        >
          <Box paddingBottom={"50px"}>
            <Text
              ml={"42px"}
              fontSize={"40px"}
              fontWeight={900}
              color={"#333e48"}
            >
              electro
              <span style={{ color: "#fed700", fontSize: "50px" }}>.</span>
            </Text>
          </Box>
          <Text fontSize={"25px"} fontWeight={500} ml={"42px"} pos={"relative"}>
            Register
          </Text>

          <Box
            w={"30%"}
            h={"1px"}
            bgColor={"#D3D3D3"}
            mt={"18px"}
            ml={"42px"}
            pos={"absolute"}
          ></Box>
          <Box
            w={"85px"}
            h={"2px"}
            bgColor={"#fed700 "}
            mt={"18px"}
            ml={"42px"}
            pos={"absolute"}
          ></Box>

          <Box>
            <Text
              fontWeight={700}
              fontSize={"14px"}
              paddingTop={"45px"}
              paddingLeft={"35px"}
            >
              Email address *
            </Text>
            <Box paddingTop={"10px"} paddingLeft={"35px"} w={"50%"}>
              <Input
                borderRadius={"20px"}
                h={"45px"}
                onChange={(e) => {
                  setemailval(e.target.value);
                }}
              />
            </Box>
          </Box>
          <Box>
            <Text
              fontWeight={700}
              fontSize={"14px"}
              paddingTop={"45px"}
              paddingLeft={"35px"}
            >
              Password *{" "}
            </Text>

            <Box paddingLeft={"35px"} paddingTop={"10px"}>
              <InputGroup size="md">
                <Input
                  borderRadius={"20px"}
                  h={"45px"}
                  w={"50%"}
                  onChange={(e) => {
                    setpass(e.target.value);
                  }}
                />

                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={handleClick}
                  marginLeft={"-45px"}
                  marginTop={"9px"}
                >
                  <ViewIcon />
                </Button>
              </InputGroup>
            </Box>
            <Box paddingLeft={"35px"} paddingTop={"20px"}>
              <Text fontSize={"14px"}>
                Your personal data will be used to support your experience
                throughout this website, to
                <br></br> manage access to your account, and for other purposes
                described in our privacy policy.
              </Text>
            </Box>
            <Box paddingLeft={"30px"} paddingTop={"20px"}>
              <Button
                onClick={onSigup}
                _hover={{ backgroundColor: "black", color: "white" }}
                backgroundColor={"#efecec"}
                w={"110px"}
                h={"50px"}
                borderRadius={"30px"}
              >
                {" "}
                Register
              </Button>
            </Box>
            <Box ml={"20px"} mt={"20px"}>
              <Text fontWeight={600} ml={"10px"}>
                you have already account ?so login <br></br>your account{" "}
                <NavLink style={{ fontWeight: "300" }} to="/Login">
                  <Link textDecoration={"underline"} id="text">Login</Link>
                </NavLink>
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Signup;
