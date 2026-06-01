import React from 'react'
import Employee from './Employee'
import { Container, Flex, Heading, HStack } from '@chakra-ui/react'
import DepartmentList from '../components/DepartmentList'
function Hr() {
  return (
    <Container maxW='container.xl' py={0}>
      <Heading as='h3' size='md' mt={2} textAlign="center">
        My Profile
      </Heading>
      <Employee></Employee>
      <Heading as='h3' size='md' mt={2} textAlign="center">
        My Company
      </Heading>

{/* 
      <HStack>
          <Heading as='h3' size='md' mt={2} textAlign="center">
        Departments
      </Heading>
        
        <Heading as='h3' size='md' mt={2} textAlign="end">
        Employees
      </Heading>
      </HStack> */}

      <Flex
        h={4}
        w="100%"
        px={10}
				alignItems={"center"}
				justifyContent={"space-between"}
				flexDir={{
					base: "row",
					sm: "row",
        }}>
        <Heading as='h3' size='md' textAlign="center">
        Departments
      </Heading>
        
        <Heading as='h3' size='md'  textAlign="right">
        Employees
      </Heading>
      </Flex>

      <HStack>
        <DepartmentList></DepartmentList>
        <Employee></Employee>
      </HStack>

      
    
    </Container>
  )
}

export default Hr