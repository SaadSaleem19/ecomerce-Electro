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
import { Checkbox, CheckboxGroup ,useToast} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon, ViewIcon } from "@chakra-ui/icons";
// import '../css/index.css'
import { NavLink, useNavigate } from "react-router-dom";
import { apiServices } from "../../api";
import { useState ,} from "react";

const Login = () => {
  const navigation = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
 
  console.log("email", email, "pass", password);
  const toast = useToast()
  const  status  = ['error']
  const onLogin = async () => {
    try {
      const response = await apiServices.post("/auth/login", {
        email: email,
        password: password,
      });

      if (response?.data?.user) {
        console.log("loggin response", response?.data);
        localStorage.setItem('userData', JSON.stringify(response?.data))
        toast({
          title: 'Login Succssefull',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
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
      <Box
        p={"90px"}
        backgroundImage={
          "https://brainwavesindia.com/wp-content/uploads/2021/01/brainwaves-website-pages-_06-01-2021-_-01.jpg"
        }
        h={"853px"}
        display={"flex"}
        justifyContent={"center"}
      >
        <Box
          backgroundColor={"white"}
          w={"40rem"}
          boxShadow={"0px 0px 14px -5px"}
          borderRadius={"30px"}
          h={"700px"}
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
            Login
          </Text>

          <Box
            w={"24%"}
            h={"1px"}
            bgColor={"#D3D3D3"}
            mt={"18px"}
            ml={"42px"}
            pos={"absolute"}
          ></Box>
          <Box
            w={"5%"}
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
              paddingTop={"60px"}
              paddingLeft={"35px"}
            >
              Username or email address *
            </Text>
            <Box paddingTop={"15px"} paddingLeft={"35px"} w={"400px"}>
              <Input
                borderRadius={"20px"}
                h={"45px"}
                onChange={(e) => setemail(e.target.value)}
              />
            </Box>
          </Box>
          <Box>
            <Text
              fontWeight={700}
              fontSize={"14px"}
              paddingTop={"40px"}
              paddingLeft={"35px"}
            >
              Password *{" "}
            </Text>

            <Box paddingLeft={"35px"} paddingTop={"10px"}>
              <InputGroup size="md">
              <Input
                    type={show ? 'text' : 'password'}
                    borderRadius={"20px"}
                    h={"45px"}
                    w={"370px"}
                    onChange={(e) => setpassword(e.target.value)}
                  />
                
                 

                  <Button h="1.75rem" size="sm" onClick={handleClick} marginLeft={"-45px"}  marginTop={"9px"}>
                    <ViewIcon  />
                  </Button>
                
              </InputGroup>
            </Box>
            <Box paddingLeft={"35px"} paddingTop={"20px"}>
              <Checkbox defaultChecked paddingTop={"10px"}>
                {" "}
                Remember me
              </Checkbox>
            </Box>
            <Box paddingLeft={"30px"} paddingTop={"20px"}>
              <Button
                onClick={onLogin}
                _hover={{ backgroundColor: "black", color: "white" }}
                backgroundColor={"#efecec"}
                w={"110px"}
                h={"50px"}
                borderRadius={"30px"}
                
              >
                {/* <NavLink to="/dashboard"> Log in</NavLink>{" "} */}
                Log in
              </Button>
              <a href="#">
                {" "}
                <Text fontSize={"15px"} ml={"10px"} mt={"20px"}>
                  Lost your password?
                </Text>
              </a>
              <Box paddingTop={"10px"}>
                <Text fontWeight={600} ml={"10px"}>
                  you don't have any accout?so you create<br></br> an account{" "}
                  <NavLink style={{ fontWeight: "300" }} to="/sign-up">
                    <Link id="text" textDecoration={"underline"}>Signup</Link>
                  </NavLink>
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Login;
