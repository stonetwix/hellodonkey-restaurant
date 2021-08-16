import { createSlice } from '@reduxjs/toolkit';
import { Order } from '../Admin/AdminOrders';

const initialOrders = [{
  id: "123134324368",
  menuItem: "Cemitas",
  quantity: 2,
  created: "2021-09-10 17:45",
  isPickedUp: false
},
{
  id: "123134324369",
  menuItem: "Big Tacos",
  quantity: 3,
  created: "2021-09-10 17:45",
  isPickedUp: false
},
{
  id: "123134324360",
  menuItem: "Nachos",
  quantity: 1,
  created: "2021-09-10 17:45",
  isPickedUp: false
}];

export const slice = createSlice({
  name: 'admin',
  initialState: {
    orders: initialOrders,
  },
  reducers: {
    // fetchOrders: async (state) => {
    //     state.orders = await getOrders();
    // },

    handleMarkAsPickedUpClick: (state, action) => {
      const pickedUpItem = action.payload;
      state.orders = state.orders.map(item => item.id === pickedUpItem ? {...item, isPickedUp: true} : item);
      console.log(state.orders)
      console.log(pickedUpItem)
    }
  },
});

export const { handleMarkAsPickedUpClick } = slice.actions;

export const getOrders = (state: any) => state.admin.orders;

export default slice.reducer;