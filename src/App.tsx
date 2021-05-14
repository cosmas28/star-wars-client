import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {PageNotFound} from "./PageNotFound/";
import {People} from "./People";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={People} exact />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
