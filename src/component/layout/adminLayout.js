"use client";

import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Input,
  Link,
} from "@chakra-ui/react";
import {
  MenuDescendantsProvida,
  WrapItem,
  Tooltip,
  Watem,
  Image,
  ChakraProvider,
  Divider,
} from "@chakra-ui/react";
import { BiHeart, BiUser, BiShoppingBag } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";

import {
  HamburgerIcon,
  ChevronDownIcon,
  SearchIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import { IconType } from "react-icons";
import "../../screen/Admin/index.css";
import {Addproduct} from "../../screen/Admin/Product/Addproduct/product";
import { Component, useState } from "react";

const LinkItems = [
  {
    name: "Ecomerce",
    icon: FiHome,
    child: [
      {
        title: "Home 01",
        path: "/",
      },
      {
        title: "Home 02",
        path: "/",
      },
      {
        title: "Home 02",
        path: "/",
      },
    ],
  },
  {
    name: "Product",
    icon: FiTrendingUp,
    child: [
      {
        title: "Add Product",
        path: "/add-product",
      },
      {
        title: "Product List",
        path: "/productlist",
      },
      {
        title: "Product Detail",
        path: "/",
      },
    ],
  },
  {
    name: "Order List ",
    icon: FiCompass,
    child: [
      {
        title: "Order List",
        path: "/order",
      },
      {
        title: "Order Detail",
        path: "/",
      },
      {
        title: "Order Tracking",
        path: "/",
      },
    ],
  },
];

const SidebarContent = ({ onClose, ...rest }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text
          fontSize={"4xl"}
          fontWeight={"bold"}
          color={"#333e48"}
          ml={"10px"}
        >
          electro<span style={{ color: "#fed700", fontSize: "50px" }}>.</span>
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((item) => (
        <Box mt={"5px"}>
          <NavItem
            key={item.name}
          
            icon={item.icon}
            onClick={() => {
              setSelectedItem(item.name);
            }}
          >
            {item.name}
          </NavItem>
          {item.name == selectedItem && (
            <Box>
              {item.child.map((val) => {
                return (
                  <Box paddingLeft={"35px"}>
                    {
                      <a href={val.path} id="link">
                        {" "}
                        <Text mt={"10px"}>{val.title}</Text>
                      </a>
                    }
                  </Box>
                );
              })}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        fontSize={"3xl"}
        fontWeight={"bold"}
        color={"#333e48"}
        display={{ base: "flex", md: "none" }}
      >
        electro<span style={{ color: "#fed700", fontSize: "50px" }}>.</span>
      </Text>
      <HStack>
        <Flex alignItems={"center"} display={"flex"} gap={"22px"}>
          <Box
            display={{ base: "none", md: "block" }}
            mr={{ base: "10px", md: "0px", lg: "400px" }}
          >
            <Box
              style={{
                border: "2px  solid #fed700 ",
                borderRadius: "30px",
                display: "flex",
                flexDirection: "row",
              }}
              w={{ md: "90%", lg: "200%" }}
            >
              <Input
                id="input"
                variant={"none"}
                w={{ md: "150%", lg: "90%" }}
                style={{
                  height: "38px",
                  borderTopLeftRadius: "20px",
                  borderBottomLeftRadius: "20px",
                }}
                placeholder="Search..."
              />
              <Box
                style={{
                  backgroundColor: "#fed700",
                  width: "100px",
                  borderTopRightRadius: "20px",
                  borderBottomRightRadius: "20px",
                }}
              >
                <SearchIcon
                  style={{ marginTop: "6px", marginLeft: "10px" }}
                  w={8}
                  h={5}
                />
              </Box>
            </Box>
          </Box>
          <Box
            display={{ base: "none", lg: "block", md: "flex", lg: "flex" }}
            flexDirection={"row"}
            gap={"35px"}
          >
            <Menu>
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
            </Menu>
          </Box>
          <Box display={{ base: "block", md: "none" }}>
            <Menu>
              <WrapItem>
                <Tooltip label="Cart" hasArrow arrowSize={15}>
                  <MenuButton>
                    <Box style={{ marginTop: "6px" }}>
                      <BiShoppingBag
                        size={"1.5em"}
                        display={{ base: "block" }}
                      />
                    </Box>
                  </MenuButton>
                </Tooltip>
              </WrapItem>
            </Menu>
          </Box>
        </Flex>
      </HStack>
    </Flex>
  );
};

const Layout = ({ Component }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} boxShadow={"0px 0px 33px -23px"} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* Content */}
         <Component/>
      </Box>
    </Box>
  );
};

export default Layout;
