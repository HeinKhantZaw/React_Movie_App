import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MovieApiContext } from "./context";
import "./css/bootstrap.min.css";
import Header from "./components/header"

const MOVIE_API_KEY = atob(
  process.env.MOVIE_API_KEY || "YjY0YjMwZmY4YTE4M2RiZmQ1ODBlY2ZiMDAyMWQ3Y2Q="
);
ReactDOM.render(
  <React.StrictMode>
    <MovieApiContext.Provider value={MOVIE_API_KEY}>
      <Header />
      <App />
    </MovieApiContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
