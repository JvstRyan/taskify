import {Flex, Spacer, Badge} from "@chakra-ui/react";
import {BsPlusSquareFill} from 'react-icons/bs'


const TaskList = ({task, onMoveToActiveHandler}) => {


    const moveToActiveHandler = (id) => {
        onMoveToActiveHandler(id)
    }

    // 1. Mapping over the user-input that I obtained via props from App.jsx
    // 2. Giving each element their own unique key by using crypto.randomUUID()

    return (
        <>
       
            <ul>
                {task.map( task => (
                 <Flex mt={3} gap={2} padding={2} border="1px" borderColor="blue.500" borderRadius={5} key={task.id}>
                     {task.name}
                      <Spacer />
                      <Badge mt={0.5} colorScheme='blue' variant='subtle'>
                        New
                      </Badge>
                      <button onClick={() => moveToActiveHandler(task.id)}><BsPlusSquareFill color="#3182ce"/></button>
                    </Flex>
                ))}
            </ul>
            
        </>
    )
}

export default TaskList;

//Ideas on how to render data to other lists:
//1: Implement button to array map()
//3: onClick of button => data of clicked element should get passed to App.jsx
//4: Data gets stored in state 
//5: State should be passed through props to next list in line and rendered. 

