import React from 'react'
import { Button, Container } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';



function LogoutFooter() {
    const navigate = useNavigate();
    const handleLogout = () => {
         console.log("log out")
        localStorage.clear();
        navigate("/login");
    }

    return (
    <Container maxW={'90%'} mt={4}>
        <Button colorScheme='red' onClick={handleLogout} w='full'>
            Logout
            </Button>
    </Container>
  )
}

export default LogoutFooter

