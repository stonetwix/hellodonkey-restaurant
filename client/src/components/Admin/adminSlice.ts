import { createSlice } from '@reduxjs/toolkit';
import { Order } from '../Admin/AdminOrders';

export const slice = createSlice({
  name: 'admin',
  initialState: {
    orders: [],
  },
  reducers: {
    // fetchOrders: async (state) => {
    //     state.orders = await getOrders();
    // },

    handleMarkAsPickedUpClick: (state, action) => {
      const pickedUpItem = action.payload;
      let orders: Order[] = state.orders;
      (state.orders as Order[]) = orders.map(item => item.id === pickedUpItem ? {...item, isPickedUp: true} : item);
      console.log(state.orders)
      console.log(pickedUpItem)
    }
  },
});

export const { handleMarkAsPickedUpClick } = slice.actions;

//export const getCart = (state: any) => state.cart.cart;

export default slice.reducer;

const getOrders = async () => {
    try {
        let response = await fetch('/api/orders');
        if (response.ok) {
          const data = await response.json();
          return data;
        }
    } catch (error) {
        console.error(error);
    }
}