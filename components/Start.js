import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, ImageBackground, TouchableOpacity } from 'react-native';

export default class Start extends React.Component {

  constructor(props) {
    super(props);
    this.state = { name: '', color: '' }
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/Background-Image.png')} style={styles.image} >
          <Text style={styles.title} >Chat App</Text>
          <View style={styles.box} >
            <TextInput
              style={[styles.input, styles.text]}
              onChangeText={(name) => this.setState({ name })}
              value={this.state.name}
              placeholder='Your Name...'
            />
            <View style={styles.colorWrapper} >
              <Text style={[styles.text, styles.label]} >Choose background color</Text>
              <View style={styles.colors} >
                {/* TouchableOpacity instead of Button allows for more style flexibility */}
                {/* onPress sets the color's state to be displayed on the Chat screen */}
                <TouchableOpacity
                  style={[styles.color, styles.colorOne]}
                  onPress={() => this.setState({ color: '#090C08' })}
                />
                <TouchableOpacity
                  style={[styles.color, styles.colorTwo]}
                  onPress={() => this.setState({ color: '#474056' })}
                />
                <TouchableOpacity
                  style={[styles.color, styles.colorThree]}
                  onPress={() => this.setState({ color: '#8A95A5' })}
                />
                <TouchableOpacity
                  style={[styles.color, styles.colorFour]}
                  onPress={() => this.setState({ color: '#B9C6AE' })}
                />
              </View>
            </View>
            <View style={styles.buttonWrapper} >
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate('Chat', { name: this.state.name, color: this.state.color })}
              >
                <Text style={styles.buttonText}>Start Chatting</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },

  title: {
    flex: 1,
    padding: '20%',
    fontSize: 45,
    fontWeight: '600',
    color: '#fff'
  },

  box: {
    width: '88%',
    height: '44%',
    marginBottom: '6%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },

  input: {
    height: 50,
    width: '88%',
    padding: '2%',
    marginTop: '6%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    opacity: 50
  },

  text: {
    color: '#757083',
    fontSize: 16,
    fontWeight: '300',
  },

  colorWrapper: {
    width: '88%',
    height: '60%',
    justifyContent: 'center',
    marginLeft: '6%'
  },

  label: {
    marginBottom: '8%'
  },

  colors: {
    flexDirection: 'row',
    marginBottom: 1
  },

  color: {
    borderRadius: 20,
    width: 40,
    height: 40,
    marginRight: 20
  },

  colorOne: {
    backgroundColor: '#090C08'
  },

  colorTwo: {
    backgroundColor: '#474056'
  },

  colorThree: {
    backgroundColor: '#8A95A5'
  },

  colorFour: {
    backgroundColor: '#B9C6AE'
  },

  buttonWrapper: {
    width: '88%',
    flex: 1,
    marginBottom: '10%'
  },

  button: {
    height: 50,
    width: '100%',
    backgroundColor: '#757083',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2
  },

  buttonText: {
    padding: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#fff'
  }
});