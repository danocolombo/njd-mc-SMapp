const { NavigationContainer } = require('@react-navigation/native');
import FeedScreen from '../screens/FeedScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreatePostScreen from '../screens/CreatePostScreen';
const Stack = createNativeStackNavigator();
const Navigator = () => {
    return (
        <NavigationContainer>
            <CreatePostScreen />
        </NavigationContainer>
    );
};

export default Navigator;
