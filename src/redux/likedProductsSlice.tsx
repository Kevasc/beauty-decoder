import { ProductDetail } from "@/api/api";
import { createSlice } from "@reduxjs/toolkit";
//this is what the redux store looks like
const initialState = {
  list: [],
};

const likedProductsSlice = createSlice({
  name: "likedProducts",
  initialState,
  // reducers are how we manipulate the data by adding or removing it
  reducers: {
    addToLikedList: (state, action) => {
      state.list.push(action.payload);
    },
    removeFromLikedList: (state, action) => {
      state.list = state.list.filter(
        (product: ProductDetail) => product.id !== action.payload
      );
    },
  },
});

export const { addToLikedList, removeFromLikedList } =
  likedProductsSlice.actions;
export default likedProductsSlice.reducer;
