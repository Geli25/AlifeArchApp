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
import {changeReset,clearDetection} from './store/actions/appManagement';

import renderIf from './js/renderIf';

/*
 TODO: Insert your API key below
 */
var sharedProps = {
  apiKey: "api-key",
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
    startClicked:false
  }

  componentWillMount(){
    if (this.state.startClicked===false){
      this.setState({openModal:true})
    }
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

  // Presents the user with a choice of an AR or VR experience
  _getExperienceSelector=()=>{
    return (
      <View style={localStyles.outer} >
        <View style={localStyles.inner} >

          <Text style={localStyles.titleText}>
            Welcome to the Alife Bestiary
          </Text>

          <Text style={localStyles.bodyText}>
            The purpose of this project is to use the object recognition technology to
            further explain the iconography of the archivolt of Alife. The archivolt of Alife
            is a archivolt to the Alife cathedral, built during the Romanesque Period. Not much record
            was left about it, leaving the exact meaning of the iconography on the archivolt open to
            speculation. Through augmented reality and object recognition, the application provides
            different explanations to ways that a specific animal on the archivolt can be interpreted. 
          </Text>
          <Text style={localStyles.bodyText}>
            The research is always ongoing, and even these interpretations can change, this is
            a reminder that not every information provided by museums is true. 
          </Text>

          <Text style={localStyles.bodyText}>
            Iconography locations:
          </Text>

          <Image source={require('./js/res/scanningSpots.png')} />

          <TouchableHighlight style={localStyles.buttons}
            onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
            underlayColor={'#68a0ff'} >

            <Text style={localStyles.buttonText}>Begin</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  resetScene = () => {
    this.props.resetChange(true);
    this.props.clearDetection();
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

        <View style={{ backgroundColor:'black', opacity:0.75, position: 'absolute', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 550, height: 40, left:'14%', top: 37 }}>
          <Text style={localStyles.bodyText3}>
            {this.props.detected === "lion" 
            ? "Lion: Guardian or Evangelist?" 

            : this.props.detected === "ox"
            ? "Ox: Sacrifice or Reprimand?"

            : this.props.detected === "serpent"
            ? "Serpent: Punishment or Salvation?"

            : this.props.detected === "monster"
            ? "Tailed Monster: Devil or Beast?"

            : this.props.detected === "birds"
            ? "Birds: Doves or Ravens?" 

            : this.props.detected === "horses"
            ? "Ox: 3 Pegasus or the Four Horsemen?"

            : "No iconography detected"}
          </Text>
        </View>

          
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
        {this.state.openModal 
        ? <View style={{ 
            opacity: 0.9, 
            position: 'absolute', 
            backgroundColor: 'white', 
            flex: 1, 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center', 
            width: '85%', 
            height: '75%', 
            top: '10%', 
            left: '7%' }}>
          <Text style={localStyles.titleText2}>Instructions</Text>
          <Text style={localStyles.bodyText2}>
            Please point your devices towards a specific part of the relief and stay still for 5-10 seconds.
          </Text>
          <Text style={localStyles.bodyText2}>
           Once you are finished with one iconography, move on to scan the next 
           directly,tap the "Reset Session" button below to scan a new object.
          </Text>
          <Text style={localStyles.bodyText2}>
            Iconography locations:
          </Text>

          <Image source={require('./js/res/scanningSpots.png')} />
        </View> : null}
        
      </React.Fragment>
    );
  }


  // This function returns an anonymous/lambda function to be used
  // by the experience selector buttons
  _getExperienceButtonOnPress=(navigatorType)=>{
    return () => {
      if (this.state.startClicked === false) {
        this.setState({
          startClicked: true
        });
      }
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
    fontSize : 30
  },
  titleText2: {
    paddingTop: 30,
    paddingBottom: 20,
    color: 'black',
    textAlign: 'center',
    fontSize: 30
  },
  bodyText: {
    padding: 20,
    color: '#fff',
    textAlign: 'center',
    fontSize: 20
  },
  bodyText2: {
    padding: 20,
    color: 'black',
    textAlign: 'center',
    fontSize: 20
  },
  bodyText3: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20
  },
  buttonText: {
    color:'#fff',
    textAlign:'center',
    fontSize : 30
  },
  buttons : {
    height: 80,
    width: 250,
    paddingTop:20,
    paddingBottom:20,
    marginTop: 30,
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
    resetState: reduxState.appManagement.resetState,
    detected:reduxState.appManagement.detected
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    resetChange: (bool) => dispatch(changeReset(bool)),
    clearDetection:()=>dispatch(clearDetection()),
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(ViroSample);
