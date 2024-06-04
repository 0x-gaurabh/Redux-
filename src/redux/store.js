import { configureStore } from "@reduxjs/toolkit";
import  movieReducers from './movie/movieSlice'

 export const store =configureStore({
    reducer:{
        movies: movieReducers,
    }
 })