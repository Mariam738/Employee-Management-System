import React from 'react'
import { Box, Container, Heading, Text } from '@chakra-ui/react'
const CompanyList = () => {
  return (
    <Container maxW='container.xl' py={4}>
      {/* {id && <EmployeeCard id={id}></EmployeeCard>} */}
        <Box
                    shadow='lg'
                    rounded='lg'
                    overflow='hidden'
                    transition='all 0.3s'
                    _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
                    bg='white'
                >
                    {/* <Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover' /> */}
        
                    <Box p={4} padding='4'>
                        <Heading as='h3' size='md' mb={2}>
                          Name: 
                        </Heading>
        
                        <Text fontWeight='bold' fontSize='xl' color='gray.600' >
                          About:
                        </Text>
                        <Text  fontSize='lg' color='gray.600' >
                          Industry
                      </Text>
                    </Box>
                </Box>
    </Container>
  )
}

export default CompanyList