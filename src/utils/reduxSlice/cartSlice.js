import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    itemCount: 0,
    cartTotal: 0,
  },
  reducers: {
    addItem: (state, action) => {
      // console.log(action.payload, 999);

      const itemToAdd = action.payload;

      // Use Array.find() to locate the item
      const existingItem = state.items.find(
        (item) => item.card.info.id === itemToAdd.card.info.id
      );

      if (existingItem) {
        // Update the count of the existing item
        existingItem.quantity += 1;
      } else {
        // Add a new item with a count of 1
        state.items.push({ ...itemToAdd, quantity: 1 });
      }
      state.itemCount += 1;
      // state.itemCount = state.items.reduce(
      //   (total, item) => total + item.quantity,
      //   0
      // );

      state.cartTotal +=
        action.payload.card.info.price || action.payload.card.info.defaultPrice;

      // state.itemCount > 1
      //   ? window.alert(`${state.itemCount} items in the Cart.`)
      //   : window.alert(`${state.itemCount} item in the Cart.`);
    },
    removeItem: (state, action) => {
      const itemToRemove = action.payload;

      // Use Array.find() to locate the item
      const existingItem = state.items.find(
        (item) => item.card.info.id === itemToRemove.card.info.id
      );

      if (existingItem) {
        // Update the count of the existing item
        existingItem.quantity -= 1;
      }

      state.itemCount -= 1;
      state.cartTotal -=
        action.payload.card.info.price || action.payload.card.info.defaultPrice;

      // state.itemCount > 1
      //   ? window.alert(`${state.itemCount} items in the Cart.`)
      //   : window.alert(`${state.itemCount} item in the Cart.`);

      // const itemIndex = state.items.findIndex(
      //   (item) => item.card === action.payload.card
      // );
      // if (itemIndex !== -1) {
      //   const item = state.items[itemIndex];
      //   if (item.quantity > 1) {
      //     item.quantity -= 1;
      //   } else {
      //     state.items.splice(itemIndex, 1); // Remove item entirely if quantity is 0
      //   }
      // }
    },
    clearCart: (state) => {
      return { items: [] };
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
