import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View, SafeAreaProvider } from 'react-native';
import FeedScreen from './src/screens/FeedScreen';
import CreatePostScreen from './src/screens/CreatePostScreen';
import Navigator from './src/navigation';
export default function App() {
    return (
        <View style={styles.container}>
            <Navigator />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
