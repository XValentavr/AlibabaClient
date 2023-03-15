import Dropdown from "../UI/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { getSearchTypeSelector } from "../../slices/searchType/searchTypeSelector";
import getAlibabaUrls from "../../handlers/alibabaUrlHandler";
import { getUrls, getUrlsIsLoading } from "../../slices/alibabaUrls/alibabaUrlsSelectors";
import Similarity from "./Similarity";
import { useState } from "react";
import { ASYNC_STATE } from "../../helpers/enums";
import Spinner from "../UI/Spinner";
import Error from "../UI/Error";

const Url = () => {
  const [amazon, setAmazon] = useState('')

  const dispatch = useDispatch()

  const searchType = useSelector(getSearchTypeSelector)
  const urls = useSelector(getUrls)
  const status = useSelector(getUrlsIsLoading)


  if (status === ASYNC_STATE.LOADING) {
    return <Spinner/>
  }

  const getAmazonHandler = event => {
    event.preventDefault()
    const amazonUrl = event.target.url.value
    setAmazon(amazonUrl)
    dispatch(getAlibabaUrls(amazonUrl, searchType))
  }

  return (
    <>
      <form onSubmit={getAmazonHandler}>
        <input type="text" name="url"/>
        <button>Submit</button>
      </form>
      <Dropdown/>
      {status === ASYNC_STATE.FAILED && urls ? <Error/> :
        <Similarity similarity={urls} amazonUrl={amazon}/>}
    </>
  );
}
export default Url