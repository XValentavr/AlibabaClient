import { createSlice } from "@reduxjs/toolkit";
import { Enums } from "../../helpers/enums";

const initialState = {
  type: Enums.API
};

const searchTypeSlice = createSlice({
  name: 'type',
  initialState,
  reducers: {
    setType: (state, action) => {
      const { searchType } = action.payload;
      state.searchType = searchType;
    },
  },
})

export const {
  setType
} = searchTypeSlice.actions;

export default searchTypeSlice.reducer;