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
    },
    addCart(state, action) {
      let haveId = state.find((i)=>{
        if (i.id === action.payload.id) {
          return true
        }
        else {
          return false
        }
      })

      if(!haveId) {
        state.push(
          {
            id : action.payload.id,
            name : action.payload.title,
            count : 1
          }
        )
      }
      console.log(state.length);
    }
  }
})

export let { upCount, addCart } = item.actions

export default item;