import { Button, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/UI/Navbar/Navbar'

const HomePage = () => {
  return (
    
    <>
    <Navbar />
    <SimpleGrid alignItems={'center'} mt={20} placeItems={'center'} columns={[1, 1, 1]} spacing='30px'>
    <Heading color={'blue.500'} fontSize={60}>Taskify</Heading>
    <Text color={''} fontSize={20}  textAlign={'center'} maxW={'30rem'}>The only task management application you will need to get your tasks done.</Text>
    <Link to={'/todos'}>
    <Button color={'white'} w={'10rem'} bg={'blue.500'}>Get Started</Button>
    </Link>
    </SimpleGrid>
    </>
  )
}

export default HomePage