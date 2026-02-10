import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import MainTab from './assets/CustomTabs/MainTab';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useRef,useState } from 'react';
import MainStackNavigator from './assets/CustomTabs/Navigation/MainStackNavigation';
import { StatusBar } from 'expo-status-bar';

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
    <SafeAreaProvider> 
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.container}>
          <StatusBar style="auto" />

          <MainStackNavigator/>

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  SafeAreaView: {
    flex: 1,
    backgroundColor: 'red',
  },
});
