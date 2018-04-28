import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default class ListItem extends React.Component {
  render() {
    return (
      <View style={styles.listItem}>
        <Text style = {styles.listItemText}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    padding: 20,
    borderStyle : 'solid',
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  listItemText:{
    fontSize : 20
  }
});
