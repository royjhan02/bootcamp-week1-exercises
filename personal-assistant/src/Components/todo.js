import React from 'react';
import { Checked, Unchecked } from './styles'
 
const ToDo = ({ todo, handleToggle }) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        <div id={todo.id} key={todo.id + todo.task} onClick={handleClick}>
            {todo.complete ? <Checked>{todo.task}</Checked> : <Unchecked>{todo.task}</Unchecked>}
        </div>
    )
}
 
export default ToDo;