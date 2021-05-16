import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {Planet} from "./pages/Planet";
import {PageNotFound} from "./pages/PageNotFound";
import {People} from "./pages/People";
import {PersonDetails} from "./pages/PersonDetails";

import {GlobalStyles} from "./styles";

function App() {
  return (
    <>
      <GlobalStyles/>
      <Router>
        <Switch>
          <Route path="/" component={People} exact />
          <Route path="/person-details/:name" exact ><PersonDetails/></Route>
          <Route path="/planet/:id" exact ><Planet/></Route>
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
