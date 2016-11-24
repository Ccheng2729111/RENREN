import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';


export default class Button extends Component{
    constructor(props){
        super(props);
        this.state = {staus:1}
    }

    addStaus = () => {
        alert('目前的staus是' + this.state.staus++)
    };
    render(){
        const {text,backgroundColor} = this.props;

        return(
            <TouchableOpacity style={{height:40,width:150,borderRadius:20,backgroundColor:backgroundColor,justifyContent:'center'}}
                              onPress={this.addStaus}>
                <Text style={{textAlign:'center',color:'white'}}>{text}</Text>
            </TouchableOpacity>  
        );
    }
}