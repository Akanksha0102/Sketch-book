import { createSlice } from "@reduxjs/toolkit";
import {COLORS, MENU_ITEMS} from '@/constants';

const initialState={
    [MENU_ITEMS.PENCIL]:{
        color: COLORS.BLACK,
        size:3
    },
    [MENU_ITEMS.ERASER]:{
        color: COLORS.WHITE,
        size:8
    },
    [MENU_ITEMS.UNDO]:{},
    [MENU_ITEMS.REDO]:{},
    [MENU_ITEMS.DOWNLOAD]:{}

}
export const tooboxSlice = createSlice({
    name:'toolbox',
    initialState,
    reducers: {
        changeColor :(state,action) =>{
            state[action.payload.item].color=action.payload.color
        },
        changebrushSize:(state,action) =>{
            state[action.payload.item].size=action.payload.size
        }
    }
})
export const {changeColor,  changebrushSize} = tooboxSlice.actions
export default tooboxSlice.reducer