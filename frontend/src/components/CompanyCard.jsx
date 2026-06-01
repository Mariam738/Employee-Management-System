import React from 'react'
import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import api from '../api';

function CompanyCard({ company }) {
    const [departments, setDepartments] = useState([]);

     useEffect(() => {
          getDepartments(company.id);
     }, []);
    
    const getDepartments = (id) => { 
        api.get(`/api/departmentsByCompany/${id}/`)
      .then((res) => res.data)
      .then((data) => {
          console.log(data);
          setDepartments(data);
      })
      .catch((err) => alert(err));
    }

  return (
      
      <Box mb={6} w={ "90%"}
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
                          {company.name}
                        </Heading>
        
                        <Text fontWeight='bold' fontSize='xl' color='gray.600' >
                          {company.about}
                        </Text>
                        <Text  fontSize='lg' color='gray.600' >
                      Industry: { company.industry}
              </Text>
              <Text  fontSize='lg' color='gray.600' >
                      Departments: {departments.map((dep) => dep.name).join(" | ")}
                      </Text>
                    </Box>
                </Box>
  )
}

export default CompanyCard