import React, { Component } from "react";
import { StackNavigator, TabNavigator,TabBarBottom } from "react-navigation";
import DummyPage from "./DummyPage";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import MyModal from './MyModal';
import Ionicons from "@expo/vector-icons";

export const TabTodo = TabNavigator(
  {
    Dummy : {screen : DummyPage},
    Todo : {screen : Todo}
  },
  {
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
)

export const MainStack = StackNavigator(
  {
    Todo: {
      screen: Todo
    },
    Dummy: {
      screen: TabTodo
    },
    AddTodo: {
      screen: AddTodo
    }
  },

  {
    initialRouteName: "Dummy",
    // for common navigationOptions across screens
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#102951"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  },
);



export const RootStack = StackNavigator(
  {
    Main : {
      screen : MainStack
    },
    MyModal : {
      screen : MyModal
    }
  },
  {
    mode : 'modal',
    headerMode : 'none'
  }

);
