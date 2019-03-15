'use strict';

import React, { Component } from 'react';

import { StyleSheet,View,TouchableHighlight,Text } from 'react-native';

import {
  ViroARScene,
  ViroConstants,
  ViroARTrackingTargets,
  ViroARObjectMarker,
  ViroButton,
  ViroARPlane,
  ViroFlexView,
  ViroARCamera,
  ViroText
} from 'react-viro';

import AlifeCard from './AlifeCard.js';

import { connect } from 'react-redux';
import { changeReset } from '../store/actions/appManagement';

export default class AlifeTest extends Component {

  constructor(props) {
    super(props);

    // Set initial state here
    this.state={
      text:"yo"
    }
    // bind 'this' to functions
    ViroARTrackingTargets.createTargets({
      "lion": {
        source: require('./res/Scans/lion.arobject'),
        type: 'Object',
      },
      "ox": {
        source: require('./res/Scans/ox.arobject'),
        type: 'Object',
      },
    });
  }

  componentDidUpdate(){
    if (this.props.resetState) {
      this.props.arSceneNavigator.resetARSession(true, true);
      this.props.resetChange(false);
    }
  }

  render() {
    return (
      <React.Fragment>
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        {this.props.reset ? ()=>this.props.arSceneNavigator.resetARSession(true, true) : null}
        <ViroARObjectMarker target={"lion"} onAnchorFound={() => {
          this.setState({
            text: "Lion figure"
          })
        }
        }>
          {/* <ViroBox position={[0, .25, 0]} scale={[.25, .25, .25]} /> */}
        </ViroARObjectMarker>
        <ViroARObjectMarker target={"ox"} onAnchorFound={() => {
          this.setState({
            text: "Ox figure"
          })
        }
        }>
        </ViroARObjectMarker>

       <AlifeCard />
      </ViroARScene>
      </React.Fragment>
    );
  }

  _onInitialized=(state, reason)=>{
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: "This is a card"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 50,
    color: '#000000',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  background:{
    backgroundColor:'#ffffff'
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20
  },
  buttons: {
    height: 80,
    width: 250,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
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

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(AlifeTest);

