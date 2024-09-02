import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import {
  Ionicons,
  Feather,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
  Octicons,
  FontAwesome6,
} from "@expo/vector-icons";

const BViewAll = ({ navigation }) => {
    const handleNavigationToAirtime = () => {
        navigation.navigate("DBNavigator",{initialTab:'Airtime'});
    };
    
    const handleNavigationToData = () => {
        navigation.navigate("DBNavigator",{initialTab:'Data'});
    };
    
    const handleNavigationToSMS = () => {
        navigation.navigate("DBNavigator",{initialTab:'SMS'});
    };

  return (
    <View style={styles.container}>
      <View style={styles.red}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, paddingLeft: 10, fontWeight: "bold" }}>
          Balances
        </Text>
      </View>
      <View style={styles.one}>
        <Text style={styles.yoo}>Homepage balances</Text>
        <View style={{padding:10,flexDirection:'row'}}>
            <TouchableOpacity
            onPress={handleNavigationToAirtime}
            style={styles.tab}
            >
            <View style={{ marginBottom: "auto" }}>
                <View style={styles.hi}>
                <Feather name="phone-call" size={14} color="black" />
                <Text style={styles.pad1}>AIRTIME</Text>
                </View>
            </View>

            <View style={styles.tab1}>
                <View style={styles.mid}>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>GHS 0.00</Text>
                </View>
                <Text style={{ fontWeight: "bold", fontSize: 10, paddingTop: 5 }}>
                BONUS :
                </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity
                    onPress={handleNavigationToData}
                    style={styles.tab}
                >
                    <View style={{ marginBottom: "auto" }}>
                    <View style={styles.hi}>
                        <MaterialIcons name="swap-vert" size={16} color="black" />
                        <Text style={styles.pad1}>DATA</Text>
                    </View>
                    </View>

                    <View style={styles.tab1}>
                    <View style={styles.mid}>
                        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                        12.90GB
                        </Text>
                    </View>
                    <Text
                        style={{ fontWeight: "bold", fontSize: 10, paddingTop: 5 }}
                    >
                        BONUS :
                    </Text>
                    </View>
            </TouchableOpacity>
        </View>
        <Text style={styles.yoo}>Other balances</Text>
        <View style={{ padding: 10, flexDirection: "row" }}>
            <TouchableOpacity
                onPress={handleNavigationToSMS}
                style={styles.tab}
            >
                <View style={{ marginBottom: "auto" }}>
                  <View style={styles.hi}>
                    <Feather name="mail" size={16} color="black" />
                    <Text style={styles.pad1}>SMS</Text>
                  </View>
                </View>

                <View style={styles.tab1}>
                  <View style={styles.mid}>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                      4,533 SMS
                    </Text>
                  </View>
                  <Text
                    style={{ fontWeight: "bold", fontSize: 10, paddingTop: 5 }}
                  >
                    BONUS :
                  </Text>
                </View>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BViewAll;

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
    height: "100%",
    width: "100%",
    backgroundColor: "#ebf5f3",
    borderTopRightRadius: 20,
  },
  yoo: {
    fontSize: 15,
    padding: 20,
    paddingBottom: -20,
  },
  tab: {
    height: 100,
    width: 150,
    backgroundColor: "#ebe41c",
    borderRadius: 10,
    margin: 10,
    overflow: "hidden",
    // Shadow properties
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 3, height: 3 }, // Shadow offset
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 5, // Shadow blur radius
    elevation: 5, // Android shadow
  },
  tab1: {
    height: "65%",
    backgroundColor: "white",
    alignContent: "flex-end",
    margin: 1.5,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 8,
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
    width: "auto",
    backgroundColor: "#ebe41c",
    borderRadius: 10,
    margin: 20,
    overflow: "hidden",
  },
  hi: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  hi1: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  pad: {
    paddingRight: 10,
    fontSize: 12,
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
  mid: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "grey",
    justifyContent: "center",
    height: "50%",
    width: "100%",
  },
  mid1: {
    borderRightWidth: StyleSheet.hairlineWidth,
    borderColor: "grey",
    justifyContent: "center",
    padding: 5,
    height: "55%",
    width: "auto",
    marginTop: -5,
  },
  txt: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "grey",
    fontSize: 10,
    marginBottom: 20,
  },
  man: {
    flexDirection: "row",
    paddingLeft: 20,
    padding: 20,
  },
  man1: {
    flexDirection: "row",
    paddingLeft: 20,
    marginBottom: 40,
  },
});
