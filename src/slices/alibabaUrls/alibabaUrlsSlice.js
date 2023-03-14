import { createSlice } from "@reduxjs/toolkit";
import { ASYNC_STATE } from "../../helpers/enums";
import fetchAlibabaUrls from "./alibabaUrlsThunk/fetchAlibabaUrls";

const alibabaUrlsSlice = createSlice({
  name: "urls",
  initialState: {
    urls: null,
    status: null,
    error: null
  },
  extraReducers: {
    [fetchAlibabaUrls.pending]: (state) => {
      state.status = ASYNC_STATE.LOADING
      state.error = null;
    },
    [fetchAlibabaUrls.fulfilled]: (state, action) => {
      state.urls = action.payload
      state.status = ASYNC_STATE.SUCCEEDED
      state.error = null
    },
    [fetchAlibabaUrls.rejected]: (state, action) => {
      state.status = ASYNC_STATE.FAILED
      state.error = action.error;
    },
  }
});

export const alibabaUrlsActions = alibabaUrlsSlice.actions
export default alibabaUrlsSlice