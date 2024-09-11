import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabNavigator from '../MainTab'; // Adjust path as necessary
import HomeScreen from '../../../Screens/HomeScreens/HomeScreen';
import DBNavigator from '../Navigation/DBNavigator';
import AirtimeScreen from '../../../Screens/HomeScreens/AirtimeScreen';
import DataScreen from '../../../Screens/HomeScreens/DataScreen';
import SMSScreen from '../../../Screens/HomeScreens/SMSScreen';
import VoiceScreen from '../../../Screens/HomeScreens/VoiceScreen';
import HistoryP from '../../../Screens/HomeScreens/HistoryP'
import BuyAirtime from '../../../Screens/HomeScreens/BuyAirtime';
import DataBundleScreen from '../../../Screens/HomeScreens/DataBundleScreens/DataBundleScreen';
import DataBundlesScreen from '../../../Screens/HomeScreens/DataBundleScreens/DataBundlesScreen';
import FibreScreen from '../../../Screens/HomeScreens/DataBundleScreens/FibreScreen';
import SocialScreen from '../../../Screens/HomeScreens/DataBundleScreens/SocialScreen';
import MashUp from '../../../Screens/HomeScreens/DataBundleScreens/Mashup&Others/MashUp';
import FlexiScreen from '../../../Screens/HomeScreens/DataBundleScreens/Mashup&Others/FlexiScreen';
import GhsOneScreen from '../../../Screens/HomeScreens/DataBundleScreens/Mashup&Others/GhsOneScreen';
import Just4UScreen from '../../../Screens/HomeScreens/Just4UScreen';
import GhsFiveScreen from '../../../Screens/HomeScreens/DataBundleScreens/Mashup&Others/GhsFiveScreen';
import GhsTenScreen from '../../../Screens/HomeScreens/DataBundleScreens/Mashup&Others/GhsTenScreen';
import OthersScreen from '../../../Screens/HomeScreens/DataBundleScreens/Mashup&Others/OthersScreen';
import SendMomoScreen from '../../../Screens/HomeScreens/SendMomoScreen';
import AccountScreen from '../../../Screens/MoreScreens/AccountScreen';
import BViewAll from '../../../Screens/HomeScreens/BViewAll';
import QViewAll from '../../../Screens/HomeScreens/QViewAll';
import Review from '../../../Screens/HomeScreens/Review';
import BuyAirtime1 from '../../../Screens/HomeScreens/BuyAirtime1';


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
        <Stack.Screen name="History" component={HistoryP} options={{headerShown:false}}/>
        <Stack.Screen name="Buy" component={BuyAirtime} options={{headerShown:false}}/>
        <Stack.Screen name="Bundle" component={DataBundleScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Bundles" component={DataBundlesScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Fibre" component={FibreScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Social" component={SocialScreen} options={{headerShown:false}}/>
        <Stack.Screen name="MashUp" component={MashUp} options={{headerShown:false}}/>
        <Stack.Screen name="Flexi" component={FlexiScreen} options={{headerShown:false}}/>
        <Stack.Screen name="GhsOne" component={GhsOneScreen} options={{headerShown:false}}/>
        <Stack.Screen name="GhsFive" component={GhsFiveScreen} options={{headerShown:false}}/>
        <Stack.Screen name="GhsTen" component={GhsTenScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Others" component={OthersScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Just4U" component={Just4UScreen} options={{headerShown:false}}/>
        <Stack.Screen name="SendMomo" component={SendMomoScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Account" component={AccountScreen} options={{headerShown:false}}/>
        <Stack.Screen name="BView" component={BViewAll} options={{headerShown:false}}/>
        <Stack.Screen name="QView" component={QViewAll} options={{headerShown:false}}/>
        <Stack.Screen name="Review" component={Review} options={{headerShown:false}}/>
        <Stack.Screen name="Buy1" component={BuyAirtime1} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
