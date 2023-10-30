import { legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { TodoReducer } from "./reducers/TodoReducers";

const reducer = combineReducers({
     Todo: TodoReducer,
});

const initialState = {
    formInput: ''
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)) 
);

export default store;