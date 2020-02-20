import React, { useRef } from "react";
import NavBar from "./components/navbar";
import Search from "./components/Search";
import MoviesList from "./components/Movies-List";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieDetail from "./components/MovieDetail";

function App() {
  const moviesListRef = useRef();
  const HandleSearch = title => {
    moviesListRef.current.get_movies(title);
  };
  return (
    <Router>
      <div className="App">
        <div className="bg-dark text-white">
          <NavBar />
        </div>
        <div className="container">
          <Switch>
            <Route path="/:id" component={MovieDetail} />
            <Route path="/">
              <Search submit={HandleSearch} />
              <MoviesList ref={moviesListRef} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
