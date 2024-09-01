import { StyleSheet, Text, View, TouchableOpacity, Pressable, Modal, TextInput, KeyboardAvoidingView, Platform} from "react-native";
import React, {useState} from "react";
import {AntDesign, MaterialIcons, FontAwesome5, Entypo,} from "@expo/vector-icons";

const SendMomoScreen = ({ navigation }) => {
    const [isDrawerVisible, setIsDrawerVisible] = useState(false); // State for drawer visibility
    const [selectedNetwork, setSelectedNetwork] = useState('MTN'); // State for selected network

    const toggleDrawer = () => {
        setIsDrawerVisible(!isDrawerVisible);
    };

    const closeModal = () => {
        setIsDrawerVisible(false);
    };

    // Prevent propagation of press events to the parent elements
    const stopPropagation = event => {
        event.stopPropagation();
    };

    const selectNetwork = (network) =>{
        setSelectedNetwork(network);
        closeModal(); //closes modal after selection
    };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} style={styles.container}>
      <View style={styles.red}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, paddingLeft: 10, fontWeight: "bold" }}>
          Send MoMo
        </Text>
      </View>
      <View style={styles.one}>
        <View style={styles.two}>
          <Text style={{ fontWeight: "bold" }}>
            Sending MoMo to MoMo wallets
          </Text>
        </View>
        <View>
            <Text>Select network</Text>
            <TouchableOpacity onPress={toggleDrawer} style={styles.button}>
                <Text style={[styles.text,{color:"white"}]}>{selectedNetwork}</Text>
                <FontAwesome5 name="angle-down" size={24} color="white" />
            </TouchableOpacity>
            <View style={styles.box}>
                <TextInput 
                    placeholder="Enter Number..." 
                    value={Number} 
                    keyboardType ="numeric"
                    maxLength={10}
                />
                <Pressable>
                    <MaterialIcons style={{top:12}} name="contact-phone" size={24} color="black" />
                </Pressable>
            </View>

            <View style={styles.box}>
                <TextInput 
                    placeholder="Enter Amount"  
                    value={Number} 
                    keyboardType ="numeric" 
                />
            </View>

            <View style={styles.box}>
                <TextInput 
                    placeholder="Enter reference"   
                />
            </View>
            
        </View>
      </View>

      <View style={styles.butt}>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.text}>NEXt</Text>
        </TouchableOpacity>
      </View>

      <Modal
          animationType="pop-up"
          transparent={true}
          visible={isDrawerVisible}
          onRequestClose={() => {
            setIsDrawerVisible(false);
          }}
        >
            <Pressable onPress={closeModal} style={styles.modalContainer}>
                <Pressable style={styles.drawerContent} onPress={stopPropagation}>
                    <TouchableOpacity onPress={()=>selectNetwork('MTN')} style={styles.button0}>
                        <View style={[styles.dot,{backgroundColor:'yellow'}]}></View>
                        <Text style={styles.text}>MTN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>selectNetwork('Telecel')} style={styles.button0}>
                        <View style={[styles.dot, {backgroundColor:'red'}]}></View>
                        <Text style={styles.text}>Telecel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>selectNetwork('AT')} style={[styles.button0, {borderBottomWidth:0}]}>
                        <View style={[styles.dot,{backgroundColor:'blue'}]}></View>
                        <Text style={styles.text}>AT</Text>
                    </TouchableOpacity>
                </Pressable>
            </Pressable>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default SendMomoScreen;

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
    backgroundColor: "#ebf5f3",
    height: "100%",
    width: "auto",
    borderTopRightRadius: 20,
    padding: 20,
  },
  two: {
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "grey",
    marginBottom: 20,
  },
  butt: {
    backgroundColor: "white",
    height: "11.5%",
    width: "100%",
    marginTop: "auto",
    borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent:'center',
  },
  button: {
    height: 40,
    width: "auto",
    borderRadius: 15,
    backgroundColor: "#4b4d54",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop:20,
    flexDirection:'row',
    paddingLeft:20,
    paddingRight:20,
    marginBottom:20,
  },
   button0: {
    height:41,
    borderBottomWidth:StyleSheet.hairlineWidth,
    borderBottomColor:'grey',
    paddingLeft:20,
    alignItems:'center',
    flexDirection:'row',
   },
  button1: {
    height: 50,
    width: 280,
    borderRadius: 50,
    backgroundColor: "#ebe41c",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  drawerContent: {
    backgroundColor: 'white',
    height:"16%",
    width: 'auto',
    borderRadius: 20,
    marginLeft:20,
    marginRight:20,
    top:227,
    // Shadow properties
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 3, height: 3 }, // Shadow offset
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 5, // Shadow blur radius
    elevation: 5, // Android shadow
  },
  dot:{
    height:20,
    width:20,
    borderRadius:100,
    borderWidth:1,
    marginRight:10,
  },
  box:{
    height:55,
    width:'auto',
    borderWidth:StyleSheet.hairlineWidth,
    justifyContent:'space-between',
    paddingLeft:20,
    paddingRight:20,
    flexDirection:'row',
    marginBottom:20,
    borderRadius:5,
    borderColor:'grey'
  },
});
