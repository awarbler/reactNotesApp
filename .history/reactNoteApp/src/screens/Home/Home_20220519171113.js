import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home(){
    return (
        <View style={styles.screen}>
        <Text> Hello World </Text>

        <Text> Hello World </Text>

        <Text> Hello World </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    screen:{
        justifyContent: 'center',
        alignItems: 'center'

    }
})