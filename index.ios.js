/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Collapsible = require('Collapsible');
var {
  AppRegistry,
  PickerIOS,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;
var PickerItemIOS = PickerIOS.Item;

var CAR_YEARS = ['2014', '2015', '2016'];
var CAR_MAKES = ['Honda', 'Toyota', 'BMW', 'Mecedes Benz', 'Ford'];

var ReactNativeAccordionPickerIOS = React.createClass({
  getInitialState: function() {
    return {
      activeAccordion: false,
      year: '2015',
      make: 'Honda',
    };
  },
  _toggleAccordion: function(accordion) {
    this.setState({
      activeAccordion: this.state.activeAccordion === accordion ? false : accordion,
    });
  },
  render: function() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this._toggleAccordion('first')}>
          <Text style={styles.title}>Year {this.state.year}</Text>
        </TouchableHighlight>
        <Collapsible collapsed={this.state.activeAccordion !== 'first'}>
          <PickerIOS
            selectedValue={this.state.year}
            onValueChange={(year) => this.setState({year})}>
            {CAR_YEARS.map((year, yearIndex) => (
              <PickerItemIOS
                key={year}
                value={year}
                label={year}
                />
              )
            )}
          </PickerIOS>
        </Collapsible>
        <TouchableHighlight onPress={() => this._toggleAccordion('make')}>
          <Text style={styles.title}>Make {this.state.make}</Text>
        </TouchableHighlight>
        <Collapsible collapsed={this.state.activeAccordion !== 'make'}>
          <PickerIOS
            selectedValue={this.state.make}
            onValueChange={(make) => this.setState({make})}>
            {CAR_MAKES.map((make, makeIndex) => (
              <PickerItemIOS
                key={make}
                value={make}
                label={make}
                />
              )
            )}
          </PickerIOS>
        </Collapsible>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 60,
    marginLeft: 10,
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeAccordionPickerIOS', () => ReactNativeAccordionPickerIOS);
