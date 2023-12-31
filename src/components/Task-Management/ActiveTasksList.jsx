import { Flex, Spacer, Badge, list } from "@chakra-ui/react";
import {BsPlusSquareFill} from 'react-icons/bs'


const ActiveTasksList = ({activeTask, completeHandler}) => {

    const moveToComplete = (id) => {
        completeHandler(id)
    }

    return (
        <>  
        
               
                <ul>
                    <label>Active</label>
                        {activeTask?.map(task => (
                        <Flex mt={2} gap={2} padding={2} border="1px" borderColor="blue.500" borderRadius={5} key={task.id}>
                            {task.name}
                            <Spacer />
                            <Badge mt={0.5} colorScheme='red' variant='subtle'>
                                Active
                            </Badge>
                            <button onClick={() => moveToComplete(task.id)}><BsPlusSquareFill color="#3182ce" /></button>
                        </Flex>
                        ))}
                </ul>
                
        </>
    )
}

export default ActiveTasksList;