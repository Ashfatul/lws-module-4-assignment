import { Provider } from "react-redux";
import Header from "./components/Header";
import Home from "./components/Home";
import "./styles/style.css";
import store from "./redux/store";
function App() {
   return (
      <Provider store={store}>
         <Header />
         <Home />
      </Provider>
   );
}

export default App;
