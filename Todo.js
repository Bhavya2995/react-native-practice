import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SectionList,
  Button,
  ScrollView
} from "react-native";
import {
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback
} from "react-native";
import ListItem from "./ListItem";
import AddTodo from "./AddTodo";
import Expo from "expo";

export default class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          userId: 1,
          id: 1,
          title: "delectus aut autem"
        },
        {
          userId: 1,
          id: 2,
          title: "quis ut nam facilis et officia qui"
        },
        {
          userId: 1,
          id: 3,
          title: "fugiat veniam minus"
        },
        {
          userId: 1,
          id: 4,
          title: "et porro tempora"
        },
        {
          userId: 1,
          id: 5,
          title:
            "laboriosam mollitia et enim quasi adipisci quia provident illum"
        },
        {
          userId: 1,
          id: 6,
          title: "qui ullam ratione quibusdam voluptatem quia omnis"
        }
      ],
      done: [
        {
          userId: 3,
          id: 55,
          title:
            "voluptatum omnis minima qui occaecati provident nulla voluptatem ratione"
        },
        {
          userId: 3,
          id: 56,
          title: "deleniti ea temporibus enim"
        },
        {
          userId: 3,
          id: 57,
          title:
            "pariatur et magnam ea doloribus similique voluptatem rerum quia"
        },
        {
          userId: 3,
          id: 58,
          title: "est dicta totam qui explicabo doloribus qui dignissimos"
        },
        {
          userId: 3,
          id: 59,
          title: "perspiciatis velit id laborum placeat iusto et aliquam odio"
        },
        {
          userId: 3,
          id: 60,
          title: "et sequi qui architecto ut adipisci"
        },
        {
          userId: 4,
          id: 61,
          title: "odit optio omnis qui sunt"
        }
      ],
      text: ""
    };
  }
  static navigationOptions = {
    title: 'TodoList'
  }
  renderHeader(heading) {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{heading}</Text>
      </View>
    );
  }
  _keyExtractor = (item, index) => index.toString();

  handleAddTodo = todo => {
    this.setState({ todos: [...this.state.todos, { title: todo}] });
  };

  _onPress() {
    return;
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={this.renderHeader("Todo")}
          data={this.state.todos}
          renderItem={({ item }) => (
            <TouchableNativeFeedback
              onPress={this._onPress}
              useForeground={true}
              background={TouchableNativeFeedback.Ripple("#b6d0f9", false)}
            >
              <View>
                <ListItem title={item.title} />
              </View>
            </TouchableNativeFeedback>
          )}
          stickyHeaderIndices={[0]}
          keyExtractor={this._keyExtractor}
        />
        <FlatList
          ListHeaderComponent={this.renderHeader("Done")}
          data={this.state.done}
          renderItem={({ item }) => <ListItem title={item.title} />}
          stickyHeaderIndices={[0]}
          keyExtractor={this._keyExtractor}
        />
        {/* <SectionList
          sections={[
            {title: 'Todo', data: this.state.data},
            {title: 'Done', data: this.state.data},
          ]}
          renderItem={({item}) => <ListItem title = {item.title} />}
          renderSectionHeader={({section}) => this.renderHeader(section.title)}
          keyExtractor={(item, index) => index}
          stickySectionHeadersEnabled={true}
        /> */}

        <Button
          title="Go to Add Todo"
          onPress={() =>
            this.props.navigation.navigate("AddTodo", {
              handleAddTodo: this.handleAddTodo,
              header: this.renderHeader("AddTodo"),
            })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop: Expo.Constants.statusBarHeight
  },
  header: {
    backgroundColor: "#6396e8",
    width: "100%",
    height: 40,
    paddingLeft: 10
  },
  headerText: {
    color: "#fff",
    fontSize: 30
  }
});
