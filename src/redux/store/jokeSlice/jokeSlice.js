import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// {"categories":[],
// "created_at":"2020-01-05 13:42:28.420821",
// "icon_url":"https://assets.chucknorris.host/img/avatar/chuck-norris.png" ,
// "id":"qF4sP7baTbSxXd5oPGkfvQ","updated_at":"2020-01-05 13:42:28.420821",
// "url":"https://api.chucknorris.io/jokes/qF4sP7baTbSxXd5oPGkfvQ",
// "value": «Чак Норрис застрелил шерифа И его помощника».}

// type AsyncType = {
//   categories: string[];
//   created_at: string;
//   icon_url: string;
//   id: string;
//   url: string;
//   value: string;
// };

export const fetchJoke = createAsyncThunk(
  "pizza/fetchPizzasStatus",
  async () => {
    const { data } = await axios.get("https://api.chucknorris.io/jokes/random");
    console.log(data.value);
    return data;
  }
);

// export interface JokeItem {
//   id: number;
//   joke: string;
// }

// export interface JokeState {
//   joke: string;
//   jokesList: JokeItem[];
// }

const initialState = {
  joke: "",
  jokesList: [],
};

const jokeSlice = createSlice({
  name: "joke",
  initialState,
  reducers: {
    setJokesList(state, action) {
      state.jokesList = action.payload;
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
