import React from 'react';
import ToDoListItem from '../containers/todoListItem';

const todoList = (props) => {
    let list = props.tasks.map((task, index) =>{
        return <ToDoListItem key={index} index={index} task={task} removeItem={props.removeItem}/>
    })
    return(
        <ul className='task-ul'>
            {list}
        </ul>
    )
}

export default todoList;