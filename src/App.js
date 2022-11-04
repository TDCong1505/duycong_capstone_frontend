import { Provider } from "react-redux"; 
import Home from "./pages/Home/Home";
import configureStore, { history } from './redux/store';
import 'antd/dist/antd.css';

export const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <Home></Home>
    </Provider>
  );
}

export default App;
