import React from 'react'
import classes from "./CompletedTaskList.module.css"
import trash from '../../assets/trash.png'


const CompletedTaskList = (props) => {

    const deleteHandler = (id) => {
        props.deleteTask(id)
    }

    return (
        <>  
             <section className={classes['active-container']}>
                    <ul className={classes['task-list']}>
                    <label className={classes['active-header']}>Completed</label>
                        {props.completedTask.map(task => (
                        <li className={classes.tasks} key={task.id}>
                            {task.name}
                            <button onClick={() => deleteHandler(task.id)} className={classes['button-class']}>
                                <img src={trash}></img>
                            </button>
                        </li>
                        ))}
                    </ul>
                </section>
        </>
    )
}

export default CompletedTaskList;