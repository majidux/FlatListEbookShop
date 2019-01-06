import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import headerData from './HeaderData';

let [Data] = headerData;
export default class Header extends Component {
    render() {
        const Alerti = () => Alert.alert('Loading ...');
        
        return (
            <View style={styles.allHeader}>
                
                
                <View style={styles.icons}>
                    <TouchableOpacity onPress={Alerti} title={'press'}>
                        <View style={styles.image}>
                            <Image
                                source={require('../Assets/image/left.png')}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={Alerti} title={'press'}>
                        <View style={styles.image}>
                            <Image
                                source={require('../Assets/image/search.png')}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                
                
                <View style={styles.imageText}>
                    <View style={styles.leftHeader}>
                        <Image
                            source={require('../Assets/image/EBook.png')}
                            style={{width: 130, height: 170}}
                        />
                    </View>
                    
                    <View style={styles.rightHeader}>
                        <View><Text style={{fontSize: 12}}>{Data.when}</Text></View>
                        <View><Text style={{fontSize: 24, color: 'black'}}>{Data.where}</Text></View>
                        <View style={styles.percentage}>
                            <View style={{backgroundColor: '#dfe1e3', height: 3, flex: 4}}>
                                <View style={{backgroundColor: '#6a7081', height: 3, width: 160}}></View>
                            </View>
                            <View style={{flex: 1, alignItems: 'center'}}><Text>{Data.howMuch}%</Text></View>
                        </View>
                        
                        <View>
                            <TouchableOpacity onPress={Alerti} title={'press'} style={styles.continueText}>
                                <Text style={{fontSize: 15}}>Continue reading</Text>
                                <Image
                                    source={require('../Assets/image/right.png')}
                                    style={{width: 10, height: 10}}
                                />
                            </TouchableOpacity>
                        
                        </View>
                    </View>
                
                </View>
            
            
            </View>
        );
    }
}
const styles = StyleSheet.create({
    allHeader: {
        flex: 1,
        backgroundColor: '#f3f4f6',
        paddingHorizontal: 10,
        paddingTop: 10,
        justifyContent: 'space-between'
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image: {},
    imageText: {
        flexDirection: 'row',
        
    },
    leftHeader: {
        flex: 1
    },
    rightHeader: {
        flex: 1.7,
        justifyContent: 'space-evenly',
    },
    continueText: {
        borderWidth: 2,
        borderColor: '#e7e7e7',
        borderRadius: 10,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginRight: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    percentage: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});