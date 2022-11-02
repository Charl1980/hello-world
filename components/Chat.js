import React from 'react';
import { StyleSheet, View, Text, Platform, KeyboardAvoidingView } from 'react-native';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';

//Import functions from SDKs
const firebase = require('firebase');
require('firebase/firestore');

export default class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      uid: 0,
      user: {
        _id: '',
        name: '',
        avatar: '',
      },
    };

    //Set up Firebase
    const firebaseConfig = {
      apiKey: "AIzaSyBzijO5iafmIJ6iED0JodQt3Fw9ooLsPJM",
      authDomain: "chat-app-1bb9e.firebaseapp.com",
      projectId: "chat-app-1bb9e",
      storageBucket: "chat-app-1bb9e.appspot.com",
      messagingSenderId: "470601175876",
      appId: "1:470601175876:web:affa41aca67d3bf812bd11"
    }

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  //Retrieve collection data & store in messages
  onCollectionUpdate = (querySnapshot) => {
    const messages = [];
    //go through each document
    querySnapshot.forEach((doc) => {
      //get the QueryDocumentSnapshot's data
      let data = doc.data();
      messages.push({
        _id: data._id,
        text: data.text,
        createdAt: data.createdAt.toDate(),
        user: {
          _id: data.user._id,
          name: data.user.name,
          avatar: data.user.avatar,
        },
      });
    });
    this.setState({
      messages,
    });
  };

  componentDidMount() {
    this.referenceChatMessages = firebase.firestore().collection("messages");
    {/* Sets the messages state */ }
    this.authUnsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
      //update user state with currently active user data
      this.setState({
        uid: user.uid,
        messages: [],
        user: {
          _id: user.uid,
          //name: name,
        },
      });

      // listen for collection changes for current user
      this.unsubscribe = this.referenceChatMessages
        .orderBy('createdAt', 'desc')
        .onSnapshot(this.onCollectionUpdate);
    });
  }

  componentWillUnmount() {
    // stop listening to authentication
    this.authUnsubscribe();
    // stop listening for changes
    this.unsubscribe();
  }

  // add a new list to the collection
  addMessages() {
    const message = this.state.messages[0];
    this.referenceChatMessages.add({
      uid: this.state.uid,
      _id: message._id,
      text: message.text,
      createdAt: message.createdAt,
      user: message.user,
    });
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }), () => {
      this.addMessages(this.state.messages[0]);
    });
  }

  renderBubble(props) {
    {/* Sets the colour of the renderBubble */ }
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#000',
          },
        }}
      />
    );
  }

  render() {
    {/* Sets the name typed in the Start screen to be displayed at the top of the Chat screen */ }
    let name = this.props.route.params.name;
    this.props.navigation.setOptions({ title: name });

    {/* Sets the background color selected on the Start screen */ }
    let color = this.props.route.params.color;

    return (
      <View style={[{ backgroundColor: color }, { flex: 1 }]}>
        <GiftedChat
          renderBubble={this.renderBubble.bind(this)}
          messages={this.state.messages}
          onSend={(messages) => this.onSend(messages)}
          user={{
            _id: this.state.user._id,
          }}
        />
        {/* Fixes the issue of the keyboard covering the input field on some Android devices */}
        {Platform.OS === 'android' ? <KeyboardAvoidingView behavior='height' /> : null}
      </View>
    );
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
