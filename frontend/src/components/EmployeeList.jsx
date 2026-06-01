import React from 'react'
import { useState, useEffect } from 'react';
import api from '../api';
import { Container } from '@chakra-ui/react';
import EmployeeCard from '../components/EmployeeCard'

function EmployeeList() {
  const [employees, setEmployees] = useState([])
      
          useEffect(() => {
          getEmployees();
        }, []);
      
          const getEmployees = () => {
            api.get("/api/employees/")
                .then((res) => res.data)
              .then((data) => {
                          setEmployees(data);
                    console.log("employees")
                  console.log(data)
                }).catch((err) => alert(err));
  }

  return (
      <Container maxW={'100%'} >
          {/* {employees.map(
          (employee) => (<EmployeeCard employee={employee} key={employee.user} />
          ))} */}
    
    </Container>

  )
}

export default EmployeeList