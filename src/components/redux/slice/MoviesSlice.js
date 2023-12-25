import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk('fetchData',async(url)=>{
    try {
        const response = await fetch(url,{
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c4eccd9910mshd38a36a1d4e21c3p162e6ejsnebf1908d82f6',
                'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
            }
        })
        const dataJsoned = await response.json()
        return dataJsoned
    } catch (error) {
        console.error(error)
    }
})

const MoviesSlice = createSlice({
    name:'movies',
    initialState:{
        loading:false,
        data:[],
        error:false
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending, (state)=>{
            state.loading = true
        })
        .addCase(fetchData.fulfilled, (state,action)=>{
            state.loading = false 
            state.data = action.payload
        })
        .addCase(fetchData.rejected, (state)=>{
            state.error = true
            state.data = []
        })
    }
    
})

export default MoviesSlice.reducer