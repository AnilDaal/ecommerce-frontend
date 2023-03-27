import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlistItems: JSON.parse(localStorage.getItem("wishlistItems")) || [],
    wishlistTotalQuantity:
      JSON.parse(localStorage.getItem("wishlistTotalQuantity")) || 0,
    wishlistTotalAmount:
      JSON.parse(localStorage.getItem("wishlistTotalAmount")) || 0,
  },
  reducers: {
    addTowishlist(state, action) {
      state.wishlistTotalQuantity++;
      const itemIndex = state.wishlistItems.findIndex(
        (p) => p.ID === action.payload.ID
      );
      if (itemIndex >= 0) {
        state.wishlistItems[itemIndex].wishlistQuantity += 1;
        // state.wishlistTotalAmount += state.wishlistItems[itemIndex]['Regular price'];
        toast.info(`increased ${action.payload.Name} wishlist quantity`, {
          position: "top-right",
        });
      } else {
        const tempProduct = { ...action.payload, wishlistQuantity: 1 };
        state.wishlistItems.push(tempProduct);
        // state.wishlistTotalAmount += action.payload['Regular price'];
        toast.success(`${action.payload.Name} added to wishlist`, {
          position: "top-right",
        });
      }

      localStorage.setItem(
        "wishlistItems",
        JSON.stringify(state.wishlistItems)
      );
      localStorage.setItem(
        "wishlistTotalQuantity",
        JSON.stringify(state.wishlistTotalQuantity)
      );
      // localStorage.setItem(
      //   'wishlistTotalAmount',
      //   JSON.stringify(state.wishlistTotalAmount)
      // );
    },
    resetwishlist(state, action) {
      state.wishlistItems = [];
      localStorage.removeItem("wishlistItems");
      state.wishlistTotalQuantity = 0;
      state.wishlistTotalAmount = 0;
      toast.error(`wishlist cleared`, {
        position: "bottom-left",
      });
      localStorage.setItem(
        "wishlistTotalQuantity",
        JSON.stringify(state.wishlistTotalQuantity)
      );
      // localStorage.setItem(
      //   'wishlistTotalAmount',
      //   JSON.stringify(state.wishlistTotalAmount)
      // );
    },
    incrementwishlist(state, action) {
      const foundProductIndex = state.wishlistItems.findIndex(
        (p) => p.ID === action.payload.ID
      );
      state.wishlistItems[foundProductIndex].wishlistQuantity += 1;
      // state.wishlistTotalAmount +=
      //   state.wishlistItems[foundProductIndex]['Regular price'];
      state.wishlistTotalQuantity += 1;

      localStorage.setItem(
        "wishlistItems",
        JSON.stringify(state.wishlistItems)
      );
      localStorage.setItem(
        "wishlistTotalQuantity",
        JSON.stringify(state.wishlistTotalQuantity)
      );
      localStorage.setItem(
        "wishlistTotalAmount",
        JSON.stringify(state.wishlistTotalAmount)
      );
    },
    decrementwishlist(state, action) {
      const foundProductIndex = state.wishlistItems.findIndex(
        (p) => p.ID === action.payload.ID
      );
      if (state.wishlistItems[foundProductIndex].wishlistQuantity > 1) {
        state.wishlistTotalQuantity--;
        state.wishlistItems[foundProductIndex].wishlistQuantity -= 1;
        state.wishlistTotalAmount -=
          state.wishlistItems[foundProductIndex]["Regular price"];
        localStorage.setItem(
          "wishlistItems",
          JSON.stringify(state.wishlistItems)
        );
        localStorage.setItem(
          "wishlistTotalQuantity",
          JSON.stringify(state.wishlistTotalQuantity)
        );
        // localStorage.setItem(
        //   'wishlistTotalAmount',
        //   JSON.stringify(state.wishlistTotalAmount)
        // );
      }
    },
    removewishlist(state, action) {
      const filterArray = state.wishlistItems.filter(
        (p) => p.ID !== action.payload.ID
      );
      state.wishlistItems = filterArray;
      let sum = 0;
      let quantity = 0;
      state.wishlistItems.map((p) => {
        sum += p["Regular price"];
        quantity += p.wishlistQuantity;
      });
      state.wishlistTotalAmount = sum;
      state.wishlistTotalQuantity = quantity;
      localStorage.setItem(
        "wishlistItems",
        JSON.stringify(state.wishlistItems)
      );
      // localStorage.setItem(
      //   'wishlistTotalAmount',
      //   JSON.stringify(state.wishlistTotalAmount)
      // );
      localStorage.setItem(
        "wishlistTotalQuantity",
        JSON.stringify(state.wishlistTotalQuantity)
      );
      toast.error(`${action.payload.Name} removed from  wishlist`, {
        position: "bottom-left",
      });
    },
    getTotals(state, action) {
      // const a = state.wishlistItems.map((p) => {
      //   state.wishlistTotalAmount += p.price * p.wishlistQuantity;
      //   state.wishlistTotalQuantity += p.wishlistQuantity;
      //   return { x: state.wishlistTotalAmount, y: wishlistTotalQuantity };
      // });

      // state.wishlistTotalAmount = a[-1].x;
      // state.wishlistTotalQuantity = a[-1].y;
      // state.wishlistTotalAmount = wishlistTotalAmount;
      // state.wishlistTotalQuantity = wishlistQuantity;
      // state.wishlistItems.reduce(
      //   (wishlistTotal, wishlistItem) => {
      //     const { price, wishlistQuantity } = wishlistItem;
      //     const itemTotal = price * wishlistQuantity;
      //     wishlistTotal.total += itemTotal;
      //     wishlistTotal.quantity += wishlistQuantity;
      //   },
      //   { total: 0, quantity: 0 }
      // );

      let sum = 0;
      const totalPrice = state.wishlistItems.map((item) => {
        sum += item.wishlistQuantity * item["Regular price"];
      });
      state.wishlistTotalAmount = sum;
      localStorage.setItem("wishlistTotalAmount", JSON.stringify(sum));
    },
  },
});
export const {
  addTowishlist,
  resetwishlist,
  incrementwishlist,
  decrementwishlist,
  removewishlist,
  getTotals,
} = wishlistSlice.actions;

export const wishlistReducer = wishlistSlice.reducer;
