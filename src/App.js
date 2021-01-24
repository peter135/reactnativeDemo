/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react'
import { Component } from 'react'
import { Router,Scene,Stack} from 'react-native-router-flux'
import { ListPageContainer } from './pages/list.page'
import { DetailPageContainer } from './pages/detail.page'
import { store } from './initData'
import { Provider } from 'react-redux'

export class App extends React.Component {
 
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key="root">
            <Scene key="list" initial={true} component={ListPageContainer} panHandlers={null}/>
            <Scene key="detail" component={DetailPageContainer}/>
          </Stack>
        </Router>
      </Provider>
    );

  }

};
