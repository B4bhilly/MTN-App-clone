import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MidnightScreen = () => {
  const navigation = useNavigation();

  const handleNavigationToBuy1 = () =>{
    navigation.navigate("Buy1");
  };

  return (
    <View style={styles.container}>
      <View style={styles.one}>
        <Text style={styles.bold}>
          This package can only be used between the hours of 12 am - 5 am
        </Text>
        <View style={styles.roll}>
          <TouchableOpacity
            style={[styles.tab2, { backgroundColor: "#292a2e" }]}
          >
            <View style={{ marginBottom: "auto" }}>
              <View style={styles.hi1}>
                <Text style={[styles.pad1, { color: "white" }]}>
                  Flexi Midnight Bundles
                </Text>
                <View style={styles.meat}>
                  <Text style={{ marginRight: 2, marginLeft: 2 }}>MIDNIGHT</Text>
                  <View style={styles.icon}>
                      <Ionicons name="moon-sharp" size={14} color="white" />
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.tab01}>
              <View style={[styles.bod, { paddingRight: "12.5%" }]}>
                <Text>Data</Text>
                <Text style={{ fontWeight: "bold" }}>53.00MB - 5.16GB </Text>
              </View>
              <View style={styles.bod1}>
                <Text>Cost</Text>
                <Text style={{ fontWeight: "bold" }}>0.03 - 2.99</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleNavigationToBuy1} style={styles.tab2}>
            <View style={{ marginBottom: "auto" }}>
              <View style={styles.hi1}>
                <Text style={styles.pad1}>7.27GB Midnight Bundles</Text>
                <View style={styles.meat}>
                  <Text style={{ marginRight: 4, marginLeft: 4 ,}}>REGULAR</Text>
                  <View style={styles.icon1}>
                    <MaterialIcons name="swap-vert" size={14} color="white" />
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.tab01}>
              <View style={[styles.bod, { paddingRight: "34%" }]}>
                <Text>Data</Text>
                <Text style={{ fontWeight: "bold" }}>7.27GB</Text>
              </View>
              <View style={styles.bod1}>
                <Text>Cost</Text>
                <Text style={{ fontWeight: "bold" }}>GHS 3</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "#ebf5f3",
            flex: 1,
            height: "100%",
            width: "100%",
            marginTop: 20,
          }}
        ></View>
      </View>
    </View>
  );
};

export default MidnightScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#292a2e",
      },
      one: {
        backgroundColor: "#ebf5f3",
        height: "100%",
        width: "100%",
        borderTopLeftRadius: 20,
        padding: 20,
        //marginBottom:50,
      },
      bold: {
        fontWeight: "bold",
        marginBottom: 20,
      },
      roll: {
        backgroundColor: "#ebf5f3",
        height: "82%",
        width: "100%",
        marginBottom: 90,
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
        width: "28%",
      },
      icon: {
        backgroundColor: "#292a2e",
        width: "auto",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingLeft: 4,
        paddingRight: 4,
      },
      icon1: {
        backgroundColor: "#292a2e",
        width: "auto",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingLeft: 3,
        paddingRight: 3,
      },
});
