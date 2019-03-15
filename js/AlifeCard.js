import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
    ViroText,
    ViroFlexView,
    ViroButton,
    ViroNode,
    ViroImage,
    ViroAnimatedImage,
    ViroMaterials,
    ViroSpatialSound,
    ViroSound
} from 'react-viro';

class AlifeCard extends Component{
    componentWillMount(){
        ViroMaterials.createMaterials({
            card: {
                diffuseTexture: require('./res/media.png'),
            }
        });
    }

    onError1=()=>{
        console.log("something went wrong");
    }

    render(){
        return(
        <ViroNode>
            <ViroFlexView
                materials="card"
                height={4}
                width={4.5}
                opacity={0.95}
                position={[0, 0, -10]}>
                <ViroImage
                    style={{ marginLeft: 0.5, marginTop:0.5 }}
                    opacity={1}
                    height={2}
                    width={3.5}
                    source={require("./res/recipes.png")}
                />
            </ViroFlexView>

        {/* <ViroSound
            source={require("./res/jazz.mp3")} /> */}
        {/* <ViroSound paused={false}
            muted={false}
            source={require('./res/jazz.mp3')}
            loop={false}
            volume={1.0}
            onFinish={this.onFinishSound}
            onError={this.onErrorSound} /> */}
        {/* <ViroSpatialSound 
            rolloffModel="linear"
            paused={false}
            muted={false}
            minDistance={2}
            maxDistance={5}
            position={[0, 0, 5]}
            source={require('./res/cube_sound.wav')}
            loop={false}
            volume={1.0}
            onError={this.onError1} /> */}
        </ViroNode>
)}}

var styles = StyleSheet.create({
    helloWorldTextStyle: {
        fontFamily: 'Arial',
        fontSize:15,
        color: 'black',
        textAlignVertical: 'center',
    },
    background: {
        backgroundColor: '#ffffff'
    }
});


export default AlifeCard;