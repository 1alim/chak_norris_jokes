import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchJoke = createAsyncThunk(
  "pizza/fetchPizzasStatus",
  async () => {
    const { data } = await axios.get("https://api.chucknorris.io/jokes/random");
    console.log(data.value);
    return data;
  }
);

const initialState = {
  joke: "",
  jokesList: [],
};

const jokeSlice = createSlice({
  name: "joke",
  initialState,
  reducers: {
    setJokesList(state, action) {
      state.jokesList = action.payload
      console.log(state.jokesList);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchJoke.fulfilled, (state, action) => {
      state.joke = action.payload.value;
    });
  },
});

export const { setJokesList } = jokeSlice.actions;

export default jokeSlice.reducer;
