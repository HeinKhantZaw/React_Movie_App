import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MovieApiContext } from "./context";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";

const MOVIE_API_KEY = atob(
  process.env.MOVIE_API_KEY || "YjY0YjMwZmY4YTE4M2RiZmQ1ODBlY2ZiMDAyMWQ3Y2Q="
);
console.log(MOVIE_API_KEY);
ReactDOM.render(
  <React.StrictMode>
    <MovieApiContext.Provider value={MOVIE_API_KEY}>
      <App />
    </MovieApiContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
