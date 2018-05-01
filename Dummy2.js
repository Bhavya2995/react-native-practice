import React from "react";
import {
  View,
  StyleSheet,
  ToolbarAndroid,
  Button,
  Slider,
  Switch,
  DrawerLayoutAndroid,
  Text
} from "react-native";
import { DatePickerAndroid } from "react-native";
import { TimePickerAndroid } from "react-native";
import { ToastAndroid } from "react-native";
import { Alert } from "react-native";

export default class Dummy2 extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showToast = this.showToast.bind(this);
  }
  static navigationOptions = {
    title: "Toolbar Example"
  };
  navigationView() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <Text style={{ margin: 10, fontSize: 15, textAlign: "left" }}>
          I'm in the Drawer!
        </Text>
      </View>
    );
  }

  openAlert() {
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  }
  showToast() {
    this.setState({ show: !this.state.show });
  }
  async openDatePicker() {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        // Use `new Date()` for current date.
        // May 25 2020. Month 0 is January.
        date: new Date(2020, 4, 25)
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        // Selected year, month (0-11), day
      }
    } catch ({ code, message }) {
      console.warn("Cannot open date picker", message);
    }
  }
  async openTimePicker() {
    try {
      const { action, hour, minute } = await TimePickerAndroid.open({
        hour: 14,
        minute: 0,
        is24Hour: false // Will display '2 PM'
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        // Selected hour (0-23), minute (0-59)
      }
    } catch ({ code, message }) {
      console.warn("Cannot open time picker", message);
    }
  }
  onActionSelected(position) {}
  render() {
    return (
      <View style={styles.containerToolbar}>
        <DrawerLayoutAndroid
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={this.navigationView}
        >
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={{ margin: 10, fontSize: 15, textAlign: "right" }}>
              Hello
            </Text>
            <Text style={{ margin: 10, fontSize: 15, textAlign: "right" }}>
              World!
            </Text>
          </View>
        </DrawerLayoutAndroid>
        <ToolbarAndroid
          style={styles.toolbar}
          //   navIcon={require("./images/logo.png")}
          title="AwesomeApp"
          titleColor="#fff"
          actions={[
            {
              title: "Settings",
              show: "always"
            }
          ]}
          onActionSelected={this.onActionSelected}
        />
        <View style={styles.button}>
          <Button
            onPress={() => this.openDatePicker()}
            title="Date"
            color="#1674e0"
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => this.openTimePicker()}
            title="TIme"
            color="#1674e0"
          />
        </View>
        <View style={styles.button}>
          <Button onPress={this.openAlert} title="Open Alert" color="#1674e0" />
        </View>
        <View style={styles.button}>
          <Button onPress={this.showToast} title="Show Toast" color="#1674e0" />
        </View>
        {this.state.show &&
          ToastAndroid.show("A pikachu appeared nearby !", ToastAndroid.SHORT)}
        {this.state.show &&
          ToastAndroid.showWithGravity(
            "All Your Base Are Belong To Us",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          )}
        {this.state.show &&
          ToastAndroid.showWithGravityAndOffset(
            "A wild toast appeared!",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            235,
            50
          )}
        <Slider onSlidingComplete={this.openAlert} />
        <Switch
          onValueChange={() => this.showToast()}
          value={this.state.show}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerToolbar: {
    flex: 1,
    //justifyContent: 'center',
    justifyContent: "flex-start",
    // https://github.com/facebook/react-native/issues/2957#event-417214498
    alignItems: "stretch",
    backgroundColor: "#F5FCFF"
  },
  toolbar: {
    backgroundColor: "#2196F3",
    height: 56
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  }
});
