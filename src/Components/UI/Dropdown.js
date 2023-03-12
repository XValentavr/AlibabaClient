import { useCallback, useState } from "react";
import { Enums } from "../../helpers/enums";
import { useDispatch } from "react-redux";
import { setType } from "../../slices/searchType/searchTypeSlice";

const Dropdown = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const changeSearchType = useCallback(event => {

    const searchType = event.target.value
    dispatch(setType({ searchType }));
  }, [dispatch])

  return (
    <div className="dropdown">
      <button onClick={handleOpen}>Dropdown</button>
      {open && (
        <ul className="menu">
          <li className="menu-item">
            <button value={Enums.API} onClick={changeSearchType}>{Enums.API}</button>
          </li>
          <li className="menu-item">
            <button value={Enums.PARSE} onClick={changeSearchType}>{Enums.PARSE}</button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown