import { configureStore } from "@reduxjs/toolkit";
import searchTypeActions from "../slices/searchType/searchTypeSlice";
import alibabaUrlsActions from "../slices/alibabaUrls/alibabaUrlsSlice";

const store = configureStore({
  reducer: {
    searchType: searchTypeActions.reducer,
    alibabaUrls: alibabaUrlsActions.reducer,
  }
})
export default store