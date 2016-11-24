import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    Navigator
} from 'react-native';

import MyPageLine from './MyPageLine'
import SystemSetting from './syetemSetting'

export default class LogInPage extends Component{

    render(){
        return(
                <Navigator
                    initialRoute={{name:'MyHomePage',component:MyHomePage}}
                    configureScene={(route) => {
                       if (route.sceneConfig) {
                        return route.sceneConfig;
                            }
                    return Navigator.SceneConfigs.PushFromRight;
                        }}
                            renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator} bb={this.props.aa}/>
                    }}/>
        );
    }
}

class MyHomePage extends Component{
    render(){
        alert(this.props.bb)
        return(
            <View style={{flex:1}}>
                <View style={styles.topPart}>
                    <View style={styles.topNavPart}>
                        <Image source={require('../../Image/ico1.png')} style={styles.topNavPartImgLeft}/>
                        <Image source={require('../../Image/message11.png')} style={styles.topNavPartImgRight}/>
                    </View>
                    <View style={styles.topMidPart}>
                        <Image source={require('../../Image/headpage.png')} style={styles.headImg}/>
                        <Text style={styles.userName}>13429847337</Text>
                        <Image source={require('../../Image/newComer.png')} style={styles.newComer}/>
                    </View>
                    <View style={styles.topBottomPart}>
                        <View style={styles.singePart}>
                            <Text style={styles.fontPart}>0.00</Text>
                            <Text style={styles.fontPart}>我的余额</Text>
                        </View>
                        <View style={styles.singePart}>
                            <Text style={styles.fontPart}>1</Text>
                            <Text style={styles.fontPart}>我的优惠券</Text>
                        </View>
                        <View style={styles.singePart}>
                            <Text style={styles.fontPart}>15</Text>
                            <Text style={styles.fontPart}>我的积分</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.midPart}>
                    <View style={styles.midOnePart}>
                        <MyPageLine text="申请自由快递人" imgurl={require('../../Image/img1.png')}/>
                        <MyPageLine text="我的发单"  imgurl={require('../../Image/img2.png')}/>
                    </View>
                    <View style={styles.midTwoPart}>
                        <MyPageLine text="活动中心"  imgurl={require('../../Image/img3.png')}/>
                    </View>
                    <View style={styles.midThreePart}>
                        <MyPageLine text="常见问题" imgurl={require('../../Image/img4.png')}/>
                        <MyPageLine text="建议反馈" imgurl={require('../../Image/img5.png')}/>
                        <MyPageLine text="联系客服" imgurl={require('../../Image/img6.png')}/>
                    </View>
                    <View style={styles.midFourPart}>
                        <TouchableOpacity
                            onPress={(component) =>this.props.navigator.push({
                                sceneConfig:Navigator.SceneConfigs.FadeAndroid,
                                component:SystemSetting,
                                params:{
                                    name:'SystemSetting',
                                    cc:this.props.bb
                                }
                            })}>
                        <View>
                            <MyPageLine text="设置"  imgurl={require('../../Image/img7.png')}/>
                        </View>
                            </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

class FindPart extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <SystemSetting />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    topPart:{
        height:200
    },
    topNavPart:{
        flex:0.2,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#ff8618',
        alignItems:'center'
    },
    topMidPart:{
        flex:0.6,
        flexDirection:'column',
        backgroundColor:'#ff8618',
        alignItems:'center',
        justifyContent:'center'
    },
    topBottomPart:{
        flex:0.2,
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'#f57e11',
        alignItems:'center',
        borderBottomWidth:12,
        borderBottomColor:'#f2f2f2'
    },
    topNavPartImgLeft:{
        width:28,
        height:28,
        marginLeft:10
    },
    topNavPartImgRight:{
        width:28,
        height:28,
        marginRight:10
    },
    headImg:{
        width:50,
        height:50
    },
    userName:{
        fontSize:20,
        color:'white'
    },
    newComer:{
        height:30,
        width:50
    },
    singePart:{
        alignItems:'center'
    },
    fontPart:{
        color:'white'
    },
    midPart:{
        flex:6,
        flexDirection:'column'
    },
    midOnePart:{
        borderBottomWidth:12,
        borderBottomColor:'#f2f2f2'
    },
    midTwoPart:{
        borderBottomWidth:12,
        borderBottomColor:'#f2f2f2'
    },
    midThreePart:{
        borderBottomWidth:12,
        borderBottomColor:'#f2f2f2'
    },
    midFourPart:{
        borderBottomWidth:100,
        borderBottomColor:'#f2f2f2'
    },
    bottomNav:{
        /*flex:1,*/
        flexDirection:'row',
        backgroundColor:'#fff',
        justifyContent:'space-around',
        alignItems:'center',
        height:50
    },
    bottomImage:{
        alignItems:'center'
    }
});