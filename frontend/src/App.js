import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./Pages/Index";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import ShowPage from "./Pages/ShowPage";
import Post from "./Pages/Post";
import Edit from "./Pages/Edit";
import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/movies">
              <Index />
            </Route>
            <Route exact path="/movies/new">
              <Post />
            </Route>
            <Route exact path="/movies/:id">
              <ShowPage />
            </Route>
            <Route exact path="/movies/:id/edit">
              <Edit />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
