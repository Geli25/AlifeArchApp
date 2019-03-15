/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  ActivityIndicator,
  Text,
  Dimensions,
  View,
  StyleSheet,
  Image,
  PixelRatio,
  TouchableHighlight,
  
} from 'react-native';

import {
  ViroARSceneNavigator
} from 'react-viro';

import {connect} from 'react-redux';
import {changeReset} from './store/actions/appManagement';

import renderIf from './js/renderIf';

/*
 TODO: Insert your API key below
 */
var sharedProps = {
  apiKey: "apikey",
}

// Sets the default scene you want for AR and VR
var InitialARScene = require('./js/AlifeTest');

var UNSET = "UNSET";
var AR_NAVIGATOR_TYPE = "AR";

// This determines which type of experience to launch in, or UNSET, if the user should
// be presented with a choice of AR or VR. By default, we offer the user a choice.
var defaultNavigatorType = UNSET;

class ViroSample extends Component {
  state={
    navigatorType: defaultNavigatorType,
    openModal:false,
    sharedProps: sharedProps,
  }

  // Replace this function with the contents of _getVRNavigator() or _getARNavigator()
  // if you are building a specific type of experience.
  render() {
    if (this.state.navigatorType == UNSET) {
      return this._getExperienceSelector();
    } else if (this.state.navigatorType == AR_NAVIGATOR_TYPE) {
      return this._getARNavigator();
    }
  }

  componentWillMount(){
    if (this.state.reset===true){
      this.setState({reset:false})
    }
  }

  // Presents the user with a choice of an AR or VR experience
  _getExperienceSelector=()=>{
    return (
      <View style={localStyles.outer} >
        <View style={localStyles.inner} >

          <Text style={localStyles.titleText}>
            Start AR app here:
          </Text>

          <TouchableHighlight style={localStyles.buttons}
            onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
            underlayColor={'#68a0ff'} >

            <Text style={localStyles.buttonText}>AR</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  resetScene = () => {
    this.props.resetChange(true);
  }

  toggleModal=()=>{
    this.setState({
      openModal:!this.state.openModal
    })
  }

  // Returns the ViroARSceneNavigator which will start the AR experience
  _getARNavigator=()=>{
    return (
      <React.Fragment>
        <ViroARSceneNavigator {...this.state.sharedProps}
          style={localStyles.arView}
          initialScene={{ scene: InitialARScene, passProps:{reset:this.state.reset} }} />

          
        {/* Info button on top right */}
        <View  style={{ position: 'absolute', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width:100, height: 100, right:10, top: 10, bottom: 0 }}>
          <TouchableHighlight
            onPress={this.toggleModal}
            underlayColor='#00000000' >
            <Image
              style={{ width: 50, height: 50 }}
              source={require("./js/res/icons/info.png")} />
        </TouchableHighlight>
        </View>

        {/* back button on top left */}
        <View  style={{ position: 'absolute', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 100, height: 100, top: 10, bottom: 0 }}>
            <TouchableHighlight
              onPress={this._exitViro}
              underlayColor='#00000000' >
            <Image 
              style={{ width: 50, height: 50 }}
              source={require("./js/res/icons/Arrow.png")} />
          </TouchableHighlight>
        </View>

        <View style={{ position: 'absolute', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 100, height: 100, right: '45%', bottom: 20 }}>
          <TouchableHighlight
            style={localStyles.buttons}
            onPress={this.resetScene}
            underlayColor={'#68a0ff'} >

            <Text style={localStyles.buttonText}>Reset Session</Text>
          </TouchableHighlight>
        </View>

        {/* Info screen */}
        {this.state.openModal ? <View style={{ 
            opacity: 0.9, 
            position: 'absolute', 
            backgroundColor: 'white', 
            flex: 1, 
            flexDirection: 'row', 
            justifyContent: 'center', 
            alignItems: 'center', 
            width: '85%', 
            height: '75%', 
            top: '10%', 
            left: '7%' }}>
          <Text>Hello</Text>
        </View> : null}
        
      </React.Fragment>
    );
  }


  // This function returns an anonymous/lambda function to be used
  // by the experience selector buttons
  _getExperienceButtonOnPress=(navigatorType)=>{
    return () => {
      this.setState({
        navigatorType : navigatorType
      })
    }
  }

  // This function "exits" Viro by setting the navigatorType to UNSET.
  _exitViro=()=>{
      this.setState({
        navigatorType : UNSET
    })
  }
}

var localStyles = StyleSheet.create({
  viroContainer :{
    flex : 1,
    backgroundColor: "black",
  },
  arView: {
    flex: 1,
  },
  outer : {
    flex : 1,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: "black",
  },
  inner: {
    flex : 1,
    flexDirection: 'column',
    alignItems:'center',
    backgroundColor: "black",
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color:'#fff',
    textAlign:'center',
    fontSize : 25
  },
  buttonText: {
    color:'#fff',
    textAlign:'center',
    fontSize : 20
  },
  buttons : {
    height: 80,
    width: 250,
    paddingTop:20,
    paddingBottom:20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  exitButton : {
    height: 50,
    width: 100,
    paddingTop:10,
    paddingBottom:10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  }
});

const mapStatetoProps = reduxState => {
  return {
    resetState: reduxState.appManagement.resetState
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    resetChange: (bool) => dispatch(changeReset(bool)),
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(ViroSample);
