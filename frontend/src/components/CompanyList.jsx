import React from 'react'
import { useState, useEffect } from 'react';
import api from '../api';
import CompanyCard from '../components/CompanyCard'
import { Container } from '@chakra-ui/react';

function CompanyList() {
  const [companies, setCompanies] = useState([])
      
          useEffect(() => {
          getCompanies();
        }, []);
      
          const getCompanies = () => {
            api.get("/api/companies/")
                .then((res) => res.data)
              .then((data) => {
                          setCompanies(data);

                  console.log(data)
                }).catch((err) => alert(err));
  }

  return (
    <Container maxW={'100%'} >
    {companies.map(
          (company) => (<CompanyCard company={company} key={company.id} />
    ))}
    </Container>

  )
}

export default CompanyList