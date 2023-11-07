import { useRef, useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { addTodos, removeTodos } from './reducers/TodoReducers';

const mapStateToProps = (state) => {
   return {
    todos: state,
   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
  }
}

function App(props) {
  const [todo, setTodo] = useState('');

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  }

  // const dispatch = useDispatch();
  // const Todo = useSelector((state) => state.Todo);
  // const { todos } = Todo;
  
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  console.log('props from store', props);  

  // const removeHandler = (t) => {
  //   dispatch(RemoveTodoAction(t));
  // }

  return (
    <div className="App">
      <header className="App-header">
        <h2>What should you do?</h2>
        <form onSubmit={handleChange}>
          <input
            placeholder='Add a task...'
            style={{
              width: 350,
              padding: 10,
              borderRadius: 4,
              border: 'none',
              fontSize: 20
            }}
            // value={todo}
            onChange={(e) => handleChange(e)}
          />
          <button
            // type='submit'
            style={{
              padding: 10,
              borderRadius: 4,
              border: 'none',
              fontSize: 20,
              marginLeft: 20
            }}
            onClick={() => props.addTodo({
              id: Math.floor(Math.random()*1000),
              item: todo,
              completed: false,
            })}
          >
            Add
          </button>
        </form>
        <br/>
        
        <ul className='allTodos'>
          {
            props.todos.map((item) => {
              return <li key={item.id }>
                  <textarea ref={inputRef} disabled={inputRef}
                  defaultValue={item.item}/>
                  <button onClick={() => {changeFocus()}}>Edit</button>
                  <button onClick={() => props.removeTodo(item.id)}>
                    Delete
                  </button>
                </li>
            })
          }          
        </ul>
      </header>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);