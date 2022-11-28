import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    user_id: null,
  },
  reducers: {
    setUserId: (state, action) => {  
      state.user_id = action.payload
    },
  },
})
 
export const { setUserId } = loginSlice.actions

export default loginSlice.reducer