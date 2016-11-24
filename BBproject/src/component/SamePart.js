import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView
} from 'react-native';



var SOURCE_IMAGE = [
    require('./image/men.png'),require('./image/men.png'),require('./image/men.png'),require('./image/women.png'),require('./image/women.png')
];



export default class SamePart extends Component{
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2,sectionHeaderHasChanged:(s1,s2) => s1 !==s2});
        this.state = {
            dataSource:ds,
            data:{0:{'自由人林**    47分钟送达':'自由快递人帮买了5个红包'},
                  1:{'自由人李**    17分钟送达':'自由快递人帮买了5包干脆面'},
                  2:{'自由人唐**    56分钟送达':'自由快递人帮买了一盒稻香村糕点'},
                  3:{'自由人袁**    24分钟送达':'自由快递人帮买麦当劳全家桶'},
                  4:{'自由人张**    23分钟送达':'自由快递人帮买了烤鸭一只'}}
        };
    }
    
    _renderRow(rowData, rowID,sectionID){
        var img = SOURCE_IMAGE[sectionID];
        return(
            <View style={styles.freePeople}>
                <Image source={img} style={styles.headImage}/>
                <View style={styles.samePart}>
                    <Text style={{marginBottom:10, color:'#000000'}}>{rowID}</Text>
                    <Text>{rowData}</Text>
                </View>
            </View>
        )
    }
    
    render(){
        return(
            <ListView 
                dataSource={this.state.dataSource.cloneWithRowsAndSections(this.state.data)}
                renderRow={(rowData,sectionID,rowID) => this._renderRow(rowData,rowID,sectionID)}
                showVeticalSrollIndicator={false}
            />
        );
    }
}

const styles = StyleSheet.create({
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
    }
});