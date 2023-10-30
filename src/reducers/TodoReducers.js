export const TodoReducer = (state={todos: []}, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {todos: action.payload};

        case "CLEAR_FORM":
            return {
                ...state,
                formInput: ''
            }
            
        case "REMOVE_TODO":
            return {todos: action.payload};
    
        default:
            return state;
    }
}