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

const firstImg = require('./res/dummy.png');
const secondImg = require('./res/recipes.png');

class AlifeCard extends Component{

    state={
        toggleText:false,
        swipe:false,
        typeArray:null
    }

    componentWillMount(){
        // this.renderType(this.props.type);

        ViroMaterials.createMaterials({
            card: {
                diffuseTexture: require('./res/media.png'),
            },
        });
    }

    onError1=()=>{
        console.log("something went wrong");
    }

    //apparently swiping doesn't work very well
    // swiping=(state)=>{
    //     if (state===4&&!this.state.swipe){
    //         this.setState({swipe:true})
    //     }
    //     if(state===3&&this.state.swipe){
    //         this.setState({swipe:false})
    //     }
    // }

    // renderType=(type)=>{
        // should have lion1, lion2, ox1, ox2, serpent1, serpent2
    //     if (type==="lion"){
                //return an arrow of [backgroundimg,bodytext1,(bodytext2)]
    //         return[]
    //     }
    // }

    toggleText=()=>{
        this.setState({swipe:!this.state.swipe})
    }

    render(){
        return(
        <ViroNode>
            <ViroFlexView
                materials="card"
                onClick={this.toggleText}
                height={4}
                width={4.5}
                opacity={0.95}
                position={this.props.cardPosition}>
                <ViroImage
                    style={{ marginLeft: 0.5, marginTop:0.5 }}
                    opacity={1}
                    height={2}
                    width={3.5}
                    source={this.state.swipe ? firstImg : secondImg}
                />
            </ViroFlexView>
        </ViroNode>
)}}

// var styles = StyleSheet.create({
//     helloWorldTextStyle: {
//         fontFamily: 'Arial',
//         fontSize:15,
//         color: 'black',
//         textAlignVertical: 'center',
//     },
//     background: {
//         backgroundColor: '#ffffff'
//     }
// });


export default AlifeCard;