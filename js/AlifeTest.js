'use strict';

import React, { Component } from 'react';

import { StyleSheet,View,TouchableHighlight,Text } from 'react-native';

import {
  ViroARScene,
  ViroConstants,
  ViroARTrackingTargets,
  ViroARObjectMarker,
  ViroImage,
  ViroARPlane,
  ViroARCamera,
  ViroSound
} from 'react-viro';

import AlifeCard from './AlifeCard.js';

import { connect } from 'react-redux';
import { changeReset,updateDetection } from '../store/actions/appManagement';

export default class AlifeTest extends Component {

  constructor(props) {
    super(props);

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
      "serpent": {
        source: require('./res/Scans/serpent.arobject'),
        type: 'Object',
      },
      "monster": {
        source: require('./res/Scans/monster.arobject'),
        type: 'Object',
      },
      "horses": {
        source: require('./res/Scans/horse.arobject'),
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
        {!this.props.detected||this.props.detected==="lion" 
          ? 
          <ViroARObjectMarker target={"lion"} onAnchorFound={() => {
            this.props.updateDetection("lion");
          }}>
              <AlifeCard
                type="lion1"
                titlePosition={[0.2, 3.8, -10]}
                cardPosition={[0.2, 2, -10]} />
              <ViroImage
                onClick={() => this.props.updateDetection("serpent")}
                position={[-2.9, 2, -10]}
                width={2}
                height={2}
                source={require('./res/imgReferences/lion1.jpg')} />

              <AlifeCard
                type="lion2"
                titlePosition={[-4, -1.2, -10]}
                cardPosition={[-4, -3, -10]} />
              <ViroImage
                position={[0.2, -3, -10]}
                height={1.5}
                width={4}
                source={require('./res/imgReferences/lion2.jpg')} />
            <ViroSound paused={false}
              muted={false}
              source={require('./res/Sounds/lion.mp3')}
              loop={false}
              volume={1.0}
              onFinish={this.onFinishSound}
              onError={this.onErrorSound} />
          </ViroARObjectMarker>
          : null}

          {!this.props.detected || this.props.detected === "ox"
            ?
            <ViroARObjectMarker target={"ox"} onAnchorFound={() => {
              this.props.updateDetection("ox");
            }}>
            </ViroARObjectMarker>
            : null}

          {!this.props.detected || this.props.detected === "serpent"
            ?
            <ViroARObjectMarker target={"serpent"} onAnchorFound={() => {
              this.props.updateDetection("serpent");
            }}>
            </ViroARObjectMarker>
            : null}

          {!this.props.detected || this.props.detected === "monster"
            ?
            <ViroARObjectMarker target={"monster"} onAnchorFound={() => {
              this.props.updateDetection("monster");
            }}>
            </ViroARObjectMarker>
            : null}

          {!this.props.detected || this.props.detected === "horses"
            ?
            <ViroARObjectMarker target={"horses"} onAnchorFound={() => {
              this.props.updateDetection("horses");
            }}>
            </ViroARObjectMarker>
            : null}

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
    resetState: reduxState.appManagement.resetState,
    detected:reduxState.appManagement.detected
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    resetChange: (bool) => dispatch(changeReset(bool)),
    updateDetection:(object)=>dispatch(updateDetection(object))
  }
}

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(AlifeTest);

