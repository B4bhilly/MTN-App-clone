import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Modal,
  TextInput,
} from "react-native";
import React, { useState, useRef } from "react";
import {
  AntDesign,
  Feather,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const MomoScreen = ({ navigation }) => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false); // State for first modal visibility
  const [isSecondDrawerVisible, setIsSecondDrawerVisible] = useState(false); //State for second modal visibility
  const [momoPin, setMomoPin] = useState(""); //State for storing momo pin
  const [code, setCode] = useState(["", "", "", ""]); // 2FA code state
  const inputRefs = useRef([]); // Refs for the 2FA input fields

  const toggleDrawer = () => {
    setIsDrawerVisible(!isDrawerVisible);
  };

  const closeModal = () => {
    setIsDrawerVisible(false);
    setIsSecondDrawerVisible(false);
    setMomoPin("");
    setCode(""); 
    
  };

  // Prevent propagation of press events to the parent elements
  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  const toggleDrawer1 = () => {
    setIsDrawerVisible(!isDrawerVisible);
  };

  const handlenavigationToHomeScreen = () => {
    navigation.navigate("Home");
  };

  const handleNavigationToSendMomo = () => {
    navigation.navigate("SendMomo");
  };

  const handlePinChange = (pin) => {
    setMomoPin(pin);
    if (pin === "0000") {
      setIsSecondDrawerVisible(true); //activates the second modal when the pin is 0000
    }
  };

  // Function to handle 2FA code input
  const handleChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Move to next input if text is entered, or move back if deleted
    if (text.length > 0 && index < 5) {
      inputRefs.current[index + 1].focus();
    }
    if (text.length === 0 && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.zero}>
        <TouchableOpacity
          style={{ marginRight: 15 }}
          onPress={handlenavigationToHomeScreen}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20 }}>Momo</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.one}>
        <View style={{ padding: 20 }}>
          <View
            style={{
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderColor: "grey",
              paddingBottom: 10,
              marginBottom: 15,
            }}
          >
            <Text style={{ fontSize: 20 }}>Balance</Text>
          </View>
          <View style={styles.two}></View>
        </View>
        <View style={styles.three}>
          <Text style={{ fontSize: 20, marginBottom: 20 }}>Services</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <TouchableOpacity
              onPress={handleNavigationToSendMomo}
              style={{ alignItems: "center", marginLeft: 10 }}
            >
              <View style={styles.icon}>
                <MaterialIcons
                  name="person-add-alt-1"
                  size={30}
                  color="white"
                />
              </View>
              <Text>Send Momo</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={toggleDrawer}
              style={{ alignItems: "center", marginLeft: 10 }}
            >
              <View style={styles.icon}>
                <MaterialCommunityIcons
                  name="newspaper-variant-outline"
                  size={30}
                  color="white"
                />
              </View>
              <Text>Statement</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={toggleDrawer}
              style={{ alignItems: "center", marginLeft: 10 }}
            >
              <View style={styles.icon}>
                <MaterialCommunityIcons
                  name="arrow-up-box"
                  size={30}
                  color="white"
                />
              </View>
              <Text>Cashout</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={toggleDrawer}
            style={{ marginLeft: 20, marginTop: 5, marginBottom: 30 }}
          >
            <View style={styles.icon}>
              <MaterialCommunityIcons
                name="text-box-check-outline"
                size={30}
                color="white"
              />
            </View>
            <Text style={{ marginLeft: 10 }}>Approvals</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 20, marginBottom: 20 }}>Momo App</Text>
          <TouchableOpacity style={styles.two}></TouchableOpacity>
        </View>
      </ScrollView>

      {/* first modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isDrawerVisible}
        onRequestClose={() => {
          setIsDrawerVisible(false);
        }}
      >
        <Pressable onPress={closeModal} style={styles.modalContainer}>
          <Pressable style={styles.drawerContent} onPress={stopPropagation}>
            <TouchableOpacity
              onPress={closeModal}
              style={{ alignItems: "flex-end", marginBottom: 10 }}
            >
              <Feather name="x" size={24} color="grey" />
            </TouchableOpacity>
            <View style={styles.wow}>
              <Text>
                Please enter your
                <Text style={{ fontWeight: "bold" }}> MoMo PIN </Text>{" "}
              </Text>
            </View>
            <View>
              <TextInput
                placeholder="MoMo PIN"
                value={momoPin}
                onChangeText={handlePinChange}
                maxLength={4}
                keyboardType="numeric"
                style={styles.pin}
              />
            </View>
            <View style={styles.ok}>
              <AntDesign name="exclamationcircleo" size={14} color="black" />
              <Text> Make sure no one is looking at your PIN</Text>
            </View>
          </Pressable>
        </Pressable>
      </Modal>

      {/* second modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isSecondDrawerVisible}
        onRequestClose={() => {
          setIsSecondDrawerVisible(false);
        }}
      >
        <Pressable onPress={closeModal} style={styles.modalContainer}>
          <Pressable style={styles.drawerContent} onPress={stopPropagation}>
            <TouchableOpacity
              onPress={closeModal}
              style={{ alignItems: "flex-end", marginBottom: 10 }}
            >
              <Feather name="x" size={24} color="grey" />
            </TouchableOpacity>
            <View style={styles.wow}>
              <Text>We have sent an OTP Code to</Text>
              <Text style={{ fontWeight: "bold" }}>XXX XXX ()</Text>
            </View>
            <View>
              <Text> Enter code</Text>
            </View>

            {/* 2FA input box */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginVertical: 10,
              }}
            >
              {code.map((digit, index) => (
                <TextInput
                  key={index}
                  style={[styles.pin, { width: 70, textAlign: "center" }]} // Customized width for 2FA input boxes
                  keyboardType="numeric"
                  maxLength={1}
                  onChangeText={(text) => handleChange(text, index)}
                  value={digit}
                  ref={(el) => (inputRefs.current[index] = el)} // Reference for each input
                  autoFocus={index === 0} // Auto-focus on the first input
                />
              ))}
            </View>

            <View style={styles.ok}>
              <Text> SEND ANOTHER CODE ()</Text>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
};

export default MomoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
  },
  zero: {
    padding: 30,
    marginTop: 20,
    flexDirection: "row",
  },
  one: {
    backgroundColor: "#ebf5f3",
    height: "100%",
    //marginTop:'5%',
    borderTopRightRadius: 20,
    //padding:20,
  },
  two: {
    borderWidth: 2,
    borderColor: "#4d5f91",
    height: 100,
    width: "100%",
    borderRadius: 5,
    padding: 20,
    //marginBottom:20,
  },
  three: {
    backgroundColor: "white",
    height: "100%",
    borderTopLeftRadius: 20,
    padding: 20,
    marginBottom: 50,
  },
  icon: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: "#4d5f91",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  drawerContent: {
    backgroundColor: "#ebf5f3",
    height: "100%",
    width: "auto",
    borderTopLeftRadius: 20,
    top: 120,
    padding: 20,
    // Shadow properties
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 3, height: 3 }, // Shadow offset
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 5, // Shadow blur radius
    elevation: 5, // Android shadow
  },
  wow: {
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "grey",
  },
  pin: {
    borderWidth: 2,
    borderColor: "grey",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  ok: {
    flexDirection: "row",
    alignItems: "center",
  },
});
