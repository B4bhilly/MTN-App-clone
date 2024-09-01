import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, Ionicons, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

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
        <View style={styles.one}>
          <TouchableOpacity style={styles.tab2}>
            <View style={{ marginBottom: "auto" }}>
              <View style={styles.hi1}>
                <Text style={styles.pad1}>400MB Kokrokoo Bundles</Text>
                <View style={styles.meat}>
                  <Text style={{ marginRight: 2, marginLeft: 2 }}>KOKROKOO</Text>
                  <View style={styles.icon1}>
                    <MaterialCommunityIcons name="weather-sunny" size={14} color="yellow" />                    
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.tab01}>
              <View style={[styles.bod, { paddingRight: "33.5%" }]}>
                <Text>Data</Text>
                <Text style={{ fontWeight: "bold" }}>400MB</Text>
              </View>
              <View style={styles.bod1}>
                <Text>Cost</Text>
                <Text style={{ fontWeight: "bold" }}>GHS 1.24</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tab2}>
            <View style={{ marginBottom: "auto" }}>
              <View style={styles.hi1}>
                <Text style={styles.pad1}>400MB Kokrokoo Bundles</Text>
                <View style={styles.meat}>
                  <Text style={{ marginRight: 2, marginLeft: 2 }}>KOKROKOO</Text>
                  <View style={styles.icon1}>
                    <MaterialCommunityIcons name="weather-sunny" size={14} color="yellow" />                    
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.tab01}>
              <View style={[styles.bod, { paddingRight: "33.5%" }]}>
                <Text>Data</Text>
                <Text style={{ fontWeight: "bold" }}>400MB</Text>
              </View>
              <View style={styles.bod1}>
                <Text>Cost</Text>
                <Text style={{ fontWeight: "bold" }}>GHS 1.24</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tab2}>
            <View style={{ marginBottom: "auto" }}>
              <View style={styles.hi1}>
                <Text style={styles.pad1}>400MB Kokrokoo Bundles</Text>
                <View style={styles.meat}>
                  <Text style={{ marginRight: 2, marginLeft: 2 }}>KOKROKOO</Text>
                  <View style={styles.icon1}>
                    <MaterialCommunityIcons name="weather-sunny" size={14} color="yellow" />                    
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.tab01}>
              <View style={[styles.bod, { paddingRight: "33.5%" }]}>
                <Text>Data</Text>
                <Text style={{ fontWeight: "bold" }}>400MB</Text>
              </View>
              <View style={styles.bod1}>
                <Text>Cost</Text>
                <Text style={{ fontWeight: "bold" }}>GHS 1.24</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
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
    padding:20,
    
  },
  tab01: {
    height: "55%",
    backgroundColor: "white",
    alignContent: "flex-end",
    margin: 1.5,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 5,
    paddingLeft: 20,
    flexDirection: "row",
    width: "auto",
  },
  tab2: {
    height: 100,
    width: "100%",
    backgroundColor: "#ebe41c",
    borderRadius: 10,
    marginTop: 20,
    overflow: "hidden",
  },
  hi1: {
    padding: 15,
    //paddingLeft:20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pad1: {
    paddingLeft: 10,
    fontWeight: "bold",
  },
  bod: {
    paddingRight: "33%",
    borderRightWidth: StyleSheet.hairlineWidth,
    borderColor: "grey",
  },
  bod1: {
    paddingLeft: "10%",
  },
  meat: {
    backgroundColor: "white",
    marginLeft: "auto",
    flexDirection: "row",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    overflow: "hidden",
    width: "auto",
  },
  icon1: {
    backgroundColor: "#292a2e",
    width: "auto",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: 4,
    paddingRight: 4,
  },
});