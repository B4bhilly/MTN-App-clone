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
  FontAwesome,
} from "@expo/vector-icons";

const QViewAll = ({ navigation }) => {
  const handleNavigationToBundle = () => {
    navigation.navigate("Bundle");
  };

  const handleNavigationToJust4U = () => {
    navigation.navigate("Just4U");
  };

  const handleNavigationToSendMomo = () => {
    navigation.navigate("SendMomo");
  };

  const handleNavigationToMashUp = () => {
    navigation.navigate("MashUp");
  };

  const handleNavigationToMore = () => {
    navigation.navigate("More");
  };

  const handleNavigationToHistory = () => {
    navigation.navigate("History");
  };

  return (
    <View style={styles.container}>
      <View style={styles.red}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, paddingLeft: 10, fontWeight: "bold" }}>
          Quick Access
        </Text>
      </View>
      <View style={styles.one}>
        <Text style={styles.yoo}>Homepage Quick Access</Text>
        <View style={{ paddingLeft: 20, paddingRight: 20 }}>
          <View style={styles.man}>
            {/* <TouchableOpacity
              onPress={handleNavigationToBundle}
              style={styles.black}
            >
                <View style={styles.circle}>
                    <MaterialCommunityIcons
                      name="swap-vertical"
                      size={24}
                      color="black"
                    />
                </View>
              <Text style={styles.yhh}>Data Bundle</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleNavigationToJust4U}
              style={styles.black}
            >
                <View style={styles.circle}>
                   <MaterialCommunityIcons name="star" size={24} color="black" />
                </View>
              <Text style={styles.yhh}>Just4U</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              onPress={handleNavigationToBundle}
              style={[
                styles.black,
                { justifyContent: "center", paddingLeft: 0 },
              ]}
            >
              <MaterialCommunityIcons
                name="play-circle-outline"
                size={24}
                color="yellow"
              />
              <Text
                style={[styles.yhh, { fontSize: 22, fontWeight: "normal" }]}
              >
                <Text style={{ fontWeight: "bold" }}>MTN</Text>PLAY
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleNavigationToJust4U}
              style={[
                styles.black,
                { justifyContent: "center", paddingLeft: 0 },
              ]}
            >
              {/* <View style={styles.circle}>
                   <MaterialCommunityIcons name="star" size={24} color="black" />
                  </View> */}
              <Text style={styles.yhh1}>
                <Text style={{ color: "yellow" }}>MTN</Text>PULSE
              </Text>
            </TouchableOpacity>
          </View>

          {/* <View style={styles.man1}>
            <TouchableOpacity
              onPress={handleNavigationToSendMomo}
              style={styles.black}
            >
              <View style={styles.circle}>
                    <FontAwesome6
                      name="circle-dollar-to-slot"
                      size={20}
                      color="black"
                    />
                  </View>
              <Text style={styles.yhh}>Send Momo</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleNavigationToMashUp}
              style={[styles.black, { marginBottom: 20 }]}
            >
                <View style={styles.circle}>
                    <Octicons name="database" size={22} color="black" />
                </View>
              <Text style={styles.yhh}>MashUp</Text>
            </TouchableOpacity>
          </View> */}
        </View>
        <Text style={styles.yoo}>Other Actions</Text>
        <View style={{ paddingLeft: 20, paddingRight: 20 }}>
          <View style={styles.man}>
            <TouchableOpacity
              onPress={handleNavigationToBundle}
              style={styles.black1}
            >
                <MaterialCommunityIcons
                  name="swap-vertical"
                  size={40}
                  color="white"
                />
              <Text style={styles.yhh}>Data Bundle</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleNavigationToJust4U}
              style={styles.black1}
            >
              <MaterialCommunityIcons name="star" size={40} color="white" />
              <Text style={styles.yhh}>Just4U</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleNavigationToSendMomo}
              style={styles.black1}
            >
                <FontAwesome6
                  name="circle-dollar-to-slot"
                  size={40}
                  color="white"
                />
              <Text style={styles.yhh}>Send Momo</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleNavigationToMashUp}
              style={styles.black1}
            >
              <Octicons name="database" size={40} color="white" />
              <Text style={styles.yhh}>MashUp</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.man1, { borderBottomWidth: 0 }]}>
            <TouchableOpacity style={styles.black1}>
              <View style={styles.circle}>
                <FontAwesome name="gamepad" size={22} color="black" />
              </View>
              <Text style={styles.yhh}>Play</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.black1}>
              <View style={styles.circle}>
                <MaterialIcons
                  name="perm-contact-cal"
                  size={23}
                  color="black"
                />
              </View>
              <Text style={styles.yhh}>Contact us</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleNavigationToHistory}
              style={styles.black1}
            >
              <View style={styles.circle}>
                <MaterialIcons name="history" size={24} color="black" />
              </View>
              <Text style={styles.yhh}>History</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleNavigationToMore}
              style={[styles.black1, { marginBottom: 10 }]}
            >
              <View style={styles.circle}>
                <MaterialIcons name="feedback" size={22} color="black" />
              </View>
              <Text style={styles.yhh}>Feedback</Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingLeft: 5 }}>
            <TouchableOpacity style={styles.black1}>
              <View style={styles.circle}>
                <MaterialIcons name="library-music" size={22} color="black" />
              </View>
              <Text style={styles.yhh}>Caller Tunez</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default QViewAll;

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
  man: {
    flexDirection: "row",
    paddingLeft: 20,
    padding: 10,
    justifyContent: "center",
  },
  man1: {
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "grey",
    justifyContent: "center",
    paddingLeft: 10,
  },
  black: {
    backgroundColor: "#292a2e",
    height: 55,
    width: 150,
    marginRight: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 15,
    flexDirection: "row",
  },
  black1: {
    backgroundColor: "#292a2e",
    height: 75,
    width: 75,
    marginRight: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    height: 30,
    width: 30,
    backgroundColor: "white",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  yhh: {
    color: "white",
    paddingLeft: 5,
    fontSize: 10,
    fontWeight: "bold",
  },
  yhh1: {
    color: "white",
    //paddingLeft: 10,
    fontWeight: "bold",
    fontSize: 22,
  },
});
