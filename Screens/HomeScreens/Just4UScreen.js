import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";

const Just4UScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <View style={styles.red}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{ fontSize: 20, paddingLeft: 10, fontWeight: "bold" }}>
            Just4U Bundles
            </Text>
        </View>
        <View style={styles.one}></View>
    </View>
  );
};

export default Just4UScreen;

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
  one:{
    backgroundColor:'white',
    height:'100%',
    width:'auto',
    borderTopLeftRadius:20,
    
  },
});