import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  step: 1, // 1: Shipping, 2: Payment, 3: Order Confirmation
  shippingInfo: {
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    state: 'Maharashtra',
  },
  paymentMethod: 'upi', // 'upi', 'cod', 'card'
  orderSummary: null,
  isLoading: false,
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    openCheckout: (state) => {
      state.isOpen = true;
      state.step = 1;
      state.isLoading = false;
    },
    closeCheckout: (state) => {
      state.isOpen = false;
    },
    setCheckoutStep: (state, action) => {
      state.step = action.payload;
    },
    updateShippingInfo: (state, action) => {
      state.shippingInfo = { ...state.shippingInfo, ...action.payload };
    },
    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
    startProcessingOrder: (state) => {
      state.isLoading = true;
    },
    completeOrder: (state, action) => {
      const { items, totalAmount } = action.payload;
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const today = new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });

      state.orderSummary = {
        orderId: `BOL-2026-${randomNum}`,
        totalAmount,
        items,
        date: today,
        paymentMethod: state.paymentMethod.toUpperCase(),
        shippingInfo: { ...state.shippingInfo },
      };
      state.isLoading = false;
      state.step = 3;
    },
    resetCheckout: (state) => {
      state.isOpen = false;
      state.step = 1;
      state.orderSummary = null;
      state.isLoading = false;
    },
  },
});

export const {
  openCheckout,
  closeCheckout,
  setCheckoutStep,
  updateShippingInfo,
  setPaymentMethod,
  startProcessingOrder,
  completeOrder,
  resetCheckout,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
