import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";

export const getMovies = createAsyncThunk(async (_, { rejectWithValue }) => {
  try {
    const data = await movieAPI.getMovies();
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const initialState = {
  movies: getMovies,
  nowShowing: false,
  comingSoon: false,
  moviesDedault: [],
};
const movieShowingSlice = createSlice({
  name: "movieShowing",
  initialState,
  reducers: {
    movieShowingDefault: (state, action) => {
      state.movies = action.movies;
      state.moviesDedault = state.movies;
    },
    movieNowShowing: (state, action) => {
      state.nowShowing = !state.nowShowing;
      console.log("state.movies", action);
      state.movies = state.moviesDedault.filter(
        (movie) => movie.dangChieu === state.nowShowing
      );
    },
    movieComingSoon: (state, action) => {
      state.comingSoon = !state.comingSoon;

      state.movies = state.moviesDedault.filter(
        (movie) => movie.sapChieu === state.comingSoon
      );
    },
  },
});

export const { movieShowingDefault, movieNowShowing, movieComingSoon } =
  movieShowingSlice.actions;

export default movieShowingSlice.reducer;
