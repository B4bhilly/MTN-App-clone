import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabNavigator from '../MainTab'; // Adjust path as necessary
import HomeScreen from '../../../Screens/HomeScreens/HomeScreen';
import DBNavigator from '../Navigation/DBNavigator';
import HistoryPage from '../../../Screens/HomeScreens/HistoryPage';
import AirtimeScreen from '../../../Screens/HomeScreens/AirtimeScreen';
import DataScreen from '../../../Screens/HomeScreens/DataScreen';
import SMSScreen from '../../../Screens/HomeScreens/SMSScreen';
import VoiceScreen from '../../../Screens/HomeScreens/VoiceScreen';
import BuyAirtime from '../../../Screens/HomeScreens/BuyAirtime';
import DataBundleScreen from '../../../Screens/HomeScreens/DataBundleScreen';
import DataBundlesScreen from '../../../Screens/HomeScreens/DataBundlesScreen';
import FibreScreen from '../../../Screens/HomeScreens/FibreScreen';
import SocialScreen from '../../../Screens/HomeScreens/SocialScreen';
import MashUp from '../../../Screens/HomeScreens/Mashup&Others/MashUp';
import FlexiScreen from '../../../Screens/HomeScreens/Mashup&Others/FlexiScreen';


const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainTabs" component={MainTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="DBNavigator" component={DBNavigator} options={{headerShown:false}}/>
        <Stack.Screen name="Airtime" component={AirtimeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Data" component={DataScreen} options={{headerShown:false}}/>
        <Stack.Screen name="SMS" component={SMSScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Voice" component={VoiceScreen} options={{headerShown:false}}/>
        <Stack.Screen name="History" component={HistoryPage} options={{headerShown:false}}/>
        <Stack.Screen name="Buy" component={BuyAirtime} options={{headerShown:false}}/>
        <Stack.Screen name="Bundle" component={DataBundleScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Bundles" component={DataBundlesScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Fibre" component={FibreScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Social" component={SocialScreen} options={{headerShown:false}}/>
        <Stack.Screen name="MashUp" component={MashUp} options={{headerShown:false}}/>
        <Stack.Screen name="Flexi" component={FlexiScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
