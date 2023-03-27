import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
    cartTotalQuantity:
      JSON.parse(localStorage.getItem('cartTotalQuantity')) || 0,
    cartTotalAmount: JSON.parse(localStorage.getItem('cartTotalAmount')) || 0,
  },
  reducers: {
    addToCart(state, action) {
      state.cartTotalQuantity++;
      const itemIndex = state.cartItems.findIndex(
        (p) => p._id === action.payload._id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        // state.cartTotalAmount += state.cartItems[itemIndex]['Regular price'];
        toast.info(`increased ${action.payload.title} cart quantity`, {
          position: 'top-right',
        });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        // state.cartTotalAmount += action.payload['Regular price'];
        toast.success(`${action.payload.title} added to cart`, {
          position: 'top-right',
        });
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      localStorage.setItem(
        'cartTotalQuantity',
        JSON.stringify(state.cartTotalQuantity)
      );
      // localStorage.setItem(
      //   'cartTotalAmount',
      //   JSON.stringify(state.cartTotalAmount)
      // );
    },
    resetCart(state, action) {
      state.cartItems = [];
      localStorage.removeItem('cartItems');
      state.cartTotalQuantity = 0;
      state.cartTotalAmount = 0;
      toast.error(`cart cleared`, {
        position: 'bottom-left',
      });
      localStorage.setItem(
        'cartTotalQuantity',
        JSON.stringify(state.cartTotalQuantity)
      );
      // localStorage.setItem(
      //   'cartTotalAmount',
      //   JSON.stringify(state.cartTotalAmount)
      // );
    },
    incrementCart(state, action) {
      const foundProductIndex = state.cartItems.findIndex(
        (p) => p._id === action.payload._id
      );
      state.cartItems[foundProductIndex].cartQuantity += 1;
      // state.cartTotalAmount +=
      //   state.cartItems[foundProductIndex]['Regular price'];
      state.cartTotalQuantity += 1;

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      localStorage.setItem(
        'cartTotalQuantity',
        JSON.stringify(state.cartTotalQuantity)
      );
      localStorage.setItem(
        'cartTotalAmount',
        JSON.stringify(state.cartTotalAmount)
      );
    },
    decrementCart(state, action) {
      const foundProductIndex = state.cartItems.findIndex(
        (p) => p._id === action.payload._id
      );
      if (state.cartItems[foundProductIndex].cartQuantity > 1) {
        state.cartTotalQuantity--;
        state.cartItems[foundProductIndex].cartQuantity -= 1;
        state.cartTotalAmount -= state.cartItems[foundProductIndex]['price'];
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        localStorage.setItem(
          'cartTotalQuantity',
          JSON.stringify(state.cartTotalQuantity)
        );
        // localStorage.setItem(
        //   'cartTotalAmount',
        //   JSON.stringify(state.cartTotalAmount)
        // );
      }
    },
    removeCart(state, action) {
      const filterArray = state.cartItems.filter(
        (p) => p._id !== action.payload._id
      );
      state.cartItems = filterArray;
      let sum = 0;
      let quantity = 0;
      state.cartItems.map((p) => {
        sum += p['price'];
        quantity += p.cartQuantity;
      });
      state.cartTotalAmount = sum;
      state.cartTotalQuantity = quantity;
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      // localStorage.setItem(
      //   'cartTotalAmount',
      //   JSON.stringify(state.cartTotalAmount)
      // );
      localStorage.setItem(
        'cartTotalQuantity',
        JSON.stringify(state.cartTotalQuantity)
      );
      toast.error(`${action.payload.title} removed from  cart`, {
        position: 'bottom-left',
      });
    },
    getTotals(state, action) {
      // const a = state.cartItems.map((p) => {
      //   state.cartTotalAmount += p.price * p.cartQuantity;
      //   state.cartTotalQuantity += p.cartQuantity;
      //   return { x: state.cartTotalAmount, y: cartTotalQuantity };
      // });

      // state.cartTotalAmount = a[-1].x;
      // state.cartTotalQuantity = a[-1].y;
      // state.cartTotalAmount = cartTotalAmount;
      // state.cartTotalQuantity = cartQuantity;
      // state.cartItems.reduce(
      //   (cartTotal, cartItem) => {
      //     const { price, cartQuantity } = cartItem;
      //     const itemTotal = price * cartQuantity;
      //     cartTotal.total += itemTotal;
      //     cartTotal.quantity += cartQuantity;
      //   },
      //   { total: 0, quantity: 0 }
      // );

      let sum = 0;
      const totalPrice = state.cartItems.map((item) => {
        sum += item.cartQuantity * item['price'];
      });
      state.cartTotalAmount = sum;
      localStorage.setItem('cartTotalAmount', JSON.stringify(sum));
    },
  },
});
export const {
  addToCart,
  resetCart,
  incrementCart,
  decrementCart,
  removeCart,
  getTotals,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
