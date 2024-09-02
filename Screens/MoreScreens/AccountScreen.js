import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const AccountScreen = ({ navigation }) => {
  const handleNavigationToHistory = () => {
    navigation.navigate("History");
  };
  return (
    <View style={styles.container}>
      <View style={styles.red}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, paddingLeft: 10, fontWeight: "bold" }}>
          My Account
        </Text>
      </View>
      <View style={styles.one}>
        <TouchableOpacity style={styles.two}>
          <View>
            <Text style={styles.text}>SIM registration</Text>
            <Text>Register your SIM card with convenience </Text>
          </View>
          <AntDesign name="right" size={15} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.two}>
          <View>
            <Text style={styles.text}>E-Sim activation</Text>
            <Text>Request an e-sim for your device </Text>
          </View>
          <AntDesign name="right" size={15} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleNavigationToHistory}
          style={styles.two}
        >
          <View>
            <Text style={styles.text}>Account History</Text>
            <Text>Check your account history here</Text>
          </View>
          <AntDesign name="right" size={15} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.two}>
          <View>
            <Text style={styles.text}>Homepage Background</Text>
            <Text>Change the look of your homepage here</Text>
          </View>
          <AntDesign name="right" size={15} color="black" />
        </TouchableOpacity>
        <View style={styles.two}>
          <View>
            <Text style={styles.text}>Current plan</Text>
            <Text>XCNGRE343 534 ASSDP21</Text>
          </View>
        </View>
        <View style={styles.two}>
          <View>
            <Text style={styles.text}>SIM activation date</Text>
            <Text>Monday, January 13, 2024.</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AccountScreen;

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
    flex: 1,
    height: "100%",
    backgroundColor: "white",
    paddingLeft: 20,
    paddingRight: 20,
  },
  two: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "grey",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingBottom: 15,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
