import Url from "./components/Url/Url";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Url/>
    </Provider>
  );
}

export default App;
