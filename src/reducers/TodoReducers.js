import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
    name: "todos",
    initialState,
    reducers: {
         addTodos: (state, action) => {
            state.push(action.payload);
            return state;
         },
         removeTodos: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
         },
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
    },
});

export const {addTodos, removeTodos, updateTodos} = addTodoReducer.actions;

export const reducer = addTodoReducer.reducer;

 
// export const TodoReducer = (state={todos: []}, action) => {
//     switch (action.type) {
//         case "ADD_TODO":
//             return {todos: action.payload};
            
//         case "REMOVE_TODO":
//             return {todos: action.payload};

//         case "UPDATE_TODO":
//             return {todos: action.payload};
    
//         default:
//             return state;
//     }
// }