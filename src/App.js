import React from "react";
import { Provider } from "react-redux";
import store from "./Components/Redux/store";
import Comments from "./Components/Comments/Comments";

function App() {
  return (
    <Provider store={store}>
      <Comments />
    </Provider>
  );
}

export default App;
