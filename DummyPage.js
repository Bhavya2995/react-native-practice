import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  StatusBar,
  Picker,
  ActivityIndicator,
  ProgressBarAndroid
} from "react-native";

export default class DummyPage extends React.Component {
  constructor(){
    super();
    this.state = { language:''}
  }
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      title: "Dummy",
      headerRight: (
        <Button
          onPress={() => navigation.navigate("MyModal")}
          title="Click Me"
          color="skyblue"
        />
      )
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="fuchsia" barStyle="light-content" />
        <View
          style={{ width: 50, height: 50, backgroundColor: "powderblue" }}
        />
        <ActivityIndicator size = "large" color = "#fffb4f" />
        <View style={{ width: 50, height: 50, backgroundColor: "skyblue" }} />
        <ActivityIndicator size = "large" color = "#ff163d" />
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: "steelblue",
            marginBottom: 10
          }}
        />
        <ProgressBarAndroid styleAttr = "Horizontal" color = "#42f46b" />
        <Button
          title="I am Dummy. Click Here"
          onPress={() => this.props.navigation.navigate("Todo")}
        />
        <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ language: itemValue })
          }
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="Python" value="py" />
          <Picker.Item label="Ruby" value="ru" />
          <Picker.Item label="C" value="c" />
          <Picker.Item label="C++" value="c" />
          <Picker.Item label="Go" value="go" />
          <Picker.Item label="Haskell" value="hs" />
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="Python" value="py" />
          <Picker.Item label="Ruby" value="ru" />
          <Picker.Item label="C" value="c" />
          <Picker.Item label="C++" value="c" />
          <Picker.Item label="Go" value="go" />
          <Picker.Item label="Haskell" value="hs" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
