
import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name : 'cart',
    initialState: {
        items : [], 
    }, 
    reducers : {
        updateCart : (state, action) => { 
            let item = state.items.find(item => item.id === action.payload)
            if(item){ 
                item.quantity += 1;
            }else{ 
                state.items.push({id: action.payload, quantity :1})
            }
        },
        removeCartItem : (state, action) => {
            let item = state.items.find(item => item.id === action.payload);
            state.items.splice(state.items.indexOf(item), 1);
        }
    }
})

export const {updateCart, removeCartItem}  = cartSlice.actions;

export default cartSlice.reducer