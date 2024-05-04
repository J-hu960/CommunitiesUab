import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign'; 


import HomeScreen  from './screens/HomeScreen';
import { NewCommunity } from './screens/NewCommunity';
import  Profile  from './screens/Profile';
import Login from './screens/No-Auth/Login';
import Register from './screens/No-Auth/Register';
import MyCommunities from './screens/MyCommunities';
import Community from './screens/Community';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainTabs}  options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}  />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}  />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
function MainTabs() {
  return (
    <Tab.Navigator>
          <Tab.Screen name="Home"  options={{headerShown: false , tabBarIcon:()=>(<Icon name="home" size={30} color="black" />) }}  component={HomeScreen} />
          <Tab.Screen name="New Community"  options={{ headerShown: false,tabBarIcon:()=>(<Icon name="pluscircleo" size={30} color="black" />),headerShown: false }} component={NewCommunity} />
          <Tab.Screen name="MyCommunities"  options={{headerShown: false,tabBarIcon:()=>(<Icon name="inbox" size={30} color="black" />) }}  component={MyCommunities} />      
          <Tab.Screen name="Profile" options={{headerShown: false,tabBarIcon:()=>(<Icon name="user" size={30} color="black" />) }}   component={Profile} />
          <Tab.Screen name="Community" options={{headerShown: false,tabBarIcon:()=>(<Icon name="user" size={30} color="black" />) }}   component={Community} />
          <Tab.Screen name="Login" options={{headerShown: false,tabBarIcon:()=>(<Icon name="user" size={30} color="black" />) }}   component={Login} />
          <Tab.Screen name="Register" options={{headerShown: false,tabBarIcon:()=>(<Icon name="user" size={30} color="black" />) }}   component={Register} />
    </Tab.Navigator>
  );
}

export default App