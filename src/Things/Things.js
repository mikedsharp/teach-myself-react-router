import React from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import { Thing } from './Thing';
export function Things() {
  let match = useRouteMatch();
  return (
    <div className="App__container">
      <h1>Stuff and things</h1>
      <Switch>
        <Route path={`${match.path}/:thingId`}>
          <Thing />
        </Route>
        <Route path={`${match.path}`}>
          <h2>Please enter a thing id in the url</h2>
        </Route>
      </Switch>
    </div>
  );
}
