import React from 'react'
import {FaTrash} from 'react-icons/fa'
import { Flex, Spacer, Badge } from '@chakra-ui/react'


const CompletedTaskList = (props) => {

    const deleteHandler = (id) => {
        props.deleteTask(id)
    }

    return (
        <>  
            
                <ul>
                    <label>Completed</label>
                        {props.completedTask.map(task => (
                        <Flex mt={2} gap={2} padding={2} border="1px" borderColor="blue.500" borderRadius={5} key={task.id}>
                            {task.name}
                            <Spacer />
                            <Badge mt={0.5} colorScheme='green' variant='subtle'>
                                Completed
                            </Badge>
                            <button onClick={() => deleteHandler(task.id)}>
                               <FaTrash color='#3182ce' />
                            </button>
                        </Flex>
                        ))}
                </ul>
                
        </>
    )
}

export default CompletedTaskList;