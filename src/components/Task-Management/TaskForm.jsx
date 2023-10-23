import { Box, Button, Container, FormControl, FormLabel, Text, Input, Alert, AlertIcon, AlertTitle, AlertDescription, useDisclosure, Flex} from '@chakra-ui/react';
import React, { useState } from 'react';
import {AiOutlinePlus} from 'react-icons/ai'






const TaskForm = ({onReceiveTask}) => {


    //Adding state to store input
    const [userInput, setUserInput] = useState("")
    const [isValid, setIsValid] = useState(true)


    //1. Function that will trigger when the form gets submitted.
    //2. preventDefault() so that the whole page doesn't refresh.
    //3. Passing props from ./App.jsx to collect userInput from state. (Lifting up state) 
    //4. Cleaning the input field by setting setUserInput to an empty string.
    const onSubmitHandler = (e) => {
        e.preventDefault()
        if (userInput.trim().length === 0) {
            setIsValid(false)
            return;
        }
        onReceiveTask(userInput)
        setUserInput("")
    }

    //1. Funtion that will trigger when the input field changes
    //2. Updating state by targeting the value that is being given by the user. 
   const onChangeHandler = (e) => {
        if(e.target.value.trim().length > 0) {
            setIsValid(true)
        }
        setUserInput(e.target.value)
    }

  

    return (
       <>
        <form onSubmit={onSubmitHandler}>
            <FormControl>
                <FormLabel>Tasks</FormLabel>
                    <Input
                    borderColor={!isValid ? 'red.300' : '#3182ce'}
                    size='md'
                    placeholder={!isValid ? 'Please enter a valid task' : 'Please enter your task'}
                    value={userInput} 
                    type="text"
                    onChange={onChangeHandler}
                    id='0'
                    >
                    </Input>
                    {!isValid && <Text>Task must contain atleast 1 charachter</Text>}
                    <Button gap={2} _hover={{bg:'blue.500'}}  bg='none' border='1px' borderColor="blue.500" w="100%" mt={3} type='submit'>Add Task <AiOutlinePlus/></Button>
            </FormControl>
        </form>
        </>
       
    )
}

export default TaskForm;