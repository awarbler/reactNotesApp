import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '/Users/awarbler/Desktop/SCHOOL/CSE 310 /reactNotesApp/reactNoteApp/src/screens/Home/Home.js';

const Stack = createNativeStackNavigator();

export default function AppNavigation(AppState){
    return (
      <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen name="All Notes" >
        {props => <Home {...props} extraData={someData} />}
      </Stack.Screen>
      
      </Stack.Navigator>
    </NavigationContainer>
 
      );
}