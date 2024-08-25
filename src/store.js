import { createSlice } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'

let user = createSlice({ // useState 역할
  name : 'user',
  initialState : 'Kim'
})

let stock = createSlice({ // useState 역할
  name : 'stock',
  initialState : [10, 20, 30]
})

export default configureStore({
  reducer: {
    // 여기에 등록해야 사용 가능하다
    user : user.reducer,
    stock : stock.reducer
  }
})