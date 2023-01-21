import React, { useEffect, useState } from "react";
import "./App.css";
import { useSelector,useDispatch } from "react-redux";
import { getPost } from "./redux/postsSlice";

function App  ()  {
  
   
   const dispatch = useDispatch()

   
   useEffect(() => {

    dispatch(getPost())
  },[dispatch])


   const data = useSelector((state) => (state.post.content))

   const isLoading = useSelector((state) => (state.post.isLoading))

   const error = useSelector((state) => (state.post.error))

   console.log(data)

        if (isLoading) {
          return "loading"
        } 
        if(error) {

          return "error"
        }



    
   




  return (
    
    <div className="App">
   {
    data.map((data) => (

      <p>{data.title}</p>
    )
        
    )
   }
    </div>
   
    
  );
}

export default App;
