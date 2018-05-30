import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reduxThunk from 'redux-thunk';
import { YellowBox } from 'react-native';
import reducers from './reducers';
import Router from './Router';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyBGo_vQcgOQVNpNxIAuFk-yK-Fl88br1No',
      authDomain: 'manager-11c82.firebaseapp.com',
      databaseURL: 'https://manager-11c82.firebaseio.com',
      projectId: 'manager-11c82',
      storageBucket: 'manager-11c82.appspot.com',
      messagingSenderId: '490430968235'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
