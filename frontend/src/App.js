import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./Pages/Index";
import NavBar from "./Components/NavBar";
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
              <Index />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
