import { Box, Button, Heading } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import CreateProductPage from './pages/CreateProductPage.jsx';
import Navbar from './components/Navbar.jsx';
import { useColorModeValue } from '@chakra-ui/react';
import { useProductStore } from './store/Product.js';

function App() {
  const { products } = useProductStore();
  return (
    <>
      <Box minH={"100vh"} bg={useColorModeValue("#f7f7f7.100", "gray.900")}>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/createProduct' element={<CreateProductPage />} />
        </Routes>
      </Box>
    </>
  )
}

export default App
