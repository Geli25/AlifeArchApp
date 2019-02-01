'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroBox,
  ViroARTrackingTargets,
  ViroARObjectMarker,
  ViroARPlane,
  ViroFlexView,
  ViroARCamera
} from 'react-viro';

import AlifeCard from './AlifeCard.js';

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: "Initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
    ViroARTrackingTargets.createTargets({
      "lion": {
        source: require('./res/lion.arobject'),
        type: 'Object',
      },
      "ox": {
        source: require('./res/ox.arobject'),
        type: 'Object',
      },

    });
  }

  clickText = () => {
    this.setState({ text: "You clicked!" });
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        <ViroARObjectMarker target={"lion"} onAnchorFound={() => {
          this.setState({
            text: "Lion figure"
          })
        }
        }>
          <ViroText
            textClipMode="None"
            text={this.state.text}
            style={styles.textStyle}
          />
          {/* <ViroBox position={[0, .25, 0]} scale={[.25, .25, .25]} /> */}
        </ViroARObjectMarker>
        <ViroARObjectMarker target={"ox"} onAnchorFound={() => {
          this.setState({
            text: "Ox figure"
          })
        }
        }>
          <ViroText
            textClipMode="None"
            scale={[0.5, 0.5, 0.5]}
            text={this.state.text}
            style={styles.textStyle}
          />
          {/* <ViroBox position={[0, .25, 0]} scale={[.25, .25, .25]} /> */}
        </ViroARObjectMarker>

      <AlifeCard />
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
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
  }
});

module.exports = HelloWorldSceneAR;
