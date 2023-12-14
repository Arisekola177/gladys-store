import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  productData: [],
  userInfo: null
}

export const gladysSlice  = createSlice({
  name: 'gladys',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find((item) => item.id === action.payload.id);
      if(item){
        item.quantity += action.payload.quantity
      } else{
        state.productData.push(action.payload)
      }
    },

    deleteItem: (state, action) => {
      state.productData = state.productData.filter((item) => item.id !== action.payload);
       
    },

    resetCart: (state) => {
     state.productData = []
    },

    increaseQty: (state, action) => {
      const item = state.productData.find((item) => item.id === action.payload.id);
      if(item) {
        item.quantity ++;
      }
    },
    decreaseQty: (state, action) => {
      const item = state.productData.find((item) => item.id === action.payload.id);
      if(item.quantity === 1){
          item.quantity = 1
      } else {
        item.quantity --;
      }
    },
    addUser: (state, action) => {
      state.userInfo = action.payload
    },
    removeUser: (state) => {
      state.userInfo = null
    }
   
  },

})


export const { addToCart, increaseQty, decreaseQty, resetCart, deleteItem, addUser, removeUser } = gladysSlice.actions

export default gladysSlice.reducer