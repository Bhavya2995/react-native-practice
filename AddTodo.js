import React from "react";
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet
} from "react-native";
import { Button } from "react-native";
import LogoTitle from "./LogoTitle";
export default class AddTodo extends React.Component {
  constructor() {
    super();
    this.textInput = React.createRef();
    this.state = { text: "" };
  }
  static navigationOptions = ({navigation,navigationOptions})=> {
      const {params} = navigation.state;
      return {
          title : params.title ? params.title : "Add Something",
        // title : <LogoTitle /> 
        // Logo as component
        //   headerStyle: {
        //     backgroundColor: navigationOptions.headerTintColor,
        //   },
        //   headerTintColor: navigationOptions.headerStyle.backgroundColor,
        // to override parent
        }
      }
  
  _onChangeText = text => this.setState({ text });

  render() {
    const { params } = this.props.navigation.state;
    return (
      <KeyboardAvoidingView behavior="padding" enabled>
        {params.header}
        <View style={styles.textInput}>
          <TextInput
            placeholder="Add a new todo"
            selectionColor="#6396e8"
            underlineColorAndroid="#6396e8"
            ref={this.textInput}
            value={this.state.text}
            onChangeText={this._onChangeText}
          />
        </View>
        <Button
          onPress={() => {
            params.handleAddTodo(this.state.text);
            this.textInput.current.clear();
            this.textInput.current.blur();
          }}
          title="Submit"
          color="#4fa4ff"
          accessibilityLabel="Submit button"
        />
        <View style = {styles.button} >
        <Button
          onPress={() => {
            this.props.navigation.setParams({title:"Add Todo"})
          }}
          title="Update Title"
          color="#4fa4ff"
          accessibilityLabel="Update Title"
        />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    margin: 20
  },
  button : {
      justifyContent : "center",
      alignItems : "center",
      marginTop : 20
  }
});
