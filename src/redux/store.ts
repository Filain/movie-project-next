import {configureStore} from "@reduxjs/toolkit";
import {themeReducer} from "@/redux/slices/themeSlice";

const store =configureStore({
    reducer:{
        theme:themeReducer
    }
})

export {store}

// Тип для кореневого стану
export type RootState = ReturnType<typeof store.getState>;

// Тип для диспетчера
export type AppDispatch = typeof store.dispatch;