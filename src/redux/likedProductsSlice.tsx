import { ProductDetail } from "@/api/api";
import { createSlice } from "@reduxjs/toolkit";
//rootstate is the overall shape of the store
export interface RootState {
  likedProducts: LikedProductsState;
}
// likedproductsstate represents the likedproductsslice, which contains a list of productsdetail[]
interface LikedProductsState {
  list: ProductDetail[];
}
//this is what the redux store looks like
const initialState: LikedProductsState = {
  list: [],
};

const likedProductsSlice = createSlice({
  name: "likedProducts",
  initialState,
  // reducers are how we manipulate the data by adding or removing it
  reducers: {
    // payload is an entire product
    addToLikedList: (state, action: { payload: ProductDetail }) => {
      state.list.push(action.payload);
    },
    //payload is product.id
    removeFromLikedList: (state, action: { payload: number }) => {
      state.list = state.list.filter(
        (product: ProductDetail) => product.id !== action.payload
      );
    },
  },
});

export const { addToLikedList, removeFromLikedList } =
  likedProductsSlice.actions;
export default likedProductsSlice.reducer;
