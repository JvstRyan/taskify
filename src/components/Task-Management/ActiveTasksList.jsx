import React from "react";
import classes from './ActiveTasksList.module.css'

const ActiveTasksList = (props) => {

    const moveToComplete = (id) => {
        props.completeHandler(id)
    }

    return (
        <>  
        
               <section className={classes['active-container']}>
                    <ul className={classes['task-list']}>
                    <label className={classes['active-header']}>Active</label>
                        {props.activeTask.map(task => (
                        <li className={classes.tasks} key={task.id}>
                            {task.name}
                            <button onClick={() => moveToComplete(task.id)} className={classes['button-class']}>+</button>
                        </li>
                        ))}
                    </ul>
                </section>
        </>
    )
}

export default ActiveTasksList;