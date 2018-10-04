/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    let items = [{key:'0'},{key:'1'},{key:'2'},{key:'3'},{key:'4'},{key:'5'},{key:'6'},{key:'7'},{key:'8'},{key:'9'}];
    return (
      <View>
        <ScrollView style={{height: 100}}>
          {
            items.slice(0, 10).map((item, index) => (
              <View style={{marginTop: '1%'}}>
                <View><Text>{index}. Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</Text></View>
              </View>
            ))
          }
        </ScrollView>
      </View>
    );
  }
}

