import { useProductStore } from '../store/Product';
import { Heading, VStack, Container, Box, useColorMode, useColorModeValue, Input, Button, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'

const CreateProductPage = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: "",
    });

    const { createProduct } = useProductStore();
    const toast = useToast();

    const handleAddProduct = async (e) => {
        e.preventDefault();
        try {
            const { success, message } = await createProduct(newProduct);
            if (!success) {
                toast({
                    title: "Error creating product",
                    description: message,
                    status: "error",
                    duration: 3000,
                    isClosable: true
                })
            } else {
                toast({
                    title: "Product added.",
                    description: message,
                    status: "success",
                    duration: 3000,
                    isClosable: true
                })
            }
            setNewProduct({
                name: "",
                price: "",
                image: "",
            })

        } catch (error) {
            console.log(error.message);
        }


    }

    return (
        <Container maxW={"container.sm"} mt={"30px"}>
            <VStack spacing={8}>
                <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={"8"}>Add New Product</Heading>
                <Box w={"full"}
                    bg={useColorModeValue("white", "gray.800")}
                    p={6}
                    rounded={"lg"}
                    shadow={"md"}
                >
                    <VStack>
                        <Input
                            placeholder='Enter Product Name'
                            name='name'
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        />
                        <Input
                            placeholder='Enter Price'
                            price='price'
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                        />
                        <Input
                            placeholder='Image url'
                            image='image'
                            value={newProduct.image}
                            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                        />
                        <Button colorScheme='blue' onClick={handleAddProduct} w={"full"}>Add Product</Button>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    )
}

export default CreateProductPage