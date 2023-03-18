import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./state";
import Loader from "./components/loader";
import GlobalStyles from "styles/global";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loader title="Loading..." />}>
      <Provider store={store}>
        <GlobalStyles />
        <App />
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
