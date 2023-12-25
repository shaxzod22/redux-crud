import { combineReducers, configureStore } from "@reduxjs/toolkit";
import movieReducer from './slice/MoviesSlice'

const rootReducer = combineReducers({
    movies:movieReducer
})

const store = configureStore({
    reducer:rootReducer
})

export default store