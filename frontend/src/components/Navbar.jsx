import { PlusSquareIcon, SettingsIcon } from '@chakra-ui/icons'
import { Button, Container, Flex, HStack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/Product'

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { products } = useProductStore();
    return (
        <Container maxH={"1140px"} px={4}>
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"} flexDir={{ base: "column", sm: "row" }}>
                <Text bgGradient='linear(to-l, #7928CA, #FF0080)'
                    bgClip='text'
                    fontSize={{ base: "22", sm: "28" }}
                    fontWeight='bold'
                    textTransform={"uppercase"}
                    textAlign={"center"}
                >
                    <Link to={"/"}>Product Store 🛒</Link>
                </Text>
                <HStack spacing={2} alignItems={"flex-end"}>
                    <Link to={"/createProduct"}>
                        <Button>
                            <PlusSquareIcon fontSize={20} />
                        </Button>
                    </Link>
                    <Button onClick={toggleColorMode}>
                        {colorMode === 'light' ? "🌚" : "🌕"}
                    </Button>
                </HStack>
            </Flex>
        </Container>
    )
}

export default Navbar