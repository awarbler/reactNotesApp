import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import AppNavigation from '../AppNavigation/AppNavigation';

export default function AppState(){
    const[allNotes, setAllNotes] = useState([]);
    const[notes, setNotes] = useState({});

    setAllNotes([{"noteText": " Hello My Friend "}]);
    return <AppNavigation/>
}