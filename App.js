/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';


const Example = props => {
  debugger
  return (
    <Button
      title="Click"
      onPress={() => {
        this.count = (this.count || 0) + 1;
        props.setCount(this.count);
      }}
    />
  );
}

export default class App extends React.Component {
  state = {
    count1: 0,
    count2: 0,
  };
  render() {
    debugger;
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Example setCount={count => this.setState({ count1: count })} />
        <Text>{this.state.count1}</Text>
        <Example setCount={count => this.setState({ count2: count })} />
        <Text>{this.state.count2}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
