import { createAsyncThunk } from '@reduxjs/toolkit';
import AmazonClient from "../../../clients/amazonClient";

const fetchAlibabaUrls = createAsyncThunk(
  'urls/fetchAlibabaUrls',
  async ({ amazonUrl, searchType }, { rejectWithValue }) => {
    try {
      const response = await AmazonClient.getAmazonProduct(amazonUrl, searchType);
      return response
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
);

export default fetchAlibabaUrls;
