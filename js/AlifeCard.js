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
                diffuseTexture: require('./res/background.png'),
            }
        });
    }
    render(){
        return(
        <ViroNode>
        <ViroFlexView
            materials="card"
            height={4}
            width={4.5}
            opacity={0.8}
            position={[0, 0, -10]}>
            <ViroImage
                style={{ marginLeft: 0.5, marginTop:0.5 }}
                height={2}
                width={3.5}
                source={require("./res/recipes.png")}
            />
            <ViroAnimatedImage
                style={{marginLeft:0.7}}
                height={0.9}
                width={1.5}
                source={require("./res/giphyfab.gif")}
            />
        </ViroFlexView>
        <ViroFlexView
            height={3}
            width={3.5}
            position={[-5, 0, -10]}>
            <ViroImage
                opacity={0.95}
                height={3}
                width={3.5}
                source={require("./res/dummy.png")}
            />
        </ViroFlexView>
        <ViroSound
            source={require("./res/jazz.mp3")} />
        {/* <ViroSpatialSound
            position={[0,0,0]}
            source={require("./res/cube_sound.wav")} /> */}
        </ViroNode>
)}}

var styles = StyleSheet.create({
    helloWorldTextStyle: {
        fontFamily: 'Arial',
        color: '#000000',
        textAlignVertical: 'top',
    },
    background: {
        backgroundColor: '#ffffff'
    }
});


export default AlifeCard;