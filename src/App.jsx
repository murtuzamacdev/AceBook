import "../src/Assets/common.css";
import Navbar from "./Components/Navbar";
import Layout from "./Layout";
import Home from "./Pages/Home";
import routes from "./routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider,useSelector } from "react-redux";
import store from "./store/reducer";
import appStore from "./store/appStore";
import ErrorBoundary from "./Components/ErrorBoundary";
import ErrorMessage from "./Components/ErrorMessage";
import { StarRateTwoTone } from "@mui/icons-material";


function App() {
  
  return (
    <div className="App">
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <Provider store={appStore}>
          <ErrorMessage/>
          <BrowserRouter>
            <Routes>
              {routes?.map((e) =>
                e.route === "common" ? (
                  <Route
                    exact
                    path={e.path}
                    element={<Layout component={<e.component />} />}
                  />
                ) : (
                  <Route exact path={e.path} element={<e.component />} />
                )
              )}
            </Routes>
          </BrowserRouter>
        </Provider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
