import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {Planet} from "./Planet";
import {PageNotFound} from "./PageNotFound/";
import {People} from "./People";
import {PersonDetails} from "./PersonDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={People} exact />
        <Route path="/person-details/:name"><PersonDetails/></Route>
        <Route path="/planet"><Planet/></Route>
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
