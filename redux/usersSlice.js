import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  usersCount: 0,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, { type, payload }) => {
      state.users = payload.data;
      state.usersCount = payload.per_page * payload.total_pages;
    },
  },
});

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;
