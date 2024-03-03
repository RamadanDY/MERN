import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./User/Pages/Users.jsx";
import NewPlaces from "./Places/Pages/NewPlace.jsx";
import MainNavigation from "./shared/Navigation/MainNavigation.jsx";
// import { Switch } from "@mui/material";

function App() {
  return (
    <>
      <Router>
        <MainNavigation />
        <main>
          <Switch>
            {/* <h1>the name </h1> */}
            <Route path="/" exact={true}>
              <Users />
            </Route>
            <Route path="/places/new" exact={true}>
              <NewPlaces />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
