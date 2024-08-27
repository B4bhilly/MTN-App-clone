import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Screens/HomeScreens/HomeScreen'; // Adjust path as necessary
import ShopScreen from '../../Screens/ShopScreens/ShopScreen';
import MomoScreen from '../../Screens/MomoScreens/MomoScreen';
import MoreScreen from '../../Screens/MoreScreens/MoreScreen';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Shop') {
            iconName = 'cart-outline';
          } else if (route.name === 'Momo') {
            iconName = 'cash-outline';
          } else if (route.name === 'More') {
            iconName = 'ellipsis-vertical-outline';
          }

          return (<Ionicons name={iconName} size={size} color={color} />);
        },
        tabBarActiveTintColor: '#ebe41c', 
        tabBarInactiveTintColor: 'black',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
      <Tab.Screen name="Shop" component={ShopScreen} options={{headerShown:false}} />
      <Tab.Screen name="Momo" component={MomoScreen} options={{headerShown:false}} />
      <Tab.Screen name="More" component={MoreScreen} options={{headerShown:false}} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
