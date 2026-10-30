

import { createSlice } from "@reduxjs/toolkit";

//DefaultState
const initialState = {
      numOfCakes:10
};

//Slicer
const cakeSlice = createSlice({
      name:"cake",
      initialState,
     //reducer function
      reducers:{
        //when user ordered then cake quantitiy decreases.
        cake_ordered:(state,action)=>{
              state.numOfCakes-=action.payload;
             
             
        },
        //when cake restocked , cake quantity increases.
        cake_stocked:(state,action)=>{
              state.numOfCakes+=action.payload;
               
        }
      }
});

export default cakeSlice.reducer;
export const cakeActions = cakeSlice.actions;

console.log("cakeSlice is working");
