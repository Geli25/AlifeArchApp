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
  ViroARImageMarker,
  ViroARCamera,
  ViroSound
} from 'react-viro';

import AlifeCard from './AlifeCard.js';

import { connect } from 'react-redux';
import { changeReset,updateDetection,setLoading } from '../store/actions/appManagement';

export default class AlifeTest_app extends Component {

  constructor(props) {
    super(props);

    // bind 'this' to functions
    ViroARTrackingTargets.createTargets({
      "lion": {
        source: require('./res/Scans/lion2.arobject'),
        type: 'Object',
      },
      "ox": {
        source: require('./res/Scans/ox.arobject'),
        type: 'Object',
      },
      "serpent": {
        source: require('./res/Scans/serpent2.arobject'),
        type: 'Object',
      },
      "monster": {
        source: require('./res/Scans/monster2.arobject'),
        type: 'Object',
      },
      "horses": {
        source: require('./res/Scans/horse.arobject'),
        type: 'Object',
      },
      "birds":{
        source: require('./res/Scans/birds.JPG'),
        orientation: "Up",
        physicalWidth: 0.1
      }
    });
  }

  componentDidMount(){
    if (this.props.loading===true){
      this.props.setLoading(false);
    }
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
              {this.props.detected==="lion" ? 
              <React.Fragment>
              <AlifeCard
                type="lion1"
                cardRotation={[0, 0, 0]}
                titlePosition={[0.2, 3.8, -10]}
                cardPosition={[0.2, 2, -10]} />

              <ViroImage
                position={[-2.9, 2, -10]}
                width={2}
                height={2}
                source={require('./res/imgReferences/lion1.jpg')} />

              <AlifeCard
                type="lion2"
                cardRotation={[0, 0, 0]}
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
              </React.Fragment> 
              : null}
          </ViroARObjectMarker>
          : null}

          {!this.props.detected || this.props.detected === "ox"
            ?
            <ViroARObjectMarker target={"ox"} onAnchorFound={() => {
              this.props.updateDetection("ox");
            }}>
              {this.props.detected === "ox" ?
                <React.Fragment>
                  <AlifeCard
                    type="ox1"
                    cardRotation={[0, 0, 0]}
                    titlePosition={[0.2, 3.8, -10]}
                    cardPosition={[0.2, 2, -10]} />

                  <ViroImage
                    position={[-2.9, 2, -10]}
                    width={2.5}
                    height={2}
                    source={require('./res/imgReferences/ox1.jpg')} />

                  <AlifeCard
                    type="ox2"
                    cardRotation={[0, 0, 0]}
                    titlePosition={[-4, -1.2, -10]}
                    cardPosition={[-4, -3, -10]} />

                  <ViroImage
                    position={[0.2, -3, -10]}
                    height={2.5}
                    width={4}
                    source={require('./res/imgReferences/ox2.JPG')} />

                  <ViroSound paused={false}
                    muted={false}
                    source={require('./res/Sounds/ox.mp3')}
                    loop={false}
                    volume={1.0}
                    onFinish={this.onFinishSound}
                    onError={this.onErrorSound} />
                </React.Fragment>
                : null}
            </ViroARObjectMarker>
            : null}

          {!this.props.detected || this.props.detected === "serpent"
            ?
            <ViroARObjectMarker target={"serpent"} onAnchorFound={() => {
              this.props.updateDetection("serpent");
            }}>
              {this.props.detected === "serpent" ?
                <React.Fragment>
                  <AlifeCard
                    type="serpent1"
                    dynamic
                    cardRotation={[0, 0, 0]}
                    titlePosition={[0.2, 3.8, -10]}
                    cardPosition={[0.2, 2, -10]} />

                  <ViroImage
                    position={[-2.9, 2, -10]}
                    width={3.5}
                    height={2}
                    source={require('./res/imgReferences/serpent1.jpg')} />

                  <AlifeCard
                    type="serpent2"
                    cardRotation={[0, 0, 0]}
                    titlePosition={[-4, -1.2, -10]}
                    cardPosition={[-4, -3, -10]} />

                  <ViroImage
                    position={[0.2, -3, -10]}
                    height={2}
                    width={4}
                    source={require('./res/imgReferences/serpent2.jpg')} />

                  <ViroSound paused={false}
                    muted={false}
                    source={require('./res/Sounds/serpent.mp3')}
                    loop={false}
                    volume={1.0}
                    onFinish={this.onFinishSound}
                    onError={this.onErrorSound} />
                </React.Fragment>
                : null}
            </ViroARObjectMarker>
            : null}

