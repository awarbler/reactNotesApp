import AppState from './src/AppState/AppState';
import registerNNPushToken from 'native-notify';


export default function App() {
    registerNNPushToken(2720, 'H7wL3msGHJD6HaZ4rE0BYM');
    return <AppState/>;
 
}

