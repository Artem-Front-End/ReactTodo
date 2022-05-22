import React, {useState} from 'react';
import './style/App.css'
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {

    const [todos, setTodos] = useState([]);

    const createTodo = (todo) => {
        setTodos([...todos, todo])
    }

    const removeTodo = (todo) => {
        setTodos(todos.filter(t => t.id !== todo.id))
    }

  return (
    <div className={'app'}>
      <div className={'wrapper'} >
          <header>
              <h1>ToDo List</h1>
          </header>
          <div className={'todoList'} >
              <TodoForm create={createTodo} />
              {
                  todos.length !== 0
                  ? <TodoList todos={todos} remove={removeTodo} />
                  : <h1 style={{marginTop: 20}} >You haven't any todo</h1>
              }
          </div>
      </div>
    </div>
  );
}

export default App;
