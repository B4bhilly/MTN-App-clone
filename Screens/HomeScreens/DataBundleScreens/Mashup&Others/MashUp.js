import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {AntDesign,Ionicons,MaterialIcons,Octicons,Entypo,} from "@expo/vector-icons";
import FlexiScreen from "./FlexiScreen";
import GhsOneScreen from "./GhsOneScreen";
import GhsFiveScreen from "./GhsFiveScreen";
import GhsTenScreen from "./GhsTenScreen";

const MashUp = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState("Flexi");

  const renderContent = () => {
    switch (selectedTab) {
      case "Flexi":
        return <FlexiScreen />;
      case "GhsOne":
        return <GhsOneScreen />;
      case "GhsFive":
        return <GhsFiveScreen />;
      case "GhsTen":
        return <GhsTenScreen/>;
      default:
        return <FlexiScreen />;
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
            onPress={() => setSelectedTab("Flexi")}
            style={[styles.tab, selectedTab === "Flexi" && styles.activeTab]}
          >
            <Text style={styles.tabLabel}>Flexi & More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedTab("GhsOne")}
            style={[styles.tab, selectedTab === "GhsOne" && styles.activeTab]}
          >
            <Text style={styles.tabLabel}>GHS 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedTab("GhsFive")}
            style={[styles.tab, selectedTab === "GhsFive" && styles.activeTab]}
          >
            <Text style={styles.tabLabel}>GHS 5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedTab("GhsTen")}
            style={[styles.tab, selectedTab === "GhsTen" && styles.activeTab]}
          >
            <Text style={styles.tabLabel}>GHS 10</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>{renderContent()}</View>
      </View>
    </View>
  );
};

export default MashUp;

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
