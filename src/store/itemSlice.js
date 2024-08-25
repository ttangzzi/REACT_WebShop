import { createSlice } from '@reduxjs/toolkit'
let item = createSlice({
  name : 'item',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers : {
    upCount(state, action) {
      let searchCount = state.find((i)=>{ 
        return i.id === action.payload
      })
      searchCount.count += 1;
    }
  }
})

export let { upCount } = item.actions

export default item;