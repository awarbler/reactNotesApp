import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home({AppState}){
    const{allNotes, setNotes} = AppState;
    return ( // e = element i = index
    <View style={styles.screen}>
        {allNotes.map((e, i) =>{
            return <Text>e.noteTitle</Text>;
        })
        }
    </View>
        
        
    );
}
const styles = StyleSheet.create({
    screen:{
        flex: 1, // 100 percent of the space
        justifyContent: 'center',
        alignItems: 'center',
        //flexDirection: 'row'

    }
})