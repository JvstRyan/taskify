import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'
import {MdLightMode} from 'react-icons/md'


const ColorModeSwitch = () => {
    const {toggleColorMode, colorMode} = useColorMode()


  return (
    <HStack>
        <Switch colorScheme='blue' isChecked={colorMode === 'light'} onChange={toggleColorMode}/>
        <MdLightMode color='#3182ce' />
    </HStack>
  )
}

export default ColorModeSwitch