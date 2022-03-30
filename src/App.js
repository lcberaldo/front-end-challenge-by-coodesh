import React from "react";
import { BrowserRouter } from "react-router-dom";

import { DataProvider } from "./context/appContext";
import Routes from "./routes";
import GlobalStyle from "./styles/global";

const App = () => (
  <>
    <BrowserRouter>
      <DataProvider>
        <Routes />
      </DataProvider>
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
