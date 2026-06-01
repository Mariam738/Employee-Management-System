import React from 'react'
import EmployeeCard from '../components/EmployeeCard'
import { Container, Button } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import api from '../api';

function Employee() {
    const [id, setId] = useState(null)
    
        useEffect(() => {
        getMe();
      }, []);
    
        const getMe = () => {
          api.get("/api/me/")
              .then((res) => res.data)
              .then((data) => {
                console.log(data)
                setId(data.id)
              }).catch((err) => alert(err));
      }

  return (
    		<Container maxW='container.xl' py={4}>
      {id && <EmployeeCard id={id}></EmployeeCard>}
      
    </Container>
  
    
  )
}

export default Employee;

