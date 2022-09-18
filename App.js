import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Navigator from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Amplify, Auth, Datastore } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';

// Amplify.configure(awsconfig);
Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

function App() {
    const [authUser, setAuthUser] = useState(null);
    useEffect(() => {
        Auth.currentAuthenticatedUser().then(setAuthUser);
    }, []);
    console.log(authUser);
    return (
        <SafeAreaProvider style={styles.container}>
            <StatusBar style='auto' />
            <Navigator />
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        // marginTop: 50,
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
export default withAuthenticator(App);
