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

    state={
        toggleText:false,
        imgs:null
    }

    componentWillMount(){
        this.setState({imgs:this.renderType(this.props.type)},()=>{
            if (this.state.imgs.length===2){
                ViroMaterials.createMaterials({
                    card1: {
                        diffuseTexture: this.state.imgs[0],
                    },
                    card2:{
                        diffuseTexture: this.state.imgs[1]
                    }
                });
            }
            if (this.state.imgs.length===1){
                ViroMaterials.createMaterials({
                    card1: {
                        diffuseTexture: this.state.imgs[0],
                }})
            }
        });

    }

    renderType=(type)=>{
        // should have lion1, lion2, ox1, ox2, serpent1, serpent2
        if (type==="lion1"){
            return[require('./res/CardImages/lion1.png')]
        }
        if (type==="lion2"){
            return[require('./res/CardImages/lion2.png'),require('./res/CardImages/lion2-1.png')]
        }
    }

    toggleText=()=>{
        this.setState({toggleText:!this.state.toggleText})
    }

    render(){
        return(
        <ViroNode>
        {this.state.imgs.length === 1 
        ? <ViroFlexView
            materials="card1"
            onClick={this.toggleText}
            height={2.5}
            width={4}
            opacity={0.95}
            position={this.props.cardPosition} /> 
        : <ViroFlexView
            materials={this.state.toggleText ? "card1" : "card2"}
            onClick={this.toggleText}
            height={2.5}
            width={4}
            opacity={0.95}
            position={this.props.cardPosition} /> }
        </ViroNode>
)}}

export default AlifeCard;