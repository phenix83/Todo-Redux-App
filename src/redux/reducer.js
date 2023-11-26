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
            const removingTodos = state.filter((item) => item.id !== action.payload);
            localStorage.setItem("todo", JSON.stringify(removingTodos));
            return removingTodos;
          },
         //update todos
         updateTodos: (state, action) => {
            const { id, item } = action.payload;
            const updatedTodos = state.map((todo) => {
                if (todo.id === id) {
                return {
                    ...todo,
                    item: item,
                };
                }
                return todo;
            });

            localStorage.setItem("todo", JSON.stringify(updatedTodos));
            return updatedTodos;
         },
         //completed
         completeTodos: (state, action) => {
            const completeTodos = state.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: true,
                    };
                }
                return todo;
            });

            localStorage.setItem("todo", JSON.stringify(completeTodos));
            return completeTodos;
         }
    },
});

export const {addTodos, removeTodos, updateTodos, completeTodos} = addTodoReducer.actions;

export const reducer = addTodoReducer.reducer;