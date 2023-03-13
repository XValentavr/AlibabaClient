import { createAsyncThunk } from '@reduxjs/toolkit';
import AmazonClient from "../../../clients/amazonClient";

const fetchAlibabaUrls = createAsyncThunk(
  'urls/fetch',
  async ({ alibabaUrl, searchType  }) => {
    console.log('search_type', searchType)
    const product = await AmazonClient.getAmazonProduct(alibabaUrl, searchType);
    if (product) {
      return product
    }
  }
);

export default fetchAlibabaUrls;
