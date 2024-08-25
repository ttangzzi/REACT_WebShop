import { createSlice } from '@reduxjs/toolkit'
let user = createSlice({ // useState 역할
  name : 'user',
  initialState : { name : 'Kim', age : 20 },
  reducers : {
    changeName(state) {
      state.name = 'Park'
    },
    changeAge(state, action) {
      state.age += action.payload;
    }
  }
})



export let { changeName, changeAge } = user.actions

export default user;