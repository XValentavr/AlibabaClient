import fetchAlibabaUrls from "../slices/alibabaUrls/alibabaUrlsThunk/fetchAlibabaUrls";

const getAlibabaUrls = (amazonUrl, searchType) => async (dispatch) => {
  await dispatch(fetchAlibabaUrls({ amazonUrl, searchType }))
}

export default getAlibabaUrls;