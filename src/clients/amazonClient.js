import { createGetRequest } from "../helpers/createGetRequest";

class AmazonClient {
  _makeRequest = async (endpoint, { params }) => {
    try {
      let url = 'http://127.0.0.1:5001' + endpoint

      if (params) {
        url = createGetRequest(url, params)
      }

      const response = await fetch(url, {
        method: 'GET',
      });

      let json;

      try {

        json = await response.json();
        return json

      } catch (e) {
        console.log('json error', e)
      }

    } catch (e) {
      console.log('error is', e)
    }
  }


  getAmazonProduct = async (alibabaUrl, searchType) => {
    return this._makeRequest(`/amazon`, {
      params: {
        alibabaUrl,
        searchType
      },
    });
  }
}
export default new AmazonClient();
