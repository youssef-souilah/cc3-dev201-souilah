import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodos=createAsyncThunk(
    'todos/getTodos',
    async()=>{
        const res=await axios.get(`https://dummyjson.com/todos`);
        return res.data;
    }
);
const TodoSlice=createSlice({
    name:"todo",
    initialState:{
        data:[],
        loading:false,
        error:"",
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getTodos.pending,(state,action)=>{
            if(!state.loading){
                state.loading=true;
            }
        })
        builder.addCase(getTodos.fulfilled,(state,action)=>{
            if(state.loading){
                state.data=action.payload;
                state.loading=false
            }
        })
        builder.addCase(getTodos.rejected,(state,action)=>{
            if(state.loading){
                state.error=action.payload
                state.loading=false;
            }
        })
    }
});
    
export default TodoSlice.reducer;