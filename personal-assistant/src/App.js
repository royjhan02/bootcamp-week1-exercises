import React, { useState } from 'react'
import ToDoList from './Components/todolist'
import ToDoForm from './Components/todoform'
import SearchComponent from './Components/search'
import { Layout } from './Components/styles'
import data from './data.json'

const App = () => {
    const [ toDoList, setToDoList ] = useState(data);

    const handleToggle = (id) => {
      let mapped = toDoList.map(task => {
        return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
      });
      setToDoList(mapped);
    }

    const addTask = (userInput) => {
      let copy = [...toDoList];
      copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
      setToDoList(copy);
    }

    return (
    <Layout>
      <h2>Add Task</h2>
      <ToDoForm addTask={addTask}/>
      <h2>Search Tasks</h2>
      <SearchComponent />
      <h2>Your List</h2>
      <ToDoList toDoList={toDoList} handleToggle={handleToggle}/>
    </Layout>
    )
}

export default App
