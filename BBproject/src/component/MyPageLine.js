import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';


export default class MyPageLine extends Component{
    render(){
        const {text,imgurl} = this.props;
        return(
            <View style={{ flexDirection:'row',alignItems:'center',height:40,justifyContent:'space-between'}}>
                <View style={{flexDirection:'row',marginLeft:10,alignItems:'center'}}>
                    <Image source={imgurl} style={{width:28,height:28}}/>
                    <Text style={{marginLeft:10}}>{this.props.text}</Text>
                </View>
                <Image source={require('../../Image/right.png')} style={{width:28,height:28,marginRight:10}}/>
            </View>
        );
    }
}
            /*<TouchableHighlight
                onPress={(componentSys) =>this.props.navigator.push({
                                sceneConfig:Navigator.SceneConfigs.FadeAndroid,
                                component:componentSys,
                                params:{
                                    name:'componentSys'
                                }
                            })}>
                            */
