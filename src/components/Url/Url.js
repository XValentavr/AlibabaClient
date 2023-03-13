import Dropdown from "../UI/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { getSearchTypeSelector } from "../../slices/searchType/searchTypeSelector";
import fetchAlibabaUrls from "../../slices/alibabaUrls/alibabaUrlsThunk/fetchAlibabaUrls";

const Url = () => {
  const dispatch = useDispatch()
  const searchType = useSelector(getSearchTypeSelector)

  const getAmazonHandler = async event => {
    event.preventDefault()
    const alibabaUrl = event.target.url.value
    await dispatch(fetchAlibabaUrls({ alibabaUrl, searchType }))
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