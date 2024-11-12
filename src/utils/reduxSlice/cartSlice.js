import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Vanilla(older) Redux = DON'T MUTATE THE STATE DIRECTLY
      // Earlier in Vanilla Redux, the state could not be muatated dirctly. A newState is created by copying the initial state, the newState is updated and returned. Returning of the newState was mandatory.

      // Redux Toolkit
      // We can and we have to mutate the state. Returning of state is not required.
      // const newState = [...state];
      // newState.items.push(action.payload);
      // return newState;

      // Redus toolkit uses immer.js Behind The Scenes

      // mutating the state here
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    // originalState = ["pizza"]
    clearCart: (state) => {
      // console.log(state);  // ["pizza"]
      // console.log(current(state));
      // state = [];
      // console.log(state);  // []

      // RTK - either Mutate the existing state or return a new State
      // state.items.length = 0; // originalState = []
      return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
