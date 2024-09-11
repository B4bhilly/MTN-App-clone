import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React,{useState}  from "react";
import { AntDesign, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import RadioButtonGroup from "../../assets/CustomTabs/RadioButton1";


const BuyAirtime1 = ({navigation}) => {
  const [selectedNetwork, setSelectedNetwork] = useState("MTN"); // State for selected network

  // Prevent propagation of press events to the parent elements
  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  const selectNetwork = (network) => {
    setSelectedNetwork(network);
    closeModal(); //closes modal after selection
  };
  return (
    <View style={styles.container}>
      <View style={styles.red}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, paddingLeft: 10, fontWeight: "bold" }}>
          Who is this Purchase for?
        </Text>
      </View>

      <View style={{ backgroundColor: "#dee0e3", borderTopRightRadius: 20 }}>
        <View style={styles.one}>
          <Text>Selected products</Text>
          <Text>Broadband Bundles</Text>
        </View>
        <View style={styles.two}>
          <View style={styles.yhh}>
            <Text>Select Recipient</Text>
            <RadioButtonGroup />
            {selectedNetwork === "Other networks (AT, Telecel)" && (
              <View style={styles.box}>
                <TextInput
                  placeholder="Enter Number..."
                  value={Number}
                  keyboardType="numeric"
                  maxLength={10}
                />
                <Pressable>
                  <MaterialIcons
                    style={{ top: 12 }}
                    name="contact-phone"
                    size={24}
                    color="black"
                  />
                </Pressable>
              </View>
            )}
          </View>

          {/* <Text>Linked Broadband Accounts</Text>
            <Text style={styles.text}>No Linked Broadband Accounts</Text> */}
        </View>
        <View style={styles.butt}>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.text1}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BuyAirtime1;

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
    height: "5.5%",
    width: "100%",
    flexDirection: "row",
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: "space-between",
  },
  two: {
    backgroundColor: "#ebf5f3",
    height: "100%",
    width: "100%",
    borderTopRightRadius: 20,
    padding: 20,
  },
  text: {
    marginTop: 10,
    paddingBottom: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "grey",
  },
  butt: {
    backgroundColor: "white",
    height: "22.5%",
    width: "100%",
    marginTop: "auto",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    paddingTop: 20,
  },
  button1: {
    height: 50,
    width: 280,
    borderRadius: 50,
    backgroundColor: "#ebe41c",
    justifyContent: "center",
    alignItems: "center",
  },
  text0: {
    fontSize: 14,
    fontWeight: "bold",
  },
  text1: {
    fontSize: 12,
    fontWeight: "bold",
  },
  button0: {
    height: 41,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "grey",
    paddingLeft: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  button: {
    height: 40,
    width: "auto",
    borderRadius: 15,
    backgroundColor: "#4b4d54",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 40,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  drawerContent: {
    backgroundColor: "white",
    height: "11%",
    width: "auto",
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,
    top: 205,
    // Shadow properties
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 3, height: 3 }, // Shadow offset
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 5, // Shadow blur radius
    elevation: 5, // Android shadow
  },
  dot: {
    height: 20,
    width: 20,
    borderRadius: 100,
    borderWidth: 1,
    marginRight: 10,
  },
  box: {
    height: 55,
    width: "auto",
    borderWidth: StyleSheet.hairlineWidth,
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    marginBottom: 20,
    borderRadius: 5,
    borderColor: "grey",
  },
  yhh: {
    //borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: "grey",
    //marginBottom:20,
  },
});
