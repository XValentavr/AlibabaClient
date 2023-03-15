import { useEffect, useState } from "react";
import { ASYNC_STATE } from "../../helpers/enums";

const Error = () => {
  const [error, setError] = useState(ASYNC_STATE.FAILED)
  useEffect(() => {
    const timer = setTimeout(() => {
      setError(ASYNC_STATE.SUCCEEDED)
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {error === ASYNC_STATE.FAILED ? <div> Error, no found data</div> :
        <div>Try again</div>}
    </>
  );
}

export default Error