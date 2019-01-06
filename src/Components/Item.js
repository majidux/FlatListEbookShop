import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList, TouchableHighlight,Alert} from 'react-native';
import dataItem from './DataItem';


export default class Item extends Component {
    
    
    render() {
        const Alerti = () => Alert.alert('Added to Card');
        const itemSeparator = () =>
            
            <View style={{height:1,backgroundColor:'grey',opacity:.1}}></View>
        
        return (
            <View style={{flex: 1}}>
                <FlatList
                    data={dataItem}
                    keyExtractor={(item) => item.writer}
                    ItemSeparatorComponent={itemSeparator}
                    renderItem={({item}) =>
                        <TouchableHighlight underlayColor='rgba(0,0,0,.1)' onPress={Alerti}>
                            
                                                <View style={styles.item}>
                                <View style={styles.itemWrapper}>
                                    <View style={styles.leftSide}>
                                        <Image
                                            source={item.image}
                                        />
                                    </View>
                                    
                                    <View style={styles.rightSide}>
                                        <View style={styles.titles}><Text
                                            style={{color: '#9da2a8'}}>{item.writer}</Text></View>
                                        <View style={styles.titles}><Text
                                            style={{color: 'black', fontSize: 16}}>{item.bookTitle}</Text></View>
                                        <View style={styles.percentage}>
                                            <View style={{backgroundColor: '#dfe1e3', height: 3, flex: 4}}>
                                                <View style={{backgroundColor: '#5797e0', height: 3, width: 160}}></View>
                                            </View>
                                            <View style={{flex: 1, alignItems: 'center'}}><Text
                                                style={{color: '#9da2a8', fontSize: 12}}>{item.howMuch}%</Text></View>
                                        </View>
                                    </View>
                                
                                </View>
                            
                            </View>
                        </TouchableHighlight>
                        
                    }
                />
            
            </View>
        
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
    percentage: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        justifyContent: "space-evenly",
        padding: 10
    }
    
});