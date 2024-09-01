import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import React from 'react';
import {Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const AirtimeScreen = () =>  {

    const navigation = useNavigation();

    const handleNavigationToHistory = () =>{
        navigation.navigate('History',{initialTab:'Airtime'});
    };

    const handleNavigationToBuy =() =>{
        navigation.navigate('Buy');
    };
  return (
    <View style={styles.container}>
        <View style={styles.white}>
            <View style={{padding:30}}>
                <Text style={{fontSize:28,fontWeight:'bold',marginBottom:20,}}>GHS 0.00</Text>
                <Text style={{fontSize:14,color:'grey',fontWeight:'bold'}}>Detailed Balance</Text>
                <View style={styles.box}>
                    <View style={{alignItems:'center', justifyContent:'center',marginLeft:15}}>
                        <Feather name="phone-call" size={30} color="black" />
                    </View>
                    <View style={styles.inner}>
                        <Text style={{fontWeight:'bold'}}>GHS 0.00</Text>
                        <Text style={{color:'grey',fontSize:12}}>Prepaid Airtime</Text>
                        <Text style={{color:'grey',fontSize:12}}>No Expiry</Text>
                    </View>
                </View>

                <View style={styles.box1}>
                    <View style={{alignItems:'center', justifyContent:'center',marginLeft:15}}>
                        <Feather name="phone-call" size={35} color="black" />
                    </View>
                    <View style={styles.inner}>
                        <Text style={{fontWeight:'bold'}}>GHS 0.00</Text>
                        <Text style={{color:'grey',fontSize:12}}>Loyalty Voice Redemption</Text>
                        <Text style={{color:'grey',fontSize:12}}>Expires Thu Sep 12 2024, 12:00:00</Text>
                    </View>
                </View>
            </View>

            <View style={styles.bottom}>
                <TouchableOpacity onPress={handleNavigationToHistory} style={styles.button}>
                    <Text style={styles.text}>VIEW HISTORY</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleNavigationToBuy} style={styles.button1}>
                    <Text style={styles.text}>BUY AIRTIME</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
};

export default AirtimeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#292a2e',
        height:'100%',
    },
    white:{
        backgroundColor:'#ebe8e8',
        height:'100%',
        borderTopLeftRadius:20,         
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
    box:{
        height:80,
        width:310,
        backgroundColor:'#ebe41c',
        borderRadius:7,
        marginTop:20,
        flexDirection:'row',
        overflow:'hidden'
    },
    box1:{
        height:80,
        width:310,
        backgroundColor:'#ebe41c',
        borderRadius:7,
        marginTop:10,
        flexDirection:'row',
        overflow:'hidden'
    },
    inner:{
        backgroundColor:'white',
        height:'100%',
        width:'80%',
        marginLeft:'auto',
        borderTopLeftRadius:10,
        padding:20,

    },
})



