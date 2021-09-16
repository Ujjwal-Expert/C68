import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import BookTransactionSreen from './screens/BookTransactionScreen';
import SearchSreen from './screens/SearchScreen';

export default class App extends React.Component{
  render(){
    return(
      <View>
        <AppContainer/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const TabNavigator = createBottomTabNavigator({
  transaction:{screen:BookTransactionSreen},
  search:{screen:SearchSreen}
})

const AppContainer = createAppContainer(TabNavigator);