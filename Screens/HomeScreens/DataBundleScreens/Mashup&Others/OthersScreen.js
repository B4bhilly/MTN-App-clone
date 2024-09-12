import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  AntDesign,
  Ionicons,
  MaterialIcons,
  Octicons,
  Entypo,
} from "@expo/vector-icons";
import VideoScreen from "./VideoScreen";
import MidnightScreen from "./MidnightScreen";
import KokrokooScreen from "./KokrokooScreen";

const OthersScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState("Video");

  const renderContent = () => {
    switch (selectedTab) {
      case "Video":
        return <VideoScreen />;
      case "Midnight":
        return <MidnightScreen />;
      case "Kokrokoo":
        return <KokrokooScreen />;
      default:
        return <VideoScreen />;
    }
  };

  console.log(selectedTab); // Debugging output

  return (
    <View style={styles.container}>
      <View style={styles.red}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, paddingLeft: 10, fontWeight: "bold" }}>
          Mashup Bundles
        </Text>
      </View>
      <View style={styles.tabContainer}>
        <View style={styles.tabBar}>
          <TouchableOpacity
            onPress={() => setSelectedTab("Video")}
            style={[styles.tab, selectedTab === "Video" && styles.activeTab]}
          >
            <Text style={styles.tabLabel}>Video</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedTab("Midnight")}
            style={[styles.tab, selectedTab === "Midnight" && styles.activeTab]}
          >
            <Text style={styles.tabLabel}>Midnight</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedTab("Kokrokoo")}
            style={[styles.tab, selectedTab === "Kokrokoo" && styles.activeTab]}
          >
            <Text style={styles.tabLabel}>Kokrokoo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>{renderContent()}</View>
      </View>
    </View>
  );
};

export default OthersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
  tabContainer: {
    flex: 1,
    //backgroundColor: 'red',
  },
  tabBar: {
    backgroundColor: "#292a2e",
    height: 50,
    flexDirection: "row",
  },
  tab: {
    justifyContent: "center",
    marginLeft: 20,
  },
  activeTab: {
    borderBottomColor: "white",
    borderBottomWidth: 4,
    //borderRadius:5
  },
  tabLabel: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#292a2e",
  },
});
