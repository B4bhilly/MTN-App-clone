import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const RadioButton1 = ({ label, value, selected, onSelect }) => {
  return (
    <TouchableOpacity
      onPress={() => onSelect(value)}
      style={styles.radioButton}
    >
      <MaterialIcons
        name={
          selected === value ? "radio-button-checked" : "radio-button-unchecked"
        }
        size={24}
        color="black"
        fontWeight={selected === label ? "bold" : "normal"}
      />
      <Text style={styles.radioText}>{label}</Text>
    </TouchableOpacity>
  );
};

const RadioButton1Group = () => {
  const [selectedValue, setSelectedValue] = useState('option1');

  return (
    <View style={styles.container}>
      <View style={styles.bord}>
        <RadioButton1
          label="Me ()"
          value="option1"
          selected={selectedValue}
          onSelect={setSelectedValue}
        />
      </View>
      <View style={[styles.bord,{paddingTop:20}]}>
        <RadioButton1
          label="A new recipient"
          value="option2"
          selected={selectedValue}
          onSelect={setSelectedValue}
        />
        {selectedValue === "option2" && (
          <View style={styles.box}>
            <TextInput
              placeholder="Enter Number..."
              value={Number}
              keyboardType="numeric"
              maxLength={10}
            />
            <Pressable>
              <MaterialIcons
                style={{ top: 12 }}
                name="contact-phone"
                size={24}
                color="black"
              />
            </Pressable>
        </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 10,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 20,
    borderColor: "grey",
  },
  radioText: {
    marginLeft: 10,
    fontSize: 16,
  },
  box: {
    height: 55,
    width: "auto",
    borderWidth: StyleSheet.hairlineWidth,
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    marginBottom: 20,
    borderRadius: 5,
    borderColor: "grey",
  },
  bord:{
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "grey",
  },
});

export default RadioButton1Group;
