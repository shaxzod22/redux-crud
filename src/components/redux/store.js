import { configureStore } from "@reduxjs/toolkit";

import counrtyReducer from './slice/Country'



const rootReducer = {
    news:counrtyReducer
}

const store = configureStore({
    reducer:rootReducer
})

export default store;