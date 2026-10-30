// import { configureStore } from "@reduxjs/toolkit";

// import cakeReducer from "../features/cakeSlice.js";
// import icecreamReducer from "../features/iceCreamSlice.js";

// const store = configureStore({
//   reducer: {
//     cake: cakeReducer,
//     icecream: icecreamReducer,
//   },
// });

// export default store;
// console.log("reducer is connected to store & store is ready to operate");
/////////////////////////////////////////////////////////////////////////////////////////////////
//Working with logger middleware
// npm install redux-logger

// Purpose : prompts all state changes .
// No manual console.log is required to track the state transitions.

import { configureStore } from "@reduxjs/toolkit";


 import  cakeReducer  from "../features/cake/cakeSlice.js";
 import icecreamReducer from "../features/icecream/icecreamSlice.js";
 //imporing logger Object from redux-logger.
 import logger from "redux-logger";
 const log = logger.createLogger();
 const store =configureStore({
      reducer:{
        cake:cakeReducer,
        icecream:icecreamReducer   //CombineReducers
      },
      middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(log);
      }
});
export default store;
console.log("reducer is connected to store & store is ready to operate");
