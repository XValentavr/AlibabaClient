import Dropdown from "../UI/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { getSearchTypeSelector } from "../../slices/searchType/searchTypeSelector";
import getAlibabaUrls from "../../handlers/alibabaUrlHandler";
import { getUrls } from "../../slices/alibabaUrls/alibabaUrlsSelectors";

const Url = () => {
  const dispatch = useDispatch()
  const searchType = useSelector(getSearchTypeSelector)
  const urls = useSelector(getUrls)
  const getAmazonHandler = event => {
    event.preventDefault()
    const amazonUrl = event.target.url.value
    dispatch(getAlibabaUrls(amazonUrl, searchType))
  }

  return (
    <>
      <form onSubmit={getAmazonHandler}>
        <input type="text" name="url"/>
        <button>Submit</button>
      </form>
      <Dropdown/>
    </>
  );
}
export default Url