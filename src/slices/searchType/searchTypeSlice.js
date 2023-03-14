import { createSlice } from "@reduxjs/toolkit";
import { Enums } from "../../helpers/enums";

const initialState = {
  type: Enums.API
};

const searchType = createSlice({
  name: 'type',
  initialState,
  reducers: {
    setType: (state, action) => {
      const { searchType } = action.payload;
      state.type = searchType;
    },
  },
})

export const searchTypeActions = searchType.actions
export default searchType