import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AirtimeScreen from '../../../Screens/HomeScreens/AirtimeScreen';
import DataScreen from '../../../Screens/HomeScreens/DataScreen';
import SMSScreen from '../../../Screens/HomeScreens/SMSScreen';

export default function DBNavigator({ navigation, route }) {
  const { initialTab } = route.params || {}; // Get the initialTab from navigation params
  const [selectedTab, setSelectedTab] = useState('Airtime'); // Default tab is 'Airtime'

  // Set the initial tab from navigation params if provided
  useEffect(() => {
    if (initialTab) {
      setSelectedTab(initialTab);
    }
  }, [initialTab]);

  const renderContent = () => {
    switch (selectedTab) {
      case 'Airtime':
        return <AirtimeScreen />;
      case 'Data':
        return <DataScreen />;
      case 'SMS':
        return <SMSScreen />;
      default:
        return <AirtimeScreen />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.red}>
        <TouchableOpacity style={{ marginRight: 15 }} onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20 }}>Detailed BalanceScreen</Text>
      </View>
      <View style={styles.tabContainer}>
        <View style={styles.tabBar}>
          <TouchableOpacity
            onPress={() => setSelectedTab('Airtime')}
            style={[styles.tab, selectedTab === 'Airtime' && styles.activeTab]}>
            <Text style={styles.tabLabel}>Airtime</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedTab('Data')}
            style={[styles.tab, selectedTab === 'Data' && styles.activeTab]}>
            <Text style={styles.tabLabel}>Data</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedTab('SMS')}
            style={[styles.tab, selectedTab === 'SMS' && styles.activeTab]}>
            <Text style={styles.tabLabel}>SMS</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>
          {renderContent()}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292a2e',
  },
  red: {
    backgroundColor: '#ebe41c',
    height: '12.5%',
    width: '100%',
    paddingTop: 50,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabContainer: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: '#292a2e',
    height: 50,
    flexDirection: 'row',
  },
  tab: {
    justifyContent: 'center',
    marginLeft: 20,
  },
  activeTab: {
    borderBottomColor: 'white',
    borderBottomWidth: 4,
  },
  tabLabel: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#292a2e',
  },
});
