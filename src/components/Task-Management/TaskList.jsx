
import classes from './TaskList.module.css'


const TaskList = (props) => {


    const moveToActiveHandler = (id) => {
        props.moveToActiveHandler(id)
    }

    // 1. Mapping over the user-input that I obtained via props from App.jsx
    // 2. Giving each element their own unique key by using crypto.randomUUID()

    return (
        <>
            
            <ul className={classes['task-list']}>
                {props.task.map( task => (
                    <li className={classes.tasks} key={task.id}>
                        {task.name}
                        <button onClick={() => moveToActiveHandler(task.id)} className={classes['button-class']}>+</button>
                    </li>
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

