import { createAsyncThunk } from '@reduxjs/toolkit';
import AmazonClient from "../../../clients/amazonClient";
import { ExceptionsNoData } from "../../../helpers/Exceptions";

const fetchAlibabaUrls = createAsyncThunk(
    'urls/fetchAlibabaUrls',
    async ({ amazonUrl, searchType }, { rejectWithValue }) => {
      const response = await AmazonClient.getAmazonProduct(amazonUrl, searchType);
      if (response) {
        return response
      }
      return rejectWithValue(ExceptionsNoData)
    }
  );

export default fetchAlibabaUrls;
