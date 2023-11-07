import { configureStore} from "@reduxjs/toolkit"; 
import { reducer } from "./reducers/TodoReducers";

const store = configureStore({
    reducer: reducer
}); 

export default store;