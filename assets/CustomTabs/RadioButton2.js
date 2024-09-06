import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const RadioButton2 = ({ label, value, selected, onSelect }) => {
  return (
    <View style={styles.radioButton}>
      <MaterialIcons
        name={selected === value ? 'radio-button-checked' : 'radio-button-unchecked'}
        size={24}
        color="black"
      />
      <Text style={styles.radioText}>{label}</Text>
    </View>
  );
};

const RadioButton2Group = () => {
  const [selectedValue, setSelectedValue] = useState('option1');

  return (
    <View style={styles.container}>
      {/* Entire row is wrapped in TouchableOpacity */}
      <TouchableOpacity
        style={[styles.bord, { flexDirection: 'row',opacity: selectedValue === 'option1' ? 1 : 0.5 }]}
        onPress={() => setSelectedValue('option1')}
      >
        <RadioButton2
          label="Momo"
          value="option1"
          selected={selectedValue}
          onSelect={setSelectedValue}
        />
        <View style={styles.pod}>
          <View style={styles.black}></View>
          <Text style={[styles.radioText, { fontSize: 11 }]}>4G BONUS *</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.bord, { borderBottomWidth: 0, flexDirection: 'row', opacity: selectedValue === 'option2' ? 1 : 0.5 }]}
        onPress={() => setSelectedValue('option2')}
      >
        <RadioButton2
          label="Airtime"
          value="option2"
          selected={selectedValue}
          onSelect={setSelectedValue}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 10,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    borderColor: 'grey',
  },
  radioText: {
    marginLeft: 10,
    fontSize: 16,
  },
  bord: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'grey',
    marginBottom: 10,
  },
  pod: {
    marginLeft: 'auto',
    marginRight: 20,
    paddingRight: 10,
    backgroundColor: '#ebe41c',
    height: 20,
    width: 80,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    flexDirection: 'row',
  },
  black: {
    height: '100%',
    width: '15%',
    backgroundColor: '#292a2e',
  },
});

export default RadioButton2Group;
