import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Chat extends React.Component {

  componentDidMount() {
    {/* Sets the name typed in the Start screen to be displayed at the top of the Chat screen */ }
    let name = this.props.route.params.name;
    this.props.navigation.setOptions({ title: name });
  }

  render() {
    {/* Sets the background color selected on the Start screen */ }
    let color = this.props.route.params.color;

    return (
      <View style={[{ backgroundColor: color }, styles.container]}>
        <Text style={styles.textColor} >Hello Chat!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textColor: {
    color: '#fff'
  }
})