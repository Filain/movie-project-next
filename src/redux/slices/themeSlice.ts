import {createSlice} from "@reduxjs/toolkit";

export enum ETheme {
    light = 'light',
    dark = 'dark'
}

interface IState {
    theme: ETheme
}

const initialState: IState = {
    theme: ETheme.light

}

const themeSlice= createSlice({
    name:'themeSlice',
    initialState,
    reducers:{
        themeChange:(state,action)=>{
            state.theme=action.payload
        }
    }
})

const {reducer:themeReducer, actions}=themeSlice;
const themeActions={...actions}

export {themeReducer,themeActions}