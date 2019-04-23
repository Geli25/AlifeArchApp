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
            if (this.state.imgs.length===3 && !this.props.dynamic){
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
                    title1d: {
                        diffuseTexture: this.state.imgs[2]
                    }
                });
            }
            if (this.state.imgs.length===2 && !this.props.dynamic){
                ViroMaterials.createMaterials({
                    card: {
                        diffuseTexture: this.state.imgs[0],
                    },
                    title1b: {
                        diffuseTexture: this.state.imgs[1]
                    }  
            })
            }
            if (this.state.imgs.length === 2 && this.props.dynamic) {
                ViroMaterials.createMaterials({
                    cardd: {
                        diffuseTexture: this.state.imgs[0],
                    },
                    title2b: {
                        diffuseTexture: this.state.imgs[1]
                    }
                })
            }
        });

    }

    renderType=(type)=>{
        // should have lion1, lion2, ox1, ox2, serpent1, serpent2
        if (type === "lion1"){
            return[require('./res/CardImages/lion1.png'), require('./res/Titles/lion1title.png')]
        }
        if (type === "lion2"){
            return [require('./res/CardImages/lion2.png'), require('./res/CardImages/lion2-1.png'), require('./res/Titles/lion2title.png')]
        }

        if (type === "ox1"){
            return [require('./res/CardImages/ox1.png'), require('./res/Titles/oxtitle1.png')]
        }
        if (type === "ox2") {
            return [require('./res/CardImages/ox2.png'), require('./res/CardImages/ox2-1.png'), require('./res/Titles/oxtitle2.png')]
        }

        if (type === "serpent1"){
            return [require('./res/CardImages/serpent1.png'), require('./res/CardImages/serpent1-1.png'), require('./res/Titles/serpenttitle1.png')]
        }
        if (type === "serpent2"){
            return [require('./res/CardImages/serpent2.png'), require('./res/CardImages/serpent2-1.png'),require('./res/Titles/serpenttitle2.png')]
        }

        if (type === "monster1") {
            return [require('./res/CardImages/monster1.png'), require('./res/CardImages/monster1-1.png'), require('./res/Titles/monstertitle1.png')]
        }
        if (type === "monster2") {
            return [require('./res/CardImages/monster2.png'), require('./res/CardImages/monster2-1.png'), require('./res/Titles/monstertitle2.png')]
        }
        
        if (type === "birds1") {
            return [require('./res/CardImages/birds1.png'), require('./res/Titles/birdstitle1.png')]
        }
        if (type === "birds2") {
            return [require('./res/CardImages/birds2.png'), require('./res/CardImages/birds2-1.png'), require('./res/Titles/birdstitle2.png')]
        } 
        
        if (type === "horses1") {
            return [require('./res/CardImages/horses1.png'), require('./res/Titles/horsestitle1.png')]
        }
        if (type === "horses2") {
            return [require('./res/CardImages/horses2.png'), require('./res/Titles/horsestitle2.png')]
        }
    }

    toggleText=()=>{
        this.setState({toggleText:!this.state.toggleText})
    }

    render(){
        return(
        <React.Fragment>
        {this.state.imgs.length === 2 && !this.props.dynamic
        ? <ViroNode>
        <ViroFlexView
            width={4}
            height={0.5}
            materials='title1b'
            rotation={this.props.cardRotation}
            position={this.props.titlePosition} />
        <ViroFlexView
            materials="card"
            height={2.5}
            width={4}
            opacity={0.90}
            rotation={this.props.cardRotation}
            position={this.props.cardPosition} /> 
        </ViroNode>
        : this.state.imgs.length === 3 && this.props.dynamic 
        ?<ViroNode>
            <ViroFlexView
                width={4}
                height={0.5}
                materials='title1d'
                rotation={this.props.cardRotation}
                position={this.props.titlePosition} />
            <ViroFlexView
            materials={!this.state.toggleText ? "card1d" : "card2d"}
            onClick={this.toggleText}
            height={2.5}
            width={4}
            opacity={0.95}
            rotation={this.props.cardRotation}
            position={this.props.cardPosition} />
        </ViroNode>
        : this.state.imgs.length === 2 && this.props.dynamic
        ? <ViroNode>
            <ViroFlexView
                width={4}
                height={0.5}
                materials='title2b'
                rotation={this.props.cardRotation}
                position={this.props.titlePosition} />
            <ViroFlexView
                materials='cardd'
                height={2.5}
                width={4}
                opacity={0.9}
                rotation={this.props.cardRotation}
                position={this.props.cardPosition} />
        </ViroNode>
        :<ViroNode>
            <ViroFlexView
                width={4}
                height={0.5}
                materials='title2'
                rotation={this.props.cardRotation}
                position={this.props.titlePosition} />
            <ViroFlexView
            materials={!this.state.toggleText ? "card1" : "card2"}
            onClick={this.toggleText}
            height={2.5}
            width={4}
            opacity={0.9}
            rotation={this.props.cardRotation}
            position={this.props.cardPosition} />
        </ViroNode>}
        </React.Fragment>
)}}

export default AlifeCard;