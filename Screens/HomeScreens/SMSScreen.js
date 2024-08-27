import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import {AntDesign, Feather, MaterialIcons,MaterialCommunityIcons} from '@expo/vector-icons'



const SMSScreen = ({navigation}) =>  {

  const handleNavigationToHistory = () =>{
    navigation.navigate('history');
  };

  return (
    <View style={styles.container}>
      <View style={styles.white}>

        <View style={{padding:30}}>
          <Text style={{fontSize:28,fontWeight:'bold',marginBottom:20,}}>4,533 SMS</Text>
          <Text style={{fontSize:14,color:'grey',fontWeight:'bold'}}>Detailed Balance</Text>
          
          <View style={styles.box}>
            <View style={{alignItems:'center', justifyContent:'center',marginLeft:15}}>
              <Feather name="mail" size={30} color="black" />
            </View>
            <View style={styles.inner}>
              <Text style={{fontWeight:'bold'}}>4,533 SMS</Text>
              <Text style={{color:'grey',fontSize:12}}>Mashup Free SMS</Text>
              <Text style={{color:'grey',fontSize:12}}>No Expiry</Text>
            </View>
          </View>
        </View>

        <View style={styles.bottom}>
          <TouchableOpacity onPress={handleNavigationToHistory} style={styles.button1}>
            <Text style={styles.text}>VIEW HISTORY</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
      );
}
export default SMSScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#292a2e',
        height:'100%'
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
  box:{
    height:80,
    width:310,
    backgroundColor:'#ebe41c',
    borderRadius:7,
    marginTop:20,
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

