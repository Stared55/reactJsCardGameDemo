import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomeScreen, LeaderBoardScreen } from 'src/screens';
import { GameScreen } from 'src/screens/GameScreen';

export const RootNavigator: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>
        <Route path="/leader-board">
          <LeaderBoardScreen />
        </Route>
        <Route path="/game/:name">
          <GameScreen />
        </Route>
      </Switch>
    </Router>
  );
};
