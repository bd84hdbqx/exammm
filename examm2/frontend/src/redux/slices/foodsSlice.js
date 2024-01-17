import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"

export const getallFoods = createAsyncThunk(
    'getallFoods',
    async () => {
      const response = await axios("http://localhost:3000/api/foods")
      console.log(response.data)
      return response.data
      
    }
  )
  
const initialState = {
    error:"",
    loading:true,
  food:[]
}

export const foodsSlice = createSlice({
  name: 'foods',
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    //loading
    builder.addCase(getallFoods.pending, (state, action) => {
      state.loading=false
      state.loading=action.payload

    
 
  })
    //datalar ugurla gelir
    builder.addCase(getallFoods.fulfilled, (state, action) => {
        state.food=action.payload
      console.log(action.payload)
      
   
    })
    builder.addCase(getallFoods.rejected, (state, action) => {
      state.loading=false
      state.error=action.payload
    console.log(action.payload)
    
 
  })
  },
})

// Action creators are generated for each case reducer function
export const { } = foodsSlice.actions

export default foodsSlice.reducer