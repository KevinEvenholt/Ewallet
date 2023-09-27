import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "../features/cards/cardsSlice";

const store = configureStore({
  reducer: {
    cards: cardsSlice
  },
});

export default store;