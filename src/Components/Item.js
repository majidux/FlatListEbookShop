import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,FlatList,ProgressBarAndroid} from 'react-native';
import dataItem from './DataItem';


export default class Item extends Component {
    render() {
        return (
            
            <FlatList
                data={dataItem}
                keyExtractor={(item)=>item.writer}
                renderItem={({item})=>
                    <View style={styles.item}>
                        <View style={styles.itemWrapper}>
                            <View style={styles.leftSide}>
                                <Image
                                    source={item.image}
                                />
                            </View>
            
                            <View style={styles.rightSide}>
                                <View style={styles.titles}><Text style={{color:'#9da2a8'}}>{item.writer}</Text></View>
                                <View style={styles.titles}><Text style={{color:'black',fontSize:16}}>{item.bookTitle}</Text></View>
                                <View style={styles.percentage}>
                                    <View style={{backgroundColor:'#dfe1e3',height:3,flex:4}}><View style={{backgroundColor: '#5797e0',height:3,width:160}}></View></View>
                                    <View style={{flex:1,alignItems: 'center'}}><Text style={{color:'#9da2a8',fontSize:12}}>{item.howMuch}%</Text></View>
                                </View>
                            </View>
        
                        </View>
                        <ProgressBarAndroid
                            styleAttr='Horizontal'
                            progress={1}
                            color={'#efefef'}
                        />
                    </View>

                }
            />

        );
    }
}
const styles = StyleSheet.create({
    item: {
        flex: 1,
    },
    itemWrapper: {
        flex: 1,
        flexDirection: 'row',
        // borderBottomWidth: 1,
        // borderBottomColor:'#efefef',
        alignItems: 'center',
        paddingVertical: 10,
    
    },
    rightSide: {
        flex: 2,
    },
    leftSide: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    percentage:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        justifyContent: "space-evenly",
        padding: 10
    }
 
});