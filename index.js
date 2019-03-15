import React from 'react';
import { AppRegistry } from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import App from './App.js';

const store=configureStore();

const RNRedux=()=>(
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent('APP_NAME_HERE', () => App);

// The below line is necessary for use with the TestBed App
AppRegistry.registerComponent('ViroSample', () => RNRedux);