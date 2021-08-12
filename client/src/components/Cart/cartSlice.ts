import { createSlice } from '@reduxjs/toolkit';
import { CartItem, MenuItem } from '../Takeaway/TakeawayView';

export const slice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    menuItems: [],
    orders: [],
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      //state.value += 1;
    },
    addToCart: (state, action) => {
      const menuItem: MenuItem = action.payload;
      let cartItems: CartItem[] = state.cart;
      const existingCartItems = cartItems.filter((item: CartItem) => item.menuItem.id === menuItem.id);
      if (existingCartItems.length === 0) {
        const cartItem: CartItem = {menuItem: menuItem, quantity: 1};
        cartItems.push(cartItem);
      } else {
        const cartItem: CartItem = {menuItem: menuItem, quantity: existingCartItems[0].quantity + 1};
        (state.cart as CartItem[]) = cartItems.map((item: CartItem) => item.menuItem.id === menuItem.id ? cartItem : item);
      }
    },
    changeCartItemQuantity: (state, action) => {
      const { menuItemId, quantity } = action.payload;
      let cartItems: CartItem[] = state.cart;
      (state.cart as CartItem[]) = cartItems.map((item: CartItem) => item.menuItem.id === menuItemId ? {...item, quantity: quantity} : item);
    },
    deleteCartItem: (state, action) => {
      const menuItemId = action.payload;
      let cartItems: CartItem[] = state.cart;
      (state.cart as CartItem[]) = cartItems.filter((item: CartItem) => item.menuItem.id !== menuItemId);
    },
  },
});

export const { increment, addToCart, changeCartItemQuantity, deleteCartItem } = slice.actions;

export const badgeCount = (state: any) => state.cart.cart.map((item: CartItem) => item.quantity).reduce((curr: number, acc: number) => curr + acc, 0);

export const getCart = (state: any) => state.cart.cart;

export const getTotalPrice = (state: any) => state.cart.cart.map((item: CartItem) => (item.menuItem.price * item.quantity)).reduce((curr: number, acc: number) => curr + acc, 0);

export default slice.reducer;