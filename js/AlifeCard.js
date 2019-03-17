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
            if (this.state.imgs.length===3){
                ViroMaterials.createMaterials({
                    card1: {
                        diffuseTexture: this.state.imgs[0],
                    },
                    card2:{
                        diffuseTexture: this.state.imgs[1]
                    },
                    title2:{
                        diffuseTexture: this.state.imgs[2]
                    }
                });
            }
            if (this.state.imgs.length === 3 && this.props.dynamic) {
                ViroMaterials.createMaterials({
                    card1d: {
                        diffuseTexture: this.state.imgs[0],
                    },
                    card2d: {
                        diffuseTexture: this.state.imgs[1]
                    },
                    title1: {
                        diffuseTexture: this.state.imgs[2]
                    }
                });
            }
            if (this.state.imgs.length===2){
                ViroMaterials.createMaterials({
                    card: {
                        diffuseTexture: this.state.imgs[0],
                    },
                    title1: {
                        diffuseTexture: this.state.imgs[1]
                    }  
            })
            }
        });

    }

    renderType=(type)=>{
        // should have lion1, lion2, ox1, ox2, serpent1, serpent2
        if (type==="lion1"){
            return[require('./res/CardImages/lion1.png'), require('./res/Titles/lion1title.png')]
        }
        if (type==="lion2"){
            return [require('./res/CardImages/lion2.png'), require('./res/CardImages/lion2-1.png'), require('./res/Titles/lion2title.png')]
        }
        if (type=="ox1"){
            return [require('./res/CardImages/ox1.png')]
        }
        if (type === "ox2") {
            return [require('./res/CardImages/ox2.png'), require('./res/CardImages/ox2-1.png')]
        }
    }

    toggleText=()=>{
        this.setState({toggleText:!this.state.toggleText})
    }

    render(){
        return(
        <React.Fragment>
        {this.state.imgs.length === 2
        ? <ViroNode>
        <ViroFlexView
            width={4}
            height={0.5}
            materials='title1'
            position={this.props.titlePosition} />
        <ViroFlexView
            materials="card"
            height={2.5}
            width={4}
            opacity={0.95}
            position={this.props.cardPosition} /> 
        </ViroNode>
        : this.state.imgs.length === 3 && this.props.dynamic 
        ?<ViroNode>
            <ViroFlexView
                width={4}
                height={0.5}
                materials='title1'
                position={this.props.titlePosition} />
            <ViroFlexView
            materials={!this.state.toggleText ? "card1d" : "card2d"}
            onClick={this.toggleText}
            height={2.5}
            width={4}
            opacity={0.95}
            position={this.props.cardPosition} />
        </ViroNode>
        :<ViroNode>
            <ViroFlexView
                width={4}
                height={0.5}
                materials='title2'
                position={this.props.titlePosition} />
            <ViroFlexView
            materials={!this.state.toggleText ? "card1" : "card2"}
            onClick={this.toggleText}
            height={2.5}
            width={4}
            opacity={0.95}
            position={this.props.cardPosition} />
        </ViroNode>}
        </React.Fragment>
)}}

export default AlifeCard;