/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component , PropTypes } from 'react';
var Swiper = require('react-native-swiper');

import LogInPage from './src/component/MyPage'
import TabNavigator from 'react-native-tab-navigator';
import SamePart from './src/component/SamePart'
import LogIng from './src/component/LogIng'


import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
    ListView,
    Dimensions,
    TouchableHighlight,
    TouchableOpacity,
    Navigator
} from 'react-native';



var Slider = React.createClass({
    render: function(){
        return (
            <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} height={200} showsPagination={false}>
                <Image style={[styles.slide,]} source={require('./Image/Androidimage1.png')}></Image>
                <Image style={[styles.slide,]} source={require('./Image/wow1.png')}></Image>
                <Image style={[styles.slide,]} source={require('./Image/wow2.png')}></Image>
            </Swiper>
        );
    }
});


class BBproject extends Component {
    render(){
        return(
            <View style={{flex:1}}>
                <TTT />
            </View>
        );
    }
}


class TTT extends Component{
    // constructor(props) {
    //     super(props);
        state = {
            selectedTab:'MainPageBety',
            hidden:false
        };
    // }



    _renderTab(Component, selectedTab, title, renderIcon, renderIconSelectIcon) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === selectedTab}
                title={title}
                selectedTitleStyle={styles.tabText}
                renderIcon={() => <Image source={renderIcon} style={{width:25,height:25}}/>}
                renderSelectedIcon={() => <Image source={renderIconSelectIcon} style={{width:25,height:25}}/>}
                onPress={() => this.setState({ selectedTab: selectedTab })}>
                <Component aa={this.state.hidden}/>
            </TabNavigator.Item>
        )
    }
    render() {
        if (this.state.hidden) {
            var tabBarStyle = {position: 'absolute', top: Dimensions.get('window').height};
            var sceneStyle = {paddingBottom: 0};
        } else {
            let tabBarHeight = 50;
            var tabBarStyle = {height: tabBarHeight};
            var sceneStyle = {paddingBottom: tabBarHeight};
        }
        return (
            <View style={{flex:1}} tabBarStyle={{backgroundColor:'#eee',alignItems:'center'}}>
                <TabNavigator tabBarStyle={tabBarStyle}
                              sceneStyle={sceneStyle}>
                    {this._renderTab(MainPageBety, 'MainPageBety', 'Popular', require('./Image/payTwo.png'),require('./Image/pay.png'))}
                    {this._renderTab(MyPage, 'MyPage', 'Trending', require('./Image/mine.png'),require('./Image/payOne.png'))}
                </TabNavigator>
            </View>
        );
    }
}





