import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, Ionicons, MaterialIcons, Entypo, FontAwesome5 } from "@expo/vector-icons";

const VideoScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.one}>
        <Text style={styles.bold}>
          Use these packages to stream video services such as Iroko TV, DSTV & Youtuber
        </Text>
        <View style={styles.roll}>
          <TouchableOpacity
            style={[styles.tab2, { backgroundColor: "#292a2e" }]}
          >
            <View style={{ marginBottom: "auto" }}>
              <View style={styles.hi1}>
                <Text style={[styles.pad1, { color: "white" }]}>
                  Flexi Video Bundles
                </Text>
                <View style={styles.meat}>
                  <Text style={{ marginRight: 2, marginLeft: 2 }}>VIDEO</Text>
                  <View style={styles.icon}>
                    <FontAwesome5 name="youtube" size={14} color="black" />
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.tab01}>
              <View style={[styles.bod, { paddingRight: "11.5%" }]}>
                <Text>Data</Text>
                <Text style={{ fontWeight: "bold" }}>4.07MB - 52.87GB </Text>
              </View>
              <View style={styles.bod1}>
                <Text>Cost</Text>
                <Text style={{ fontWeight: "bold" }}>GHS 0.03 - 399</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tab2}>
            <View style={{ marginBottom: "auto" }}>
              <View style={styles.hi1}>
                <Text style={styles.pad1}>135.69MB Video Bundles</Text>
                <View style={styles.meat}>
                  <Text style={{ marginRight: 2, marginLeft: 2 }}>VIDEO</Text>
                  <View style={styles.icon1}>
                    <FontAwesome5 name="youtube" size={14} color="white" />
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.tab01}>
              <View style={[styles.bod, { paddingRight: "27.5%" }]}>
                <Text>Data</Text>
                <Text style={{ fontWeight: "bold" }}>135.69MB</Text>
              </View>
              <View style={styles.bod1}>
                <Text>Cost</Text>
                <Text style={{ fontWeight: "bold" }}>GHS 1</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tab2}>
            <View style={{ marginBottom: "auto" }}>
              <View style={styles.hi1}>
                <Text style={styles.pad1}>678.43MB Video Bundles</Text>
                <View style={styles.meat}>
                  <Text style={{ marginRight: 2, marginLeft: 2 }}>VIDEO</Text>
                  <View style={styles.icon1}>
                    <FontAwesome5 name="youtube" size={14} color="white" />
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.tab01}>
              <View style={[styles.bod, { paddingRight: "27.5%" }]}>
                <Text>Data</Text>
                <Text style={{ fontWeight: "bold" }}>678.43MB</Text>
              </View>
              <View style={styles.bod1}>
                <Text>Cost</Text>
                <Text style={{ fontWeight: "bold" }}>GHS 5</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tab2}>
            <View style={{ marginBottom: "auto" }}>
              <View style={styles.hi1}>
                <Text style={styles.pad1}>1.33GB Video Bundles</Text>
                <View style={styles.meat}>
                  <Text style={{ marginRight: 2, marginLeft: 2 }}>VIDEO</Text>
                  <View style={styles.icon1}>
                    <FontAwesome5 name="youtube" size={14} color="white" />
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.tab01}>
              <View style={[styles.bod, { paddingRight: "27%" }]}>
                <Text>Data</Text>
                <Text style={{ fontWeight: "bold" }}>1.33GB      </Text>
              </View>
              <View style={styles.bod1}>
                <Text>Cost</Text>
                <Text style={{ fontWeight: "bold" }}>GHS 10</Text>
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

export default VideoScreen;

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
    width: "auto",
  },
  icon: {
    backgroundColor: "#ebe41c",
    width: "auto",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: 4,
    paddingRight: 4,
  },
  icon1: {
    backgroundColor: "grey",
    width: "auto",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: 4,
    paddingRight: 4,
  },
});
