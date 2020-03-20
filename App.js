import React, { Component } from 'react';
import { View } from 'react-native';

import Map from './src/Map';
import Message from './src/Message';
import AppNavigator from './src/navigations/MainNavigator'

class App extends Component {
  render() {
    return (
      <AppNavigator />
    )
  }
}

export default App;