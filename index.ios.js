/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  PickerIOS,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;
var PickerItemIOS = PickerIOS.Item;

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

var ScreenNavigator = require('./ScreenNavigator.js');
var LayoutScreen = require('./LayoutScreen.js');

var globalVariables = require('./globalVariables.js');

var CAR_YEARS = ['2014', '2015', '2016'];
var CAR_MAKES = ['Honda', 'Toyota', 'BMW', 'Mecedes Benz', 'Ford'];

var ReactNativeAccordionPickerIOS = React.createClass({
  getInitialState: function() {
    return {
      tab: 'layout'
    };
  },
  render: function() {
    var  screenElement = (<ScreenNavigator title='Layout' component={LayoutScreen} key='layout' />);
    return (
      <View style={styles.app}>
        {screenElement}
      </View>
    );
  },
});

var styles = StyleSheet.create({
  app: { width, height },
});

AppRegistry.registerComponent('ReactNativeAccordionPickerIOS', () => ReactNativeAccordionPickerIOS);
