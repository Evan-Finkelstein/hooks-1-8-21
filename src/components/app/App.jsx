import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import List from '../../containers/List';
import Details from '../../containers/Details';

export default function App() {
  return (<Router>
    <Switch>
      <Route exact path="/" component={List} />
      <Route path="/date/:day" component={Details} />
    </Switch>
  </Router>);
}
