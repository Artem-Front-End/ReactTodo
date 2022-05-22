import React, {useState} from 'react';

const TodoForm = (props) => {

    const [text, setText] = useState('');

    const addTodo = e => {
        e.preventDefault();
        if(text){
            if(text.length <= 35){
                const newTodo = {
                    text,
                    id: Date.now()
                }
                props.create(newTodo)
                setText('')
            } else {
                alert('Too long')
            }
        }
    }

    return (
        <form>
            <input
                placeholder={'Type your todo'}
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button onClick={addTodo} >+</button>
        </form>
    );
};

export default TodoForm;