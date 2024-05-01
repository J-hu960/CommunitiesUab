import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign'; 


import HomeScreen  from './screens/HomeScreen';
import { NewCommunity } from './screens/NewCommunity';
import { Profile } from './screens/Profile';
import Login from './screens/No-Auth/Login';
import Register from './screens/No-Auth/Register';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainTabs}  options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}  />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
function MainTabs() {
  return (
    <Tab.Navigator>
          <Tab.Screen name="New Community" options={{ tabBarIcon:()=>(<Icon name="pluscircleo" size={30} color="black" />) }} component={NewCommunity} />
          <Tab.Screen name="Home"  options={{headerShown: false , tabBarIcon:()=>(<Icon name="home" size={30} color="black" />) }}  component={HomeScreen} />
          <Tab.Screen name="Profile" options={{tabBarIcon:()=>(<Icon name="user" size={30} color="black" />) }}   component={Profile} />

    </Tab.Navigator>
  );
}

export default App