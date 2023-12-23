import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchData = createAsyncThunk('fetchData', async (url)=>{
    try {
        const response = await fetch(url)
        const dataJsoned = await response.json()
        return dataJsoned
    } catch (error) {
       alert('Xatolik yuz berdi!')
    }
})

const countrySlice = createSlice({
    name:'data',
    initialState:{
        loading:false,
        data:[],
        error:''
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.loading=false,state.data = action.payload
        })
        builder.addCase(fetchData.rejected,(state,action)=>{
            state.loading = false, state.error = action.payload
        })
    }
    
})

export default countrySlice.reducer