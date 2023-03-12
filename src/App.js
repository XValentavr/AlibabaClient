import './App.css';
import Url from "./components/Url/Url";
import { store } from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Url/>
    </Provider>
  );
}

export default App;
