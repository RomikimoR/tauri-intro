import { createSlice } from '@reduxjs/toolkit'

export const fileContentSlice = createSlice({
  name: 'fileContent',
  initialState: {
    content: ""
  },
  reducers: {
    setContent: (state, action) => {
        console.log(action)
      state.content = action
    }
  }
})

// Action creators are generated for each case reducer function
export const { setContent } = fileContentSlice.actions

export default fileContentSlice.reducer
