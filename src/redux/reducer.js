import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("todo")) || [];

const addTodoReducer = createSlice({
    name: "todos",
    initialState,
    reducers: {
        //here we will write our reducer
        //adding todos
         addTodos: (state, action) => {
            const todosFromeStorage = JSON.parse(localStorage.getItem("todo")) || [];
            todosFromeStorage.push(action.payload);
            localStorage.setItem("todo", JSON.stringify(todosFromeStorage));
            state.push(action.payload);
            return state;
         },
         //remove todos
         removeTodos: (state, action) => {
            const todosFromeStorage = JSON.parse(localStorage.getItem("todo"));
            todosFromeStorage.push(action.payload);
            localStorage.removeItem("todo");
            return state.filter((item) => item.id !== action.payload);
         },
         //update todos
         updateTodos: (state, action) => {
            return state.map( todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        item: action.payload.item,
                    };
                }
                return todo;
            });
         },
         //completed
         completeTodos: (state, action) => {
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: true,
                    };
                }
                return todo;
            });
         }
    },
});

export const {addTodos, removeTodos, updateTodos, completeTodos} = addTodoReducer.actions;

export const reducer = addTodoReducer.reducer;