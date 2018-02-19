import React from 'react'
import {
  View,
} from 'react-native'
import { 
  NativeRouter, 
  Route,
  Switch,
  BackButton
} from 'react-router-native'

import HomeScreen from './HomeScreen'
import GameCode from './GameCode'

export default class App extends React.Component {
  
  render() {
    return (
      <NativeRouter>
        <View style={{ flex: 1 }}>
          <BackButton />
          <Switch>
            <Route exact path="/" component={HomeScreen}/>
            <Route exact path="/game-code" component={GameCode}/>
          </Switch>
        </View>
      </NativeRouter>
    )
  }
}