import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,Button} from 'react-native';
import Item from "./Item";

export default class Body extends Component {
    render() {
        return (
            <View style={styles.bodyStyle}>
                
                <View style={styles.titles}>
                    <View style={styles.leftTitles}>
                        <View><Text style={{color:'black',fontSize:22,fontWeight: 'bold'}}>Your bookshelf</Text></View>
                        <View><Text style={{color:'#959ea6',fontSize:13,fontWeight: 'bold'}}>23 Blocks</Text></View>
                    </View>
                    <View style={styles.rightTitles}>
                        <Image
                            source={require('../Assets/image/four-squares.png')}
                        />
                    </View>
                </View>
                <View style={styles.mainOptions}>
                    <Item/>
                </View>
            
            
            </View>
        );
    }
}
const styles = StyleSheet.create({
    bodyStyle: {
        flex: 2,
        backgroundColor:'#ffffff'
    },
    titles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        paddingHorizontal: 11,
        alignItems: 'center'
    },
    leftTitles:{
        flexDirection: 'row',
        flex:1.2,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rightTitles:{
        flex:1,
        alignItems:'flex-end',
        opacity:.1
    },
    mainOptions:{
        flex:6,
    }
    
});