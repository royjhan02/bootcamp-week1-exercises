import React from 'react'
import ToDo from './todo';
 
const ToDoList = ({toDoList, handleToggle}) => {
   return (
    <div>
        {toDoList.map(todo => {
            return (
                <ToDo todo={todo} handleToggle={handleToggle}/>
            )
        })}
</div>
   );
};
 
export default ToDoList;