import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
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
    <SafeAreaProvider> 
      <View style={styles.container}>
        <MainStackNavigator/>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
