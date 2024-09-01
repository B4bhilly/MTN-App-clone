import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const RadioButton = ({ label, value, selected, onSelect }) => {
  return (
    <TouchableOpacity onPress={() => onSelect(value)} style={styles.radioButton}>
      <MaterialIcons
        name={selected === value ? 'radio-button-checked' : 'radio-button-unchecked'}
        size={24}
        color="black"
        fontWeight={selected === label ?'bold':'normal'}
      />
      <Text style={styles.radioText}>{label}</Text>
    </TouchableOpacity>
  );
};

const RadioButtonGroup = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <View style={styles.container}>
      <RadioButton
        label="Me ()"
        value="option1"
        selected={selectedValue}
        onSelect={setSelectedValue}
      />
       <RadioButton
        label="A new recipient"
        value="option2"
        selected={selectedValue}
        onSelect={setSelectedValue}
      />
      {/*<RadioButton
        label="Option 3"
        value="option3"
        selected={selectedValue}
        onSelect={setSelectedValue}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 20,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom:20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "grey",
  },
  radioText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default RadioButtonGroup;
