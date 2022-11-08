import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Start from './components/Start';
import Chat from './components/Chat';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  ScrollView
} from 'react-native';

//create the navigator
const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  //alert the user input
  //alertMyText(input = []) {
  //  Alert.alert(input.text);
  //}

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Start'
        >
          <Stack.Screen
            name='Start'
            component={Start}
          />

          <Stack.Screen
            name='Chat'
            component={Chat}
          />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    flexDirection: 'column',
//  },
//});
