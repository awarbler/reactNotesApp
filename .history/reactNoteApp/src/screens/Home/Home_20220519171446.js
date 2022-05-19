import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home(){
    return (
        <View style={styles.screen}>
            <Text> Hello World </Text>
            <Text> Hello World </Text>
            <Text> Hello World </Text>
            <Text> Hello World </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    screen:{
        flex: 1, // 100 percent of the space
        justifyContent: 'center',
        alignItems: 'center'

    },
    oneFourth:{
        flex:1
    }
})