import {ScrollView, StyleSheet, Text, View, TouchableOpacity,} from "react-native";
import React from "react";
import {Ionicons, Feather, AntDesign, MaterialIcons, MaterialCommunityIcons, Octicons, FontAwesome6,} from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  // Get the current date and time
  const currentDateTime = new Date().toLocaleString();

  const handleNavigationToAirtime = () => {
    navigation.navigate("DBNavigator",{initialTab:'Airtime'});
  };

  const handleNavigationToData = () => {
    navigation.navigate("DBNavigator",{initialTab:'Data'});
  };

  const handleNavigationToSMS = () => {
    navigation.navigate("DBNavigator",{initialTab:'SMS'});
  };

  const handleNavigationToBundle = () => {
    navigation.navigate("Bundle");
  };

  const handleNavigationToJust4U = () => {
    navigation.navigate("Just4U");
  };

  const handleNavigationToSendMomo = () =>{
    navigation.navigate("SendMomo");
  };

  const handleNavigationToMashUp = () =>{
    navigation.navigate('MashUp');
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={styles.title}>
                <Text style={styles.pad}>Balances</Text>
                <AntDesign name="sync" size={12} color="black" />
              </View>

              <TouchableOpacity style={styles.title}>
                <Text style={styles.pad}>View all</Text>
                <AntDesign name="rightcircle" size={14} color="black" />
              </TouchableOpacity>
            </View>
            <View style={{ padding: 10, flexDirection: "row" }}>
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
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                      GHS 0.00
                    </Text>
                  </View>
                  <Text
                    style={{ fontWeight: "bold", fontSize: 10, paddingTop: 5 }}
                  >
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

              <TouchableOpacity style={styles.tab}>
                <View style={{ marginBottom: "auto" }}>
                  <View style={styles.hi}>
                    <Ionicons name="wifi" size={16} color="black" />
                    <Text style={styles.pad1}>BROADBAND</Text>
                  </View>
                </View>

                <View style={styles.tab1}>
                  <View style={styles.mid}>
                    <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                      GET CONNECTED
                    </Text>
                  </View>
                  <Text
                    style={{ fontWeight: "bold", fontSize: 10, paddingTop: 5 }}
                  >
                    CLICK HERE
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.txt}>
              <Text style={styles.text}>
                Showing balances as at {currentDateTime}
              </Text>
            </View>
          </View>
          <View style={styles.body1}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={styles.title}>
                <Text style={{ fontSize: 18 }}>Quick Access</Text>
              </View>

              <TouchableOpacity style={styles.title}>
                <Text style={styles.pad}>View all</Text>
                <AntDesign name="rightcircle" size={14} color="black" />
              </TouchableOpacity>
            </View>

            <View>
              <View style={styles.man}>
                <TouchableOpacity
                  onPress={handleNavigationToBundle}
                  style={styles.black}
                >
                  <MaterialCommunityIcons
                    name="swap-vertical-circle-outline"
                    size={24}
                    color="white"
                  />
                  <Text style={styles.yhh}>Data Bundle</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={handleNavigationToJust4U}
                  style={styles.black}
                >
                  <MaterialCommunityIcons
                    name="star-circle-outline"
                    size={24}
                    color="white"
                  />
                  <Text style={styles.yhh}>Just4U</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.man1}>
                <TouchableOpacity onPress={handleNavigationToSendMomo} style={styles.black}>
                  <FontAwesome6
                    name="circle-dollar-to-slot"
                    size={24}
                    color="white"
                  />
                  <Text style={styles.yhh}>Send Momo</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleNavigationToMashUp} style={styles.black}>
                  <Octicons name="database" size={24} color="white" />
                  <Text style={styles.yhh}>MashUp</Text>
                </TouchableOpacity>
              </View>

              <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 18, paddingLeft: 10 }}>
                  Popular Bundle
                </Text>
              </View>

              <TouchableOpacity style={styles.tab2}>
                <View style={{ marginBottom: "auto" }}>
                  <View style={styles.hi1}>
                    <Text style={styles.pad1}>Data Bundle</Text>
                    <View style={styles.meat}>
                      <Text>MIDNIGHT</Text>
                      <Ionicons
                        backgroundColor="black"
                        paddingLeft={3}
                        width={22}
                        alignItems="center"
                        justifyContent="center"
                        name="moon-sharp"
                        size={14}
                        color="white"
                      />
                    </View>
                  </View>
                </View>

                <View style={styles.tab01}>
                  <View style={styles.bod}>
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
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
  },
  body: {
    backgroundColor: "#ebf5f3",
    //width:'100%',
    height: "100%",
    marginTop: "30%",
    borderTopRightRadius: 20,
    overflow: "hidden",
  },

  body1: {
    backgroundColor: "white",
    height: "auto",
    borderTopLeftRadius: 50,
    paddingTop: 20,
    paddingBottom: 100,
    marginBottom: 100,
  },

  title: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
  black: {
    backgroundColor: "#292a2e",
    height: 55,
    width: 150,
    marginRight: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 15,
    flexDirection: "row",
  },
  yhh: {
    color: "white",
    paddingLeft: 10,
  },
  meat: {
    backgroundColor: "white",
    marginLeft: "auto",
    flexDirection: "row",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    overflow: "hidden",
  },
});
