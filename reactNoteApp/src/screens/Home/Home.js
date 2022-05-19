import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';

export default function Home({ AppState }){
    const{allNotes,setNotes} = AppState;
    // set value press arrow function 
    const handlePress = (element) => {
        // text object one press event 
        setNotes(element)
    }
    // e = element i = index
    return (
    <View style={styles.screen}>
        { allNotes.map((e,i)=> {
            return ( // create a link in the titles 
                <TouchableOpacity onPress={() => handlePress(e)} >
                    <Text key={i}>{e.noteTitle}</Text>
                </TouchableOpacity>
            )
        }) }
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