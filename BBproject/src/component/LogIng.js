import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    Navigator,
    TextInput,
    Dimensions
} from 'react-native';

import SignIn from './SignIn'



export default class LogIng extends Component {
    render(){
        return(
            <View style={styles.LogLingPage}>
                <View style={styles.systemTopPart}>
                    <TouchableOpacity
                        onPress={() =>this.props.navigator.pop()}>
                        <Image source={require('../../Image/returnKey.png')} style={{width:20,height:20,marginLeft:20}}/>
                    </TouchableOpacity>
                    <Text style={styles.systemTopWord}>快捷登录</Text>
                    <View style={{height:20,width:20,marginRight:20}}>
                    </View>
                </View>
                <View style={styles.LogLingAlter}>
                    <Text>为了方便自由快递人联系您，请验证手机</Text>
                </View>
                <View style={styles.InputNum}>
                    <View style={styles.inputIn}>
                        <Image style={styles.inputImg} source={require('../../Image/inputimg1.png')}/>
                        <TextInput
                            autofocus = 'true'
                            numberoflines='1'
                            placeholder='请输入手机号码'
                            keyboardType="numeric"
                            placeholderTextColor="#999999"
                            textalign='center'
                            underlinecolorandroid= 'transparent'
                            style={{width:400}}/>
                    </View>
                </View>
                <View style={styles.InputNum}>
                    <View style={styles.inputIn}>
                        <Image style={styles.inputImg} source={require('../../Image/inputimg2.png')}/>
                        <TextInput
                            autofocus = 'true'
                            numberoflines='#f2f2f2'
                            keyboardType="numeric"
                            placeholder="请输入收到的验证码"
                            placeholderTextColor="#999999"
                            textalign='center'
                            underlinecolorandroid= 'transparent'
                            style={{width:220}}/>
                    </View>
                    <View style={styles.getAuth}>
                        <Text style={{color:'white'}}>获取验证码</Text>
                    </View>
                </View>
                <View style={styles.LogLingBottom}>
                    <TouchableHighlight>
                        <View style={styles.btnLogIn}>
                            <Text style={{color:'white'}}>登录</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <JumpSetting />
            </View>
        );
    }
}



class JumpSetting extends Component{
    render(){
        return(
            <Navigator
                initialRoute={{name:'LogLingcheck',component:LogLingcheck}}
                configureScene={(route) => {
                       if (route.sceneConfig) {
                        return route.sceneConfig;
                            }
                    return Navigator.SceneConfigs.PushFromRight;
                        }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator}/>
                    }}/>
        );
    }
}

class LogLingcheck extends Component{
    constructor(props){
        super(props);
        this.state = {
            check:false
        }
    }

    toggle(){
        this.setState({check: !this.state.check})
    }
    render(){
        return(
            <View style={styles.LogLingcheck}>
                <View style={styles.LogLingCheckBox}>
                    <TouchableOpacity onPress={() => {this.setState({check: !this.state.check})}} style={{width:30,height:30}}>
                        {this.state.check? <Image source={require('../../Image/ischecked.png')}/> :<Image source={require('../../Image/checkbox.png')}/>}
                    </TouchableOpacity>
                    <Text>同意</Text>
                    <Text style={{marginLeft:5,color:'#ff8618'}}>《注册服务条款》</Text>
                </View>
                <TouchableOpacity
                    onPress={() =>this.props.navigator.push({
                        component:SignIn,
                        sceneConfig:Navigator.SceneConfigs.FadeAndroid,
                        params:{
                                    name:'SignIn'
                                }
                    })}>
                    <View style={styles.passWord}>
                        <Text style={{color:'#ff8618'}}>密码登录</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    LogLingPage:{
        flex:1,
        backgroundColor:'#f2f2f2'
    },
    systemTopPart:{
        height:45,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'white'
    },
    systemTopWord:{
        fontSize: 15,
        fontWeight:'bold'
    },
    LogLingAlter:{
        height:40,
        justifyContent:'center',
        alignItems:'center'
    },
    InputNum:{
        flexDirection:'row',
        backgroundColor:'white',
        justifyContent:'space-between',
        alignItems:'center',
        height:55,
        borderBottomWidth:1,
        borderBottomColor:'#f2f2f2'
    },
    inputIn:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:15
    },
    getAuth:{
        height:45,
        width:120,
        backgroundColor:'#ff8618',
        borderRadius:2,
        justifyContent:'center',
        alignItems:'center',
        marginRight:15
    },
    LogLingBottom:{
        backgroundColor:'#f2f2f2',
        alignItems:'center'
    },
    btnLogIn:{
        width:380,
        height:50,
        backgroundColor:'#999999',
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,
        borderRadius:2
    },
    LogLingcheck:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
        alignItems:'center'

    },
    LogLingCheckBox:{
        flexDirection:'row',
        marginLeft:15,
        alignItems:'center'
    },
    passWord:{
        marginRight:15
    }
});