          {!this.props.detected || this.props.detected === "monster"
            ?
            <ViroARObjectMarker target={"monster"} onAnchorFound={() => {
              this.props.updateDetection("monster");
            }}>
              {this.props.detected === "monster" ?
                <React.Fragment>
                  <AlifeCard
                    type="monster1"
                    dynamic
                    cardRotation={[0, 0, 0]}
                    titlePosition={[0.2, 3.8, -10]}
                    cardPosition={[0.2, 2, -10]} />

                  <ViroImage
                    position={[-2.9, 2, -10]}
                    width={2}
                    height={2}
                    source={require('./res/imgReferences/monster1.JPG')} />

                  <AlifeCard
                    type="monster2"
                    cardRotation={[0, 0, 0]}
                    titlePosition={[-4, -1.2, -10]}
                    cardPosition={[-4, -3, -10]} />

                  <ViroImage
                    position={[0.2, -3, -10]}
                    height={1.5}
                    width={4}
                    source={require('./res/imgReferences/monster2.jpg')} />

                  <ViroSound paused={false}
                    muted={false}
                    source={require('./res/Sounds/monster.mp3')}
                    loop={false}
                    volume={1.0}
                    onFinish={this.onFinishSound}
                    onError={this.onErrorSound} />
                </React.Fragment>
                : null}
            </ViroARObjectMarker>
            : null}

          {!this.props.detected || this.props.detected === "horses"
            ?
            <ViroARObjectMarker target={"horses"} onAnchorFound={() => {
              this.props.updateDetection("horses");
            }}>

              {this.props.detected === "horses" ?
                <React.Fragment>
                  <AlifeCard
                    type="horses1"
                    cardRotation={[0, 0, 0]}
                    titlePosition={[0.2, 3.8, -10]}
                    cardPosition={[0.2, 2, -10]} />

                  <ViroImage
                    position={[-2.9, 2, -10]}
                    width={2.5}
                    height={2.5}
                    source={require('./res/imgReferences/horses1.JPG')} />

                  <AlifeCard
                    type="horses2"
                    dynamic
                    cardRotation={[0, 0, 0]}
                    titlePosition={[-4, -1.2, -10]}
                    cardPosition={[-4, -3, -10]} />

                  <ViroImage
                    position={[0.2, -3, -10]}
                    height={2}
                    width={4.5}
                    source={require('./res/imgReferences/horses2.JPG')} />

                  <ViroSound paused={false}
                    muted={false}
                    source={require('./res/Sounds/horses.mp3')}
                    loop={false}
                    volume={1.0}
                    onFinish={this.onFinishSound}
                    onError={this.onErrorSound} />
                </React.Fragment>
                : null}
            </ViroARObjectMarker>
            : null}

          {!this.props.detected || this.props.detected === "birds"
          ?
          <ViroARImageMarker target={"birds"} onAnchorFound={()=>{
            this.props.updateDetection("birds");
          }}>

              {this.props.detected === "birds" ?
                <React.Fragment>
                  <AlifeCard
                    type="birds1"
                    cardRotation={[-90, 0, 0]}
                    titlePosition={[3, -10, 0]}
                    cardPosition={[3, -10, 1.8]} />

                  <ViroImage
                    position={[-2.9, 2, -10]}
                    width={2.5}
                    height={2.5}
                    source={require('./res/imgReferences/birds1.JPG')} />

                  <AlifeCard
                    type="birds2"
                    cardRotation={[-90, 0, 0]}
                    titlePosition={[-5, -10, 0]}
                    cardPosition={[-5, -10, 1.8]} />

                  <ViroImage
                    position={[0.2, -3, -10]}
                    height={2}
                    width={4.5}
                    source={require('./res/imgReferences/birds2.JPG')} />

                  <ViroSound paused={false}
                    muted={false}
                    source={require('./res/Sounds/birds.mp3')}
                    loop={false}
                    volume={1.0}
                    onFinish={this.onFinishSound}
                    onError={this.onErrorSound} />
                </React.Fragment>
                : null}
            </ViroARImageMarker>
          : null}

      </ViroARScene>
      </React.Fragment>
    );
  }

  _onInitialized=(state, reason)=>{
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: "Tracking Normal"
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
    detected:reduxState.appManagement.detected,
    loading:reduxState.appManagement.loading
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    resetChange: (bool) => dispatch(changeReset(bool)),
    updateDetection:(object)=>dispatch(updateDetection(object)),
    setLoading:(bool)=>dispatch(setLoading(bool))
  }
}

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(AlifeTest_app);

