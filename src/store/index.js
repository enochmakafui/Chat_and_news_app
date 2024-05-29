import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = [{ items: [] }];
const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    replaceNewsItem(state, action) {
      state.items = action.payload.data;
    },
  },
});

const store = configureStore({
  reducer: { news: newsSlice.reducer },
});

export const newsActions = newsSlice.actions;
export default store;
