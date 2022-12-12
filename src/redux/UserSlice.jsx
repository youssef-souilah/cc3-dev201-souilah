import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers=createAsyncThunk(
    'users/getUsers',
    async()=>{
        const res=await axios.get('https://dummyjson.com/users');
        return res.data;
    }
);
const UserSlice=createSlice({
    name:"user",
    initialState:{
        data:[],
        loading:false,
        error:"",
        user:null
    },
    reducers:{
        setUserid:(state,action)=>{
            state.user=action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getUsers.pending,(state,action)=>{
            if(!state.loading){
                state.loading=true;
            }
        })
        builder.addCase(getUsers.fulfilled,(state,action)=>{
                state.data=action.payload;
                state.loading=false;
            
        })
        builder.addCase(getUsers.rejected,(state,action)=>{
            if(state.loading){
                state.error=action.payload
                state.loading=false;
            }
        })
    }
});
    export const {setUserid} =UserSlice.actions
export default UserSlice.reducer;