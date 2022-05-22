import React from 'react';
import '../style/ToDos.css';

const TodoItem = (props) => {
    return (
        <div>
            {
                props.todos.map(item => {
                    return <div className={'todo'} key={item.id} >
                        <h2>{item.text}</h2>
                        <button className={'removeBtn'} onClick={() => props.remove(item)} >X</button>
                    </div>
                })
            }
        </div>
    );
};

export default TodoItem;