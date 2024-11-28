import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload, 999);
      // console.log(action.payload.card.info.id);

      // state.items.map((item) => console.log("item: ", current(item)));
      // state.items.length > 0
      //   ? console.log(current(state.items[0].card.info.id))
      //   : console.log("no item");
      // const existingItem = state.items.find((item) => {
      //   item.card.info.id === action.payload.card.info.id;
      // });
      // console.log("existing item: ", existingItem);

      if (state.items.length > 0) {
        for (let item = 0; item < state.items.length; item++) {
          if (Reflect.getPrototypeOf(state.items[item]) == action.payload) {
            console.log("This is executing");
            state.items[item].quantity += 1;
          } else {
            console.log("Pushed inside here");
            state.items.push({ ...action.payload, quantity: 1 });
          }
          break;
        }
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
        console.log("Element is getting pushed here");
      }

      // if (existingItem) {
      //   console.log("This is executing");
      //   existingItem.quantity += 1;
      // } else {
      // state.items.push({ ...action.payload, quantity: 1 });
      // }
    },
    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.card === action.payload.card
      );
      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items.splice(itemIndex, 1); // Remove item entirely if quantity is 0
        }
      }
    },
    clearCart: (state) => {
      return { items: [] };
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
