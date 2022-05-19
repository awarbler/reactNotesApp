import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import AppNavigation from '../AppNavigation/AppNavigation';

export default function AppState(){
    const[allNotes, setAllNotes] = useState([{noteId: 1, noteTitle: 'First Idea', noteText: 'This is first note'}, {noteId: 2, noteTitle: 'Second Idea', noteText:'Second note'}]);
    const[note, setNotes] = useState({});

    const AppState ={
        allNotes,
        setAllNotes,
        note,
        setNotes
    };

    setAllNotes([{"noteText": " Hello My Friend "}]);
    return <AppNavigation/>
}