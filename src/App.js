import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { AddTodoAction, RemoveTodoAction, ClearForm } from './actions/TodoActions';

function App() {
  const [todo, setTodo] = useState();

  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
    dispatch(ClearForm());
    setTodo('');
  };

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>ToDo List App in Redux</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder='Add a task...'
            style={{
              width: 350,
              padding: 10,
              borderRadius: 4,
              border: 'none',
              fontSize: 20
            }}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type='submit'
            style={{
              padding: 10,
              borderRadius: 4,
              border: 'none',
              fontSize: 20,
              marginLeft: 20
            }}
            onClick={() => ClearForm()}
          >
            Add
          </button>
        </form>
        <ul className='allTodos'>
          {
            todos && todos.map((t) => (
              <li key={t.id } className='todoItem'>
                <span className='todoText'>{t.todo}</span>
                <button
                  style={{
                    padding: 10,
                    borderRadius: 4,
                    border: '1px solid white',
                    color: "white",
                    backgroundColor: "orangered",
                    fontSize: 20,
                  }}
                  onClick={() => removeHandler(t)}
                >
                  x
                </button>
              </li>
            ))
          }          
        </ul>
      </header>
    </div>
  );
}

export default App;
