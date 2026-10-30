// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     numOfIcecreams:20
// };

// const iceCreamSlice = createSlice({
//     name:"icecream",
//     initialState,
//     reducers:{
//           icecream_sold: (state,action)=> {state.numOfIcecreams-=action.payload},
//           icecream_stock:(state,action)=>{state.numOfIcecreams+=action.payload}
//     }
// });

//  export default iceCreamSlice.reducer;
//  export const icecreamActions = iceCreamSlice.actions;
//  console.log("icecream slice is ready");



//ExtraReducer ?
// when one reducer depends on state of another reducer then we need to use it.
// Like for each cake buying , we will give us  that no of icecream free.

import { createSlice } from "@reduxjs/toolkit";
import { cakeActions } from "../cake/cakeSlice.js";

const initialState = {
    numOfIcecreams:20
};

const iceCreamSlice = createSlice({
    name:"icecream",
    initialState,
    reducers:{
          icecream_sold: (state,action)=> {state.numOfIcecreams-=action.payload},
          icecream_stock:(state,action)=>{state.numOfIcecreams+=action.payload}
    },
    //This reducer will react whenever any cake got sold out .
    extraReducers:(builder)=>{
        //for each cake one icecream will be provided as free.
         builder.addCase(cakeActions.cake_ordered,(state,action)=>{
              state.numOfIcecreams-= action.payload;
         })
    }
});

 export default iceCreamSlice.reducer;
 export const icecreamActions = iceCreamSlice.actions;
 console.log("icecream slice is ready");
 //Now JUst npm start and verify whether cake and icecreams state are maintained properly or 
 // not by redux toolkit.
