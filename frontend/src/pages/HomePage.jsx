import React, { useEffect } from 'react'
import { Container, VStack, Text, SimpleGrid } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/Product'
import ProductCards from '../components/ProductCards.jsx'

const HomePage = () => {
    const { fetchData, products } = useProductStore();
    useEffect(() => {
        fetchData();
    }, [fetchData])
    //console.log(products)
    return (
        <Container maxW={'container.xl'} py={12}>
            <VStack spacing={8}>createProduct
                <Text
                    fontWeight={"bold"}
                    textAlign={"center"}
                    fontSize={{ base: "22", sm: "28" }}
                >
                    List of Products 🪜
                </Text>

                <SimpleGrid columns={{
                    base: 1,
                    md: 2,
                    lg: 3,
                }}
                    spacing={10}
                    w={"full"}
                >
                    {products.map((product) => (
                        <ProductCards key={product._id} product={product} />
                    ))}
                </SimpleGrid>

                {
                    products.length == 0 &&
                    <Text fontSize='xl' textAlign={"center"} fontWeight={"medium"}>
                        No Products listed {" "} &nbsp;&nbsp;&nbsp;
                        <Link to={"/createProduct"}>
                            <Text as="span" color="gray.400" fontWeight={"bold"} _hover={{ textDecoration: "underline", textColor: "#7928CA" }}>Add new Product </Text>
                        </Link>
                    </Text>
                }

            </VStack>
        </Container>
    )
}

export default HomePage