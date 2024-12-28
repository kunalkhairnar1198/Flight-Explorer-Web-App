import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth-slice/auth-slice.";
import uiReducer from "./Ui-slice/ui-slice";


const store = configureStore({
    reducer:{
        auth: authReducer,
        ui: uiReducer,
    }
})

export default store;