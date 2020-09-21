import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { applicationsReducer } from "../reducer/applicationsReducer"


const configureStore=()=>{
    const store=createStore(combineReducers({
        applications:applicationsReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore 
