import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AntDesign, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const Review = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("option1");

  // RadioButton2 Component
  const RadioButton2 = ({ label, value, selected }) => {
    return (
      <View style={styles.radioButton}>
        <MaterialIcons
          name={
            selected === value
              ? "radio-button-checked"
              : "radio-button-unchecked"
          }
          size={24}
          color="black"
        />
        <Text style={styles.radioText}>{label}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.red}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, paddingLeft: 10, fontWeight: "bold" }}>
          Who is this Purchase for?
        </Text>
      </View>
      <View style={styles.one}>
        <View style={styles.two}>
          <Text style={styles.bold}>Data Bundle @ Undefined</Text>
          <Text style={{ lineHeight: 40 }}>undefined</Text>
          <Text>For My Number()</Text>
        </View>
        <View style={styles.three}>
          <View style={styles.four}>
            <View style={styles.five}>
              <Text style={styles.white}>Select payment method</Text>
            </View>
            <View style={styles.container1}>
              {/* Entire row is wrapped in TouchableOpacity */}
              <TouchableOpacity
                style={[
                  styles.bord,
                  {
                    flexDirection: "row",
                    opacity: selectedValue === "option1" ? 1 : 0.5,
                  },
                ]}
                onPress={() => setSelectedValue("option1")}
              >
                <RadioButton2
                  label="Momo"
                  value="option1"
                  selected={selectedValue}
                  onSelect={setSelectedValue}
                />
                <View style={styles.pod}>
                  <View style={styles.black}></View>
                  <Text style={[styles.radioText, { fontSize: 11 }]}>
                    4G BONUS *
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.bord,
                  {
                    borderBottomWidth: 0,
                    flexDirection: "row",
                    opacity: selectedValue === "option2" ? 1 : 0.5,
                  },
                ]}
                onPress={() => setSelectedValue("option2")}
              >
                <RadioButton2
                  label="Airtime"
                  value="option2"
                  selected={selectedValue}
                  onSelect={setSelectedValue}
                />
              </TouchableOpacity>
            </View>
          </View>
          {selectedValue === "option1" && (
            <View style={styles.box}>
              <Text style={styles.text}>
                *Get +50% when you pay with Momo only on a 4G Device
              </Text>
            </View>
          )}
        </View>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>CANCEL</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button1}>
          <Text style={styles.text}>PAY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebe41c",
  },
  red: {
    height: "12.5%",
    width: "100%",
    backgroundColor: "#ebe41c",
    flexDirection: "row",
    paddingTop: 30,
    paddingLeft: 20,
    alignItems: "center",
  },
  one: {
    backgroundColor: "#e3dddc",
    borderTopRightRadius: 20,
    height: "100%",
  },
  two: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
    marginBottom: 20,
  },
  three: {
    padding: 20,
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: "#ebf5f3",
    borderTopLeftRadius: 20,
    height: "100%",
  },
  bold: {
    fontWeight: "bold",
    fontSize: 20,
  },
  bottom: {
    height: 90,
    width: "auto",
    marginTop: "auto",
    backgroundColor: "white",
    borderTopRightRadius: 20,
    padding: 20,
    flexDirection: "row",
  },
  button: {
    height: 50,
    width: 120,
    borderRadius: 50,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
  button1: {
    height: 50,
    width: 120,
    borderRadius: 50,
    backgroundColor: "#ebe41c",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30,
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
  },
  four: {
    height: "18%",
    width: "100%",
    borderRadius: 10,
    backgroundColor: "white",
    overflow: "hidden",
    // Shadow properties
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 3, height: 3 }, // Shadow offset
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 5, // Shadow blur radius
    elevation: 5, // Android shadow
  },
  five: {
    backgroundColor: "#292a2e",
    width: "100%",
    height: "30%",
    justifyContent: "center",
    paddingLeft: 20,
  },
  white: {
    color: "white",
    fontWeight: "bold",
  },
  container1: {
    flexDirection: "column",
    padding: 10,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 10,
    borderColor: "grey",
  },
  radioText: {
    marginLeft: 10,
    fontSize: 16,
  },
  bord: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "grey",
    marginBottom: 10,
  },
  pod: {
    marginLeft: "auto",
    marginRight: 20,
    paddingRight: 10,
    backgroundColor: "#ebe41c",
    height: 20,
    width: 80,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    flexDirection: "row",
  },
  black: {
    height: "100%",
    width: "15%",
    backgroundColor: "#292a2e",
  },
  box: {
    position: "absolute",
    top: 200,
    left: 50
  },
});
