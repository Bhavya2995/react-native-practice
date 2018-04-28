import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import DummyPage from "./DummyPage";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

export const RootStack = StackNavigator(
  {
    Todo: {
      screen: Todo
    },
    Dummy: {
      screen: DummyPage
    },
    AddTodo: {
      screen: AddTodo
    }
  },

  {
    initialRouteName: "Dummy",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#102951"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);
