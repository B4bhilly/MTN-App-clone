import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import {
  AntDesign,
  Ionicons,
  MaterialIcons,
  Octicons,
  Entypo,
} from "@expo/vector-icons";

const FibreScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.red}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, paddingLeft: 10, fontWeight: "bold" }}>
          Who is this Purchase for
        </Text>
      </View>

      <View style={{ backgroundColor: "#dee0e3", borderTopRightRadius: 20 }}>
        <View style={styles.one}>
          <Text>Selected products</Text>
          <Text>Broadband Bundles</Text>
        </View>
        <View style={styles.two}>
          <Text>Linked Broadband Accounts</Text>
          <Text style={styles.text}>No Linked Broadband Accounts</Text>
        </View>
        <View style={styles.butt}>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.text1}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FibreScreen;

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
    height: "5.5%",
    width: "100%",
    flexDirection: "row",
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: "space-between",
  },
  two: {
    backgroundColor: "#ebf5f3",
    height: "100%",
    width: "100%",
    borderTopRightRadius: 20,
    padding: 20,
  },
  text: {
    marginTop: 10,
    paddingBottom: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "grey",
  },
  butt: {
    backgroundColor: "white",
    height: "22.5%",
    width: "100%",
    marginTop: "auto",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    paddingTop: 20,
  },
  button1: {
    height: 50,
    width: 280,
    borderRadius: 50,
    backgroundColor: "#ebe41c",
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
