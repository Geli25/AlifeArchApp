import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
    ViroText,
    ViroFlexView,
    ViroNode,
    ViroImage,
    ViroAnimatedImage,
    ViroMaterials,
    ViroSpatialSound,
    ViroSound
} from 'react-viro';

class AlifeCard extends Component{
    componentWillMount(){
        //require all materials and put them here


        ViroMaterials.createMaterials({
            card: {
                diffuseTexture: require('./res/media.png'),
            },
            // title:{
            //     diffuseTexture:require(this.props.titleBackground),
            // }
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
                position={this.props.cardPosition}>
                <ViroImage
                    style={{ marginLeft: 0.5, marginTop:0.5 }}
                    opacity={1}
                    height={2}
                    width={3.5}
                    source={require('./res/recipes.png')}
                />
            </ViroFlexView>

        {this.props.sound 
        ? <ViroSound paused={false}
            muted={false}
            source={require('./res/Sounds/jazz.mp3')}
            loop={false}
            volume={1.0}
            onFinish={this.onFinishSound}
            onError={this.onErrorSound} />
        : null}

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