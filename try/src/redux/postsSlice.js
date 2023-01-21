import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const getPost = createAsyncThunk("post/getPost", async () => {
      
    const res = await axios("https://jsonplaceholder.typicode.com/posts")
    const data = await res.data
    return data

})

const postSlice = createSlice({
    name: 'post',
    initialState: {
        content:[],
        isLoading:false,
        error:null 
    },
    reducers: {
     
    },
    extraReducers: (builder) => {
      
       
        builder.addCase(getPost.pending, (state,action) => {
               state.isLoading = true
 
        } ),
        builder.addCase(getPost.fulfilled, (state,action) => {
            state.isLoading = false,
            state.content = action.payload        
      }),
        builder.addCase(getPost.rejected, (state,action) => {
            state.isLoading = false,
            state.error = action.error.message

        })
      
      
    },
  })


  export default postSlice.reducer;
