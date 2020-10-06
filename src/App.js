import React from "react";
import Movie from "./components/Movie";
import "./App.css";
import { Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import Header from "./components/Header";
function App() {
  return (
    <div>
      <Header />
      <Route path="/Movie" exact={true} component={Movie}></Route>
      <Route path="/MovieList" exact={true} component={MovieList}></Route>
    </div>
  );
}

export default App;
