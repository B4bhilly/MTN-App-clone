import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import ShopScreen from "../ShopScreens/ShopScreen";
import HomeScreen from "./HomeScreen";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const ApprovalScreen = ({navigation}) => {
    const handleNavigationToHome = () =>{
        navigation.navigate('Home');
    };

    const handleNavigationToShop = () =>{
        navigation.navigate('Shop');
    };
    const handleNavigationToMainTab =() =>{
        navigation.navigate('MainTab')
    };
  return (
    <View style={styles.container}>
      <View style={styles.zero}>
          <View style={styles.midc}>

          </View>
          <View style={styles.mid}>

          </View>
      </View>
      <View style={styles.bottom}>
            <TouchableOpacity
            onPress={handleNavigationToMainTab}
            style={styles.button}>
            <Text style={styles.text}>SHOP</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={handleNavigationToMainTab}
            style={styles.button1}
            >
            <Text style={styles.text}>HOME</Text>
            </TouchableOpacity>
      </View>
    </View>
  );
};

export default ApprovalScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    flex: 1,
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
  mid:{
    height: 150,
    width: 300,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:12,
    position:'absolute',
    zIndex:'1,'
  },
  midc:{
    height: 80,
    width: 80,
    borderRadius:100,
    backgroundColor:'orange',
    justifyContent:'center',
    alignItems:'center',
    top:270,
    borderWidth:4,
    borderColor:'white',
    position:'absolute',
    zIndex:2,
  },
  zero:{
    height:'100%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',

  },
});
