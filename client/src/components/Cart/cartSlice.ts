import { createSlice } from '@reduxjs/toolkit';
import { CartItem, Food } from '../Takeaway/TakeawayView';

export const slice = createSlice({
  name: 'cart',
  initialState: {
    value: 0,
    cart: [],
    menuItems: [],
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: state => {
      //state.value -= 1;
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
    addToCart: (state, action) => {
      const menuItem: Food = action.payload;
      let cartItems: CartItem[] = state.cart;
      const existingCartItems = cartItems.filter((item: CartItem) => item.menuItem.id === menuItem.id);
      if (existingCartItems.length === 0) {
        const cartItem: CartItem = {menuItem: menuItem, quantity: 1};
        cartItems.push(cartItem);
      } else {
        const cartItem: CartItem = {menuItem: menuItem, quantity: existingCartItems[0].quantity + 1};
        (state.cart as CartItem[]) = cartItems.map((item: CartItem) => item.menuItem.id === menuItem.id ? cartItem : item);
      }
    }
  },
});

export const { increment, decrement, addToCart } = slice.actions;

export const selectCount = (state: any) => state.cart.cart.map((item: CartItem) => item.quantity).reduce((curr: number, acc: number) => curr + acc, 0);

export const getCart = (state: any) => state.cart.cart;

export default slice.reducer;