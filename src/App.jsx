import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Main from "./pages/main.jsx";
import SignIn from "./pages/sign-in.jsx";
import Room from "./pages/room.jsx";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/login" component={SignIn}/>
        <Route path="/offer/:id" component={Room}/>
      </Switch>
    </Router>
  );
}

export default App;
