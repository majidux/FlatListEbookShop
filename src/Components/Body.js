import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,Alert, TouchableOpacity} from 'react-native';
import Item from "./Item";

export default class Body extends Component {
    render() {
        const Alerti = () => Alert.alert('Sort by :');
        return (
            <View style={styles.bodyStyle}>
                
                <View style={styles.titles}>
                    <View style={styles.leftTitles}>
                        <View><Text style={{color: 'black', fontSize: 22, fontWeight: 'bold'}}>Your
                            bookshelf</Text></View>
                        <View><Text style={{color: '#959ea6', fontSize: 13, fontWeight: 'bold'}}>23 Blocks</Text></View>
                    </View>
                    
                    <View style={styles.rightTitles}>
                        <TouchableOpacity onPress={Alerti} title={'press'}>
                            <Image
                                source={require('../Assets/image/four-squares.png')}
                            />
                        </TouchableOpacity>
                    
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
    },
    titles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        paddingHorizontal: 11,
        alignItems: 'center',
    },
    leftTitles: {
        flexDirection: 'row',
        flex: 1.2,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rightTitles: {
        flex: 1,
        alignItems: 'flex-end',
        opacity: .1
    },
    mainOptions: {
        flex: 6,
    }
    
});