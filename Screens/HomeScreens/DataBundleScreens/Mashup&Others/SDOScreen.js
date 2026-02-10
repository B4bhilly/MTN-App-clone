import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign} from '@expo/vector-icons';


const SDOScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.red}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="arrow-left" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{ fontSize: 20,paddingLeft:10, fontWeight:'bold', }}> Offer </Text>
        </View>
        <View style={styles.black}>
            <Text style={[styles.white, styles.bold, {fontSize:25,marginBottom:10}]}>Holiday Bundle Offer</Text>
            <Text style={[styles.white,{fontSize:13,}]}>Holiday panning made easy with MTN! 2.5 GB of data for </Text>
            <Text style={[styles.white,{fontSize:13,}]}>only GHS 10. MAke your holiday stress-free. Offer valid </Text>
            <Text style={[styles.white,{fontSize:13,}]}>for 24hours only! </Text>
        </View>
        <View style={{height:'100%',width:'auto',backgroundColor:'#b3ecff',}}>
            <View style={styles.mid}>
                <Text style={[styles.bold,{marginBottom:30,}]}>WHAT CAN I EARN FROM PROMO?</Text>
                <View style={styles.dot}>
                    <View style={styles.bullet}><Text>1</Text></View> 
                    <Text>2.5GB of Data every public holiday</Text>  
                </View>

                <View style={styles.dot}>
                    <View style={styles.bullet}><Text>2</Text></View> 
                    <Text>It's for GHS10 only</Text>  
                </View>

                <View style={styles.dot}>
                    <View style={styles.bullet}><Text>3</Text></View> 
                    <Text>This offer lasts for 24 hours</Text>  
                </View>

                <View style={styles.dot}>
                    <View style={styles.bullet}><Text>4</Text></View> 
                    <Text>Automatically renews on next holiday</Text>  
                </View>

                <Text style={[styles.bold,{marginTop:30,}]}>TERMS AND CONDITIONS</Text>
                <Text style={[styles.bold,{marginTop:10,}]}>
                    Terms & Conditions<Text style={{fontWeight:'normal'}}> apply</Text>
                </Text>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.button1}>
                    <Text style={styles.text}>JOIN OFFER</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default SDOScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'white',
    },
    red:{
        height:'12.5%',
        width:'auto',
        backgroundColor:'#ebe41c',
        flexDirection:'row',
        paddingTop:30,
        paddingLeft:20,
        alignItems:'center'
    },
    black:{
        height:'25%',
        backgroundColor:"#292a2e",
        justifyContent:'center',
        alignItems:'flex-start',
        paddingLeft:30,
    },
    white:{ 
        color:'white',
    },
    mid:{
        paddingTop:50,
        paddingLeft:30,
        //alignItems:'center'
    },
    bold:{
        fontWeight:'bold'
    },
    bullet:{
        height:25,
        width:25,
        backgroundColor:'orange',
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        marginRight:10,
    },
    dot:{
        alignItems:'center',
        flexDirection:'row',
        padding:7,
        paddingLeft:10,
    },
    bottom:{
        position:'absolute',
        height:90,
        width:'100%',
        marginTop:450,
        backgroundColor:'white',
        borderTopRightRadius:20,
        padding:20,
        alignItems:'center',
        justifyContent:'center',
    },
    button1:{
      height:50,
      width:280,
      borderRadius:50,
      backgroundColor:'#ebe41c',
      justifyContent:'center',
      alignItems:'center',
    },
    text:{
        fontSize:12,
        fontWeight:'bold',
    },
})