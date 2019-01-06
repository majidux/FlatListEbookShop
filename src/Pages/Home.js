import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Header from "../Components/Header";
import Body from "../Components/Body";

export default class Home extends Component {
    render() {
        return (
            <View style={styles.mainStyle}>
                <Header/>
                <Body/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    mainStyle: {
        flex: 1,
    }
});