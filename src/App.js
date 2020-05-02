import React from "react";
import DisplayInput from "./components/display-inputs";
import InputForm from "./components/input-form";
import Filter from "./components/filter";
import "./App.css";

import {Provider} from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Filter />
        <InputForm />
        <DisplayInput />
      </div>
    </Provider>
  );
}

export default App;
