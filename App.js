import * as React from 'react';
import { PrivateRoutes, PublicRoutes } from './routes';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign'; 

import HomeScreen from './screens/HomeScreen';
import NewCommunity from './screens/NewCommunity';
import Profile from './screens/Profile';
import Login from './screens/No-Auth/Login';
import Register from './screens/No-Auth/Register';
import MyCommunities from './screens/MyCommunities';
import Community from './screens/Community';
import UserContextProvider from './context/UserContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <UserContextProvider>
            <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={PublicRoutes.LOGIN}>
                    <Stack.Screen name={PrivateRoutes.MAIN} component={MainTabs} options={{ headerShown: false }} />
                    <Stack.Screen name={PrivateRoutes.COMMUNITY} component={Community} options={{ headerShown: false }} />
                    <Stack.Screen name={PublicRoutes.LOGIN} component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name={PublicRoutes.SIGNUP} component={Register} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
            </>
        </UserContextProvider>
    );
};

function MainTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name={PrivateRoutes.HOME} options={{ headerShown: false, tabBarIcon: () => (<Icon name="home" size={30} color="black" />) }} component={HomeScreen} />
            <Tab.Screen name={PrivateRoutes.NEW_COMMUNITY} options={{ headerShown: false, tabBarIcon: () => (<Icon name="pluscircleo" size={30} color="black" />) }} component={NewCommunity} />
            <Tab.Screen name={PrivateRoutes.MYCOMMUNITIES} options={{ headerShown: false, tabBarIcon: () => (<Icon name="inbox" size={30} color="black" />) }} component={MyCommunities} />
            <Tab.Screen name={PrivateRoutes.PROFILE} options={{ headerShown: false, tabBarIcon: () => (<Icon name="user" size={30} color="black" />) }} component={Profile} />
        </Tab.Navigator>
    );
}

export default App;
