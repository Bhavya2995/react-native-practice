import React from 'react'
import Todo from './Todo';
import {RootStack} from './router';

export default class App extends React.Component{
    render(){
        return(<RootStack />)
    }
}