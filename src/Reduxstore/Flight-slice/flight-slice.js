import { createSlice } from "@reduxjs/toolkit"


const initialState ={
    availableFlights:[],
    bookedFlights:[],
    loading:false,
    error:null,
}

const flightSlice = createSlice({
    name:'flights',
    initialState,
    reducers:{
        addAvailableFlights(state, action){
            
        },
        setBookedFlights(state,action){
            
        },
        setLoading(state, action){

        },
        setError(state, action){
            
        },
        bookedFlights(state, action){

        },
        cancelFlights(state, action){

        }
    }
})

export const FlightsActions = flightSlice.actions
export default flightSlice.reducer;
