import { configureStore } from '@reduxjs/toolkit';
import authSlice from 'modules/Authentication/slices/authSlice';
import checkoutSlice from 'modules/Checkout/slices/checkoutSlice';
import movieShowingSlice from 'modules/Home/slices/movieShowingSlice';
import movieListSlice from 'modules/Admin/Home/slices/movieListSlice';
import userSlice from 'modules/Admin/Home/slices/userSlice';
const store = configureStore({
  reducer: {
    auth: authSlice,
    checkout: checkoutSlice,
    movieShowing: movieShowingSlice,
    movieList: movieListSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
