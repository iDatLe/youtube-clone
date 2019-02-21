import React, { useEffect } from 'react';
import Home from './containers/Home/Home';
import { Watch } from './containers/Watch/Watch';
import { AppLayout } from './component/AppLayout/AppLayout';
import { Route, Switch } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { youtubeLibraryLoaded } from './store/actions/api';
import './containers/Home/Home.scss';
import './App.scss';
import { API_KEY } from '../configuration.js';

function App() {

  useEffect(() => {
    loadYoutubeApi();
  })

  const loadYoutubeApi = () => {
    const script = document.createElement('script');
    script.src ='https://apis.google.com/js/client.js';

    script.onload = () => {
      window.gapi.load('client', () => {
        window.gapi.client.setApiKey(API_KEY);
        window.gapi.client.load('youtube', 'v3', () => {
          youtubeLibraryLoaded();
        });
      });
    };
    document.body.appendChild(script);
    // All this is to load up the youtube lilbrary the moment app is mounted
  }

  return (
    <AppLayout>
      <Switch>
        <Route path="/watch" component={Watch} />
        <Route path="/" component={Home} />
      </Switch>
    </AppLayout>
  )
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({youtubeLibraryLoaded}, dispatch);
}

export default connect(null, mapDispatchToProps)(App);