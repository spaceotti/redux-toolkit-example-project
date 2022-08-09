import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Benedek" },
  { id: "1", name: "Pupi" },
  { id: "2", name: "Oti" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
