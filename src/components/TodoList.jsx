import React from 'react';
import '../style/ToDos.css';
import TodoItem from "./TodoItem";

const TodoList = (props) => {
    return (
        <div className={'todos'} >
            <TodoItem todos={props.todos} remove={props.remove} />
        </div>
    );
};

export default TodoList;