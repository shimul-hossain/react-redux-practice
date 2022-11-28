import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './slices/loginSlice'
import cartReducer from './slices/cartSlice'
export default configureStore({
    reducer: {
        login : loginReducer,
        cart : cartReducer
    },
  })