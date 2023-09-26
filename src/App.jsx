import React, {useState} from 'react'
import TaskForm from "./components/Task-Management/TaskForm"
import TaskList from './components/Task-Management/TaskList'
import ActiveTasksList from './components/Task-Management/ActiveTasksList'
import CompletedTaskList from './components/Task-Management/CompletedTaskList'
import SideBar from './components/UI/SideBar/SideBar'
import classes from './App.module.css'

function App() {  

  //1. Storing the data in State that I received from TaskForm.jsx

  const [userInput, setUserInput] = useState([])
  //1. When data passes through the prop it gets sent to this function
  //2. The function updates state by taking the given data and returns an array

  const [activeTask, setActiveTask] = useState([])
  const [completedTask, setCompletedTask] = useState([])
  const [deletedTask, setDeletedTask] = useState([])

  const onReceiveTask = (userInput) => {
    setUserInput((prevUserList) => {
      return [...prevUserList, {name: userInput, id: crypto.randomUUID()}]
    })
    
  }

  const moveToActiveHandler = (id) => {
    setActiveTask(prevTasks => {
      const newActiveTasks = [...prevTasks];
      const taskMoveToActive = userInput.find(task => task.id === id);
  
      if (taskMoveToActive) {
        newActiveTasks.push(taskMoveToActive);
      } 
  
      return [...newActiveTasks];
    });
    setUserInput(prevUserInput => prevUserInput.filter(task => task.id !== id));
  }

  const moveToCompleteHandler = (id) => {
    setCompletedTask(prevTasks => {
      const newCompletedTasks = [...prevTasks];
      const taskMoveToCompleted = activeTask.find(task => task.id === id);
  
      if (taskMoveToCompleted) {
        newCompletedTasks.push(taskMoveToCompleted);
      } 
  
      return [...newCompletedTasks];
    });
    setActiveTask(prevActiveInput => prevActiveInput.filter(task => task.id !== id));
  }

  const deleteTaskHandler = (id) => {
    setDeletedTask(prevTasks => {
      const newDeletedTasks = [...prevTasks];
      const taskMoveToDeleted = completedTask.find(task => task.id === id)

      if (taskMoveToDeleted) {
        newDeletedTasks.push(taskMoveToDeleted)
      }

      return [...newDeletedTasks]
    })
    setCompletedTask(prevCompletedInput => prevCompletedInput.filter(task => task.id !== id))
    setDeletedTask(prevDeletedInput => prevDeletedInput.filter(task => task.id !== id))
  }
  
  return (
    <>

    <SideBar />
    <section className={classes['app-container-inside']}>
      <article className={classes['app-positioning']}>
        <TaskForm onReceiveTask={onReceiveTask}/>
        <TaskList task={userInput} moveToActiveHandler={moveToActiveHandler} />
      </article>
      <article>
        <ActiveTasksList activeTask={activeTask} completeHandler={moveToCompleteHandler}/>
      </article>
      <article>
        <CompletedTaskList completedTask={completedTask} deleteTask={deleteTaskHandler} />
      </article>
    </section>
    
      
    </>
  )
}

export default App
