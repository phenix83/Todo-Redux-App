import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addTodos } from '../redux/reducer';
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";

const mapStateToProps = (state) => {
    return {
     todos: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
    }
}

const Todos = (props) => {
    const [todo, setTodo] = useState("");
  
    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const add = () => {
        if (todo === " " || todo === undefined) {
            alert("Input is empty");
        } else {
            props.addTodo({
                id: Math.floor(Math.random() * 1000),
                item: todo,
                completed: false,
            });
            setTodo("");
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
    }

    // console.log("props from store", props);
    return (
        <form className="addTodos" onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={(e) => handleChange(e)}
                className="todo-input"
                value={todo}
            />
            <motion.button
                type='submit'
                whileHover={{ scale: 1.1 }}
                whileTap={{scale: 0.9}}
                className="add-btn"
                onClick={() => add()}                
            >
                <GoPlus/>
            </motion.button>
            <br />
        </form>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);