import { Flex, Image, Spacer } from '@chakra-ui/react'
import {CgGoogleTasks} from 'react-icons/cg'
import React from 'react'
import ColorModeSwitch from '../ColorModeSwitch'

const Navbar = () => {
  return (
    <Flex m={5} alignItems='center'>
        {/* <Image boxSize='70px' src={logo} /> */}
        <CgGoogleTasks size='35px' color='#3182ce' />
        <Spacer />
        <ColorModeSwitch />
    </Flex>
  )
}

export default Navbar