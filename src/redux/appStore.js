import { configureStore } from "@reduxjs/toolkit";
import songReducer from "../redux/songSlice";
import authReducer from "../redux/authSlice";

const store = configureStore({
  reducer: {
    songs: songReducer,
    auth: authReducer
  },
});

export default store
