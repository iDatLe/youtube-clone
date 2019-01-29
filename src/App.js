import React, { Component } from 'react';
import Home from './containers/Home/Home';
import { Watch } from './containers/Watch/Watch';
import { AppLayout } from './component/AppLayout/AppLayout';
import { Route, Switch } from 'react-router-dom';
import './containers/Home/Home.scss';
import './App.scss';

class App extends Component {
  render() {
    return (
      <AppLayout>
        <Switch>
          <Route path="/watch" component={Watch} />
          <Route path="/" component={Home} />
        </Switch>
      </AppLayout>
    )
  }
}

export default App;