class MainPageBety extends Component{
    render(){
        return(
            <Navigator
                initialRoute={{name:'MainPage',component:MainPage}}
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


class MainPage extends Component{
    render(){
        return(
            <View style={styles.mainPage}>
                    <TopNav navigator={this.props.navigator}/>
                <ScrollView>
                    <MidNav />
                </ScrollView>
            </View>
        )
    }
}

class MyPage extends Component{
    render(){
        return(
          <View style={{flex:1}}>
              <LogInPage {...this.props}/>
          </View>
        );
    }
}



class TopNav extends Component {
    render() {
        return (
            <View style={styles.topNav}>
                <View style={styles.topLeftPart}>
                    <Text style={styles.topLeftWord}>武汉</Text>
                </View>
                <View>
                    <Text style={styles.topMidWord}>黎黄坡路2-附3</Text>
                </View>
                <View style={styles.topRightPart}>
                    <TouchableOpacity
                        onPress={(component) =>this.props.navigator.push({
                                sceneConfig:Navigator.SceneConfigs.FadeAndroid,
                                component:LogIng,
                                params:{
                                }
                            })}>
                        <Text style={styles.topLeftWord}>登录</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

class MidNav extends Component{
    render(){
        return(
          <View style={styles.midNav}>
              <View style={{height:200}}>
                <Slider />
              </View>
              <TextInput
                  style={styles.textInput}
                  placeholder="请输入您想要购买的名称"
                  numberOfLines={1}
                  underlineColorAndroid={'transparent'}
              />
              <View style={styles.icoPart}>
                  <View style={styles.icoText}>
                      <Image
                        source={require('./Image/xiaolongxia.png')} style={{height:40,width:40}}
                      />
                      <Text style={styles.mainText}>小龙虾</Text>
                  </View>
                  <View style={styles.icoText}>
                      <Image
                        source={require('./Image/flower.png')} style={{height:40,width:40}}
                      />
                      <Text style={styles.mainText}>鲜花</Text>
                  </View>
                  <View style={styles.icoText}>
                      <Image
                        source={require('./Image/coffer.png')} style={{height:40,width:40}}
                      />
                      <Text style={styles.mainText}>咖啡</Text>
                  </View>
                  <View style={styles.icoText}>
                      <Image
                        source={require('./Image/moreI.png')} style={{height:40,width:40}}
                      />
                      <Text style={{color:'#000000'}}>更多</Text>
                  </View>
              </View>
              <View style={styles.midBottomPart}>
                  <View style={styles.messagePart}>
                      <Image source={require('./Image/laba.png')} style={{width:30, height:30}}/>
                      <Text style={styles.mainText}>周围有
                          <Text style={{color:'#fe8717'}}>5</Text>
                          位自由人为您服务</Text>
                  </View>
                  <SamePart />
              </View>
          </View>
        );
    }
}




const styles = StyleSheet.create({
   mainPage:{
       flex:1
   },
   topNav:{
       /*flex:1,*/
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',
       height:45
   },
   midNav:{
       backgroundColor:'#FFF',
       flex:0.82
   },
   bottomNav:{
       /*flex:1,*/
       flexDirection:'row',
       backgroundColor:'#fff',
       justifyContent:'space-around',
       alignItems:'center',
       height:50
   },
   topLeftPart:{
       marginLeft:20
   },
   topRightPart:{
       marginRight:20
   },
    topLeftWord:{
        fontSize:15
    },
    topMidWord:{
        fontSize:15,
        fontWeight:'bold'
    },
    slide:{
        width: Dimensions.get('window').width,
        height:200,
        resizeMode:Image.resizeMode.stretch
    },
    textInput:{
        height:40,
        width:360,
        backgroundColor:'#FFF',
        borderWidth:0.5,
        borderColor:'#E6E6E6',
        borderRadius:5,
        marginTop:20,
        marginLeft:30
    },
    icoPart:{
        flex:3,
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginTop:20,
        borderBottomWidth:20,
        borderBottomColor:'#f1f2f3'
    },
    icoText:{
        alignItems:'center'
    },
    midBottomPart:{
        flex:4
    },
    messagePart:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:10,
        borderBottomWidth:2,
        borderBottomColor:'#f1f2f3'
    },
    freePeople:{
        flex:2,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:10,
        paddingBottom:10,
        borderBottomWidth:2,
        borderBottomColor:'#f1f2f3'
    },
    samePart:{
        flexDirection:'column',
        justifyContent:'flex-start'
    },
    headImage:{
        width:50,
        height:50,
        marginLeft:10
    },
    bottomImage:{
        alignItems:'center'
    },
    mainText:{
        color:'#000000'
    },
    freePeopleLast:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:10
    },
    tabText:{
        color:'#000000'
    },
    selectedTabText:{
        color:'#fe8717'
    }
});





AppRegistry.registerComponent('BBproject', () => BBproject);




    /*constructor(props){
        super(props);
        this.state={
          selectedTab:'mainPage'
        };
    }
    render() {
        return (
            <View style={{flex:1}}>
                <TabNavigator style={{height:60, backgroundColor:'red'}}>
                    <TabNavigator.Item
                        selected={this.selectedTab === 'mainPage'}
                        title="帮买"
                        renderIcon={() =><Image source={require('./Image/payTwo.png')}/>}
                        renderSelectedIcon={() =><Image source={require('./Image/pay.png')}/>}
                        onPress={() => this.setState({selectedTab:'mainPage'})}>
                        <mainPage />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.selectedTab === 'MyPage'}
                        title="我的"
                        renderIcon={() =><Image source={require('./Image/mine.png')}/>}
                        renderSelectedIcon={() =><Image source={require('./Image/payOne.png')}/>}
                        onPress={() => this.setState({selectedTab:'MyPage'})}>
                        <MyPage />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }*/

            /*<Navigator
                initialRoute={{ name: 'mainPage', component: mainPage }}
                configureScene={(route) => {
               return Navigator.SceneConfigs.FadeAndroid;
            }}
                renderScene={(route, navigator) => {
            let Component = route.component;
            return <Component {...route.params} navigator={navigator}/>
            }}
            />*/
