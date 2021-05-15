import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {HomeWorld} from "./HomeWorld";
import {PageNotFound} from "./PageNotFound/";
import {People} from "./People";
import {PersonDetails} from "./PersonDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={People} exact />
        <Route path="/person_details"><PersonDetails/></Route>
        <Route path="/home_world"><HomeWorld/></Route>
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
