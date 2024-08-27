import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MainTab from './assets/CustomTabs/MainTab';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useRef,useState } from 'react';
import MainStackNavigator from './assets/CustomTabs/Navigation/MainStackNavigation';

const Stack = createStackNavigator()

const MainLayout= () =>{
  const navigationRef = useRef(null);
  const [initialRoute, setInitialRoute] = useState('welcome');

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={MainTab} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MainStackNavigator/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop:'auto',
  },
});
