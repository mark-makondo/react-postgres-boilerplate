import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import counterReducer from "../features/counter/counterSlice";
import { authAPI } from "../services/authAPI";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [authAPI.reducerPath]: authAPI.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authAPI.middleware)
});

export const AppDispatch = store.dispatch;
export const RootState = store.getState;
setupListeners(store.dispatch);
