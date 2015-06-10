/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
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

var Collapsible = require('Collapsible');
var PriceRangePicker = require('./components/PriceRangePicker.js');
var globalVariables = require('./globalVariables.js');

var CAR_YEARS = ['2014', '2015', '2016'];
var CAR_MAKES = ['Honda', 'Toyota', 'BMW', 'Mecedes Benz', 'Ford'];

var LayoutScreen = React.createClass({
  getInitialState: function() {
    return {
      activeAccordion: false,
      year: '2015',
      make: 'Honda',
      priceRange: [300, 800],
    };
  },
  _toggleAccordion: function(accordion) {
    this.setState({
      activeAccordion: this.state.activeAccordion === accordion ? false : accordion,
    });
  },
  render: function() {
    return (
      <ScrollView style={[styles.container]}>
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
        <TouchableHighlight onPress={() => this._toggleAccordion('yearandmake')}>
          <Text style={styles.title}>Year/Make {this.state.make}/{this.state.year}</Text>
        </TouchableHighlight>
        <Collapsible collapsed={this.state.activeAccordion !== 'yearandmake'}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
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
            </View>
            <View style={{flex: 1}}>
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
            </View>
          </View>
        </Collapsible>

        <Text style={[styles.text, styles.header]}>
            flex的元素上放一个View，不设置宽度
        </Text> 

        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <View style={{height: 20, backgroundColor: '#333333'}} />
          </View>
          <View style={{flex: 1}}/>
        </View>
        <View style={styles.page}>
          <PriceRangePicker value={this.state.priceRange} onChange={this.saveQueryOptions} />
        </View>
      </ScrollView>
    );
  },
  saveQueryOptions: function(key, value) {
    // console.log('saveQueryOptions', key, value);
    var temp = {};
    temp[key] = value;
    this.setState(temp);
  },
});

var styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 15,
    backgroundColor: globalVariables.background
  },
  
  page: {
    paddingBottom: 50
  },
  innerBox: {
    flex: 1,
    width: 50,

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
  content: {
    flexDirection: 'row',
    // padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

module.exports = LayoutScreen;
