import React from 'react'
import {
	Box,
    Text,
    Heading,
} from "@chakra-ui/react";
import { useState, useEffect } from 'react';
import api from "../api";


function EmployeeCard({ id}) {

    const [employee, setEmployee] = useState({
        username: '',
        company_name: '',
        department_name: '',
        title: '',
        phone: '',
        address: '',
        hire_date: '',
        status: null
      });

    useEffect(() => {
    getEmployee();
  }, []);

    const getEmployee = () => {
      let employeeData = null
      api.get(`/api/employees/${id}/`)
          .then((res) => res.data)
          .then((data) => {
              setEmployee(data);
              employeeData = data
              return api.get(`/api/user/${data.user}/`)
          }).then((userData) => {
              setEmployee((prev) => ({ ...prev, username: userData.data.username }));
              return api.get(`/api/companies/${employeeData.company_id}/`)
          }).then((companyData) => { 
                setEmployee((prev) => ({ ...prev, company_name: companyData.data.name }));
                return api.get(`/api/departments/${employeeData.department_id}/`)
          }).then((departmentData) => { 
                setEmployee((prev) => ({ ...prev, department_name: departmentData.data.name }));
             
          })
      .catch((err) => alert(err));
  }

  return (
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
                  Name: {employee.username}
				</Heading>

				<Text fontWeight='bold' fontSize='xl' color='gray.600' >
                  {employee.title} Title | {employee.department_name} Department | {employee.company_name} Copmany
				</Text>
				<Text  fontSize='lg' color='gray.600' >
                  {employee.phone} | {employee.address}
              </Text>
              <Text  fontSize='lg' color='gray.600'>
                  Hire date: { employee.hire_date}
              </Text>
				<Text  fontSize='lg' color='gray.600'>
                  Status: { employee.status ? "Active": "Inactive"}
              </Text>
              
             
			</Box>
		</Box>
  )
}

export default EmployeeCard