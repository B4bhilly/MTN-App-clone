import {StyleSheet,Text,View,TouchableOpacity, ScrollView,} from "react-native";
import React from "react";
import { AntDesign, Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const GhsFiveScreen = () => {
  const navigation = useNavigation();

  const handleNavigationToBuy1 = () =>{
    navigation.navigate('Buy1');
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.one}>
        <Text style={styles.bold}>
          Customize a mix of data and voice with a free social package too.
        </Text>
        <View style={styles.roll}>
          <TouchableOpacity onPress={handleNavigationToBuy1} style={styles.tab2}>
            <View style={{ marginBottom: "auto" }}>
              <View style={styles.hi1}>
                <Text style={styles.pad1}>GHS 5 Mashup</Text>
                <View style={styles.meat}>
                  <Text style={{ marginRight: 2, marginLeft: 2 }}>MASHUP</Text>
                  <View style={styles.icon1}>
                    <Entypo name="instagram" size={14} color="white" />
                    <Ionicons name="logo-whatsapp" size={14} color="white" />
                    <Entypo name="facebook" size={14} color="white" />
                    <AntDesign name="wechat" size={14} color="white" />
                    <MaterialIcons name="tiktok" size={14} color="white" />
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.tab01}>
              <View style={[styles.bod, { paddingRight: "27.5%" }]}>
                <Text>Data</Text>
                <Text style={{ fontWeight: "bold" }}>246.43 MB</Text>
              </View>
              <View style={styles.bod1}>
                <Text>Voice</Text>
                <Text style={{ fontWeight: "bold" }}>0 Mins</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleNavigationToBuy1} style={styles.tab2}>
            <View style={{ marginBottom: "auto" }}>
              <View style={styles.hi1}>
                <Text style={styles.pad1}>GHS 5 Mashup</Text>
                <View style={styles.meat}>
                  <Text style={{ marginRight: 2, marginLeft: 2 }}>MASHUP</Text>
                  <View style={styles.icon1}>
                    <Entypo name="instagram" size={14} color="white" />
                    <Ionicons name="logo-whatsapp" size={14} color="white" />
                    <Entypo name="facebook" size={14} color="white" />
                    <AntDesign name="wechat" size={14} color="white" />
                    <MaterialIcons name="tiktok" size={14} color="white" />
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.tab01}>
              <View style={[styles.bod, { paddingRight: "27.5%" }]}>
                <Text>Data</Text>
                <Text style={{ fontWeight: "bold" }}>123.21 MB</Text>
              </View>
              <View style={styles.bod1}>
                <Text>Voice</Text>
                <Text style={{ fontWeight: "bold" }}>58.68 Mins</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleNavigationToBuy1} style={styles.tab2}>
            <View style={{ marginBottom: "auto" }}>
              <View style={styles.hi1}>
                <Text style={styles.pad1}>GHS 5 Mashup</Text>
                <View style={styles.meat}>
                  <Text style={{ marginRight: 2, marginLeft: 2 }}>MASHUP</Text>
                  <View style={styles.icon1}>
                    <Entypo name="instagram" size={14} color="white" />
                    <Ionicons name="logo-whatsapp" size={14} color="white" />
                    <Entypo name="facebook" size={14} color="white" />
                    <AntDesign name="wechat" size={14} color="white" />
                    <MaterialIcons name="tiktok" size={14} color="white" />
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.tab01}>
              <View style={[styles.bod, { paddingRight: "27.5%" }]}>
                <Text>Data</Text>
                <Text style={{ fontWeight: "bold" }}>147.86 MB</Text>
              </View>
              <View style={styles.bod1}>
                <Text>Voice</Text>
                <Text style={{ fontWeight: "bold" }}>46.95 Mins</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleNavigationToBuy1} style={styles.tab2}>
            <View style={{ marginBottom: "auto" }}>
              <View style={styles.hi1}>
                <Text style={styles.pad1}>GHS 5 Mashup</Text>
                <View style={styles.meat}>
                  <Text style={{ marginRight: 2, marginLeft: 2 }}>MASHUP</Text>
                  <View style={styles.icon1}>
                    <Entypo name="instagram" size={14} color="white" />
                    <Ionicons name="logo-whatsapp" size={14} color="white" />
                    <Entypo name="facebook" size={14} color="white" />
                    <AntDesign name="wechat" size={14} color="white" />
                    <MaterialIcons name="tiktok" size={14} color="white" />
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.tab01}>
              <View style={[styles.bod, { paddingRight: "27.5%" }]}>
                <Text>Data</Text>
                <Text style={{ fontWeight: "bold" }}>172.50 MB</Text>
              </View>
              <View style={styles.bod1}>
                <Text>Voice</Text>
                <Text style={{ fontWeight: "bold" }}>35.22 Mins</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleNavigationToBuy1} style={styles.tab2}>
            <View style={{ marginBottom: "auto" }}>
              <View style={styles.hi1}>
                <Text style={styles.pad1}>GHS 5 Mashup</Text>
                <View style={styles.meat}>
                  <Text style={{ marginRight: 2, marginLeft: 2 }}>MASHUP</Text>
                  <View style={styles.icon1}>
                    <Entypo name="instagram" size={14} color="white" />
                    <Ionicons name="logo-whatsapp" size={14} color="white" />
                    <Entypo name="facebook" size={14} color="white" />
                    <AntDesign name="wechat" size={14} color="white" />
                    <MaterialIcons name="tiktok" size={14} color="white" />
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.tab01}>
              <View style={[styles.bod, { paddingRight: "27.5%" }]}>
                <Text>Data</Text>
                <Text style={{ fontWeight: "bold" }}>73.92 MB   </Text>
              </View>
              <View style={styles.bod1}>
                <Text>Voice</Text>
                <Text style={{ fontWeight: "bold" }}>82.17 Mins</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default GhsFiveScreen;

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
  },
  bold: {
    fontWeight: "bold",
    marginBottom: 20,
  },
  roll: {
    backgroundColor: "#ebf5f3",
    height: "82%",
    width: "100%",
    marginBottom: 50,
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
    width: "47%",
  },
  icon1: {
    backgroundColor: "grey",
    width: "66%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: 2,
    paddingRight: 5,
  },
});
