import React from 'react';
import JoinRoomPage from './JoinRoomPage';
import CreateRoomPage from './CreateRoomPage';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

const HomePage = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <p>This is the home page</p>
        </Route>
        <Route path="/join" component={JoinRoomPage} />
        <Route path="/create" component={CreateRoomPage} />
      </Switch>
    </Router>
  );
};

export default HomePage;
