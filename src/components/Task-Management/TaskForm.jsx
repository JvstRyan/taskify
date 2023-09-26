import React, { useState } from 'react';
import classes from './TaskForm.module.css'




const TaskForm = (props) => {


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
        props.onReceiveTask(userInput)
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
        
        <section className={classes['form-container']}>
            <form onSubmit={onSubmitHandler}>
                <div className={`${classes['form-class']} ${!isValid && classes.invalid}`}>
                    <label>Tasks</label>
                    <input 
                    placeholder='please enter your task...'
                    value={userInput} 
                    type="text"
                    onChange={onChangeHandler}
                    id='0'
                    >
                    </input>
                    <button type='submit'>Add Task +</button>
                </div>
            </form>
        </section>
    )
}

export default TaskForm;