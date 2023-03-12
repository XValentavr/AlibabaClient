import { createSlice } from '@reduxjs/toolkit';
import { ASYNC_STATE } from "../../helpers/enums";
import fetchAlibabaUrls from "./alibabaUrlsThunk/fetchAlibabaUrls";

const initialState = {
  url: {},
  alibabaUrlsLoaded: null
};

const AlibabaUrlsSlice = createSlice({
  name: 'alibabaUrls',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAlibabaUrls.pending]: (state) => {
      state.alibabaUrlsLoaded.status = ASYNC_STATE.LOADING;
    },
    [fetchAlibabaUrls.fulfilled]: (state, action) => {
      state.alibabaUrlsLoaded.status = ASYNC_STATE.SUCCEEDED;
    }
  },
  [fetchAlibabaUrls.rejected]: (state, action) => {
    state.alibabaUrlsLoaded.status = ASYNC_STATE.FAILED;
    state.error = action.error;
  },
});

export default AlibabaUrlsSlice.reducer;
