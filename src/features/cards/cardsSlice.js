import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getRandomUser = createAsyncThunk(
  "cardsSlice/getCardHolder",
  async () => {
    let response = await axios.get("https://randomuser.me/api");
    return response.data;
  }
);

const cardsSlice = createSlice({
  name: "cardsSlice",
  initialState: {
    cards: [],
  },
  reducers: {
    increment: (state, action) => {
      state.cards.push(action.payload);
    },
    setCardNumber: (state, action) => {
      state.cardNumber = action.payload;
    },
    setCardValid: (state, action) => {
      state.valid = action.payload;
    },
    setCardVendor: (state, action) => {
      state.vendor = action.payload;
    },
    setActive: (state, action) => {
      const cardIndex = action.payload; // Assuming you're passing the card index as payload
      state.cards = state.cards.map((card, i) => ({
        ...card,
        active: i === cardIndex, // Set active to true only for the clicked card
      }));
    },
    deleteCard: (state, action) => {
      state.cards = state.cards.filter((card, i) => i !== action.payload)
    }
  },
  extraReducers: {
    [getRandomUser.fulfilled]: (state, action) => {
      const { first, last } = action.payload.results[0].name;
      state.cards.push({
        cardHolder: `${first.toUpperCase()} ${last.toUpperCase()}`,
        cardNumber: "1234 5678 9101 1213",
        valid: "11/23",
        ccv: 111,
        vendor: "nordea",
        active: true,
      });
    },
  },
});

export default cardsSlice.reducer;

export const { increment, setCardNumber, setCardValid, setCardVendor, setActive, deleteCard } =
  cardsSlice.actions;
  