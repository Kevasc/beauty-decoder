import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const likedProductsSlice = createSlice({
  name: "likedProducts",
  initialState,
  reducers: {
    addToLikedList: (state, action) => {
      state.list.push(action.payload);
    },
    removeFromLikedList: (state, action) => {
      state.list = state.list.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { addToLikedList, removeFromLikedList } =
  likedProductsSlice.actions;
export default likedProductsSlice.reducer;
