import { configureStore } from '@reduxjs/toolkit'
import fileContentReducer from './content-file-slice'

export default configureStore({
  reducer: {
      fileContent: fileContentReducer
  }
})