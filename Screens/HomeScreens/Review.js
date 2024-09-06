import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import React from 'react';
import { AntDesign, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import RadioButton2Group from '../../assets/CustomTabs/RadioButton2';

const Review = ({navigation}) => {
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
        <View style={styles.one}>
                <View style={styles.two}>
                    <Text style={styles.bold}>Data Bundle @ Undefined</Text>
                    <Text style={{lineHeight:40}}>undefined</Text>
                    <Text>For My Number()</Text>
                </View>
                <View style={styles.three}>
                    <View style={styles.four}>
                        <View style={styles.five}>
                            <Text style={styles.white}>Select payment method</Text>
                        </View>
                        <RadioButton2Group/>
                    </View>
                </View>
        </View>
        <View style={styles.bottom}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>CANCEL</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button1}>
                <Text style={styles.text}>PAY</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Review

const styles = StyleSheet.create({
    container:{
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
    one:{
        backgroundColor: "#e3dddc",
        borderTopRightRadius: 20,
        height:'100%' ,
    },
    two:{
        alignItems:'center',
        justifyContent:'center',
        paddingTop: 30,
        marginBottom:20,
    },
    three:{
        padding: 20,
        paddingTop: 30,
        paddingBottom: 30,
        backgroundColor: "#ebf5f3",
        borderTopLeftRadius: 20,
        height:'100%' ,
    },
    bold:{
        fontWeight: "bold",
        fontSize: 20,
    }, 
    bottom:{
        height:90,
        width:'auto',
        marginTop:'auto',
        backgroundColor:'white',
        borderTopRightRadius:20,
        padding:20,
        flexDirection:'row',
    },
    button:{
        height:50,
        width:120,
        borderRadius:50,
        borderWidth:2,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:20,
    },
    button1:{
        height:50,
        width:120,
        borderRadius:50,
        backgroundColor:'#ebe41c',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:30,
    },
    text:{
        fontSize:12,
        fontWeight:'bold',
    },
    four:{
        height:'18%',
        width:'100%',
        borderRadius:10,
        backgroundColor:'white',
        overflow:'hidden',
        // Shadow properties
        shadowColor: "#000", // Shadow color
        shadowOffset: { width: 3, height: 3 }, // Shadow offset
        shadowOpacity: 0.3, // Shadow opacity
        shadowRadius: 5, // Shadow blur radius
        elevation: 5, // Android shadow
    },
    five:{
        backgroundColor:'#292a2e',
        width:'100%',
        height:'30%',
        justifyContent:'center',
        paddingLeft:20,
    },
    white:{
        color:'white',
        fontWeight:'bold',
    }
})