import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    Navigator,
    Switch
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';


export default class SystemSetting extends Component{
    constructor(props){
        super(props);
        this.state = {
            valueOne:false,
            valueTwo:false,
        }
    }
    render(){
        const dd = this.props.cc;

        return(
            <View style={styles.systemPage}>
                <View style={styles.systemTopPart}>
                    <TouchableOpacity
                            onPress={() =>this.props.navigator.pop()}>
                        <Image source={require('../../Image/returnKey.png')} style={{width:20,height:20,marginLeft:20}}/>
                    </TouchableOpacity>
                    <Text style={styles.systemTopWord}>系统设置</Text>
                    <View style={{height:20,width:20,marginRight:20}}>
                    </View>
                </View>
                <View style={styles.systemMidPart}>
                    <View style={styles.systemMidOne}>
                        <View style={styles.systemMidTop}>
                            <Text style={styles.systemMidWord}>声音提醒</Text>
                            <Switch
                                value={this.state.valueOne}
                                onValueChange={(value) => {this.setState({valueOne:value})}}
                                style={{marginRight:20}}/>
                        </View>
                        <View style={styles.systemMidBottom}>
                            <Text style={styles.systemMidWord}>震动提醒</Text>
                            <Switch
                                value={this.state.valueTwo}
                                onValueChange={(value) => {this.setState({valueTwo:value})}}
                                style={{marginRight:20}}/>
                        </View>
                    </View>
                    <View style={styles.systemMidOne}>
                        <View style={styles.systemMidTop}>
                            <Text style={styles.systemMidWord}>设置登录密码</Text>
                            <Image source={require('../../Image/right.png')} style={styles.systemMidImg}/>
                        </View>
                        <View style={styles.systemMidBottom}>
                            <Text style={styles.systemMidWord}>修改手机号码</Text>
                            <Image source={require('../../Image/right.png')} style={styles.systemMidImg}/>
                        </View>
                    </View>
                    <View style={styles.systemMidOne}>
                        <View style={styles.systemMidTop}>
                            <Text style={styles.systemMidWord}>清除缓存</Text>
                            <Image source={require('../../Image/right.png')} style={styles.systemMidImg}/>
                        </View>
                        <View style={styles.systemMidBottom}>
                            <Text style={styles.systemMidWord}>关于人人快递</Text>
                            <Image source={require('../../Image/right.png')} style={styles.systemMidImg}/>
                        </View>
                        <TabNavigator
                            tabBarStyle={{ height: 0, overflow: 'hidden' }}
                            sceneStyle={{ paddingBottom: 0 }}
                        />
                    </View>
                    <View style={styles.blankPart}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    systemPage:{
        flex:1
    },
    systemTopPart:{
        height:45,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'

    },
    systemTopWord:{
        fontSize: 15,
        fontWeight:'bold'
    },
    systemMidPart:{
        flex: 0.82,
        backgroundColor:'#f2f2f2'
    },
    systemMidOne:{
        flex:0.2,
        backgroundColor:'white',
        marginTop:12
    },
    systemMidTop:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderBottomColor:'#f2f2f2',
        alignItems:'center'
    },
    systemMidBottom:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    blankPart:{
        flex:0.4
    },
    systemMidWord:{
        marginLeft:20
    },
    systemMidImg:{
        marginRight:20
    }
});