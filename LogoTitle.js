import React from 'react';
import {Image} from 'react-native';

class LogoTitle extends React.Component {
    render() {
      return (
        <Image
          source={require('./images/logo.png')}
          style={{ width: 40, height: 40 }}
        />
      );
    }
  }
  export default LogoTitle