import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import checkoutAPI from "apis/checkoutAPI";
import { useDispatch } from "react-redux";
import { CheckoutDetails } from "../models/CheckoutDetails";

const initialState = {
  seatSelected: [],
  checkoutDetails: new CheckoutDetails(),
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addToSeatSelected: (state, action) => {
      let index = state.seatSelected.findIndex(
        (e) => e.maGhe === action.payload.maGhe
      );
      if (index !== -1) {
        state.seatSelected.splice(index, 1);
      } else {
        state.seatSelected.push(action.payload);
      }
    },
    // ticketBookingSlice: (state, action) => {

    //   return async dispatch => {
    //     try {
    //       const result = await checkoutAPI.ticketBooking(state.checkoutDetails)
    //       cl
    //     } catch (error) {

    //     }
    //   };
    // },
  },
});

export const ticketBookingSlice = createAsyncThunk(
  "checkout/bookingSeat",
  async (
    checkoutDetails = new CheckoutDetails(),
    { rejectWithValue, dispatch }
  ) => {
    try {
      await checkoutAPI.ticketBooking(checkoutDetails);
      console.log(checkoutDetails);
      // dispatch(checkoutAPI.getTicketRoom());
      alert("Add Seat SuccessFully");
    } catch (error) {
      alert("Add Seat Failed");
      // console.log(error.response);
      // return rejectWithValue(error.response?.data?.content);
    }
  }
);

export const { addToSeatSelected } = checkoutSlice.actions;

export default checkoutSlice.reducer;
