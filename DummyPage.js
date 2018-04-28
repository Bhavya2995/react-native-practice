import React from "react";
import { View, Text, StyleSheet,Button } from "react-native";

export default class DummyPage extends React.Component {
    static navigationOptions = {
        title : 'Dummy'
    }
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{ width: 50, height: 50, backgroundColor: "powderblue" }}
        />
        <View style={{ width: 50, height: 50, backgroundColor: "skyblue" }} />
        <View style={{ width: 50, height: 50, backgroundColor: "steelblue",marginBottom:10 }} />
        <Button
          title="I am Dummy. Click Here"
          onPress={() => this.props.navigation.navigate('Todo')}
        />
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
