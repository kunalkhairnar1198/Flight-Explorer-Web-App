import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    isOpen:false,
    isMobOpen:false,
    isSearchActive:true,
    isOpenBookigs:false,
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
     },
     isSearchFlgihtCardClose(state,action){
          state.isMobOpen = action.payload
     },
     isBookingsCartOpen(state, action){
          state.isOpenBookigs = action.payload
     }

    },
  });


export const UiActions = UiSlice.actions;
export default UiSlice.reducer;