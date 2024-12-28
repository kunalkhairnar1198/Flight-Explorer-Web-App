import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    isOpen:false,
    isMobOpen:false,
}

const UiSlice = createSlice({
    name: 'ui',
    initialState, 
    reducers: {
     isOpenHandle(state, action){
          state.isOpen = action.payload  
     },
     isOpenMobileHanlde(state, action){
          state.isMobOpen = !state.isMobOpen
     }
    },
  });


export const UiActions = UiSlice.actions;
export default UiSlice.reducer;