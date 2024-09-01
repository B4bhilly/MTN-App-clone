import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import React from 'react';
import {MaterialIcons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const DataHScreen = () => {

  const navigation = useNavigation();

  const handleNavigationToHistory = () =>{
    navigation.navigate('History',{initialTab:'Data'});
  };

  const handleNavigationToMomo =() =>{
    navigation.navigate('SendMomo');
  };
return (
  <View style={styles.container}>
    {/* <View style={styles.white}>
      <View style={{padding:30}}>
        <Text style={{fontSize:28,fontWeight:'bold',marginBottom:20,}}>12.90 GB</Text>
        <Text style={{fontSize:14,color:'grey',fontWeight:'bold'}}>Detailed Balance</Text>

        <View style={styles.box}>
          <View style={{alignItems:'center', justifyContent:'center',marginLeft:15}}>
            <MaterialIcons name="swap-vert" size={30} color="black" />
          </View>
          <View style={styles.inner}>
            <Text style={{fontWeight:'bold'}}>12.90 GB</Text>
            <Text style={{color:'grey',fontSize:12}}>DATA GHS 3 (Midnight)</Text>
            <Text style={{color:'grey',fontSize:12}}>No Expiry</Text>
          </View>
        </View>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity onPress={handleNavigationToHistory} style={styles.button}>
          <Text style={styles.text}>VIEW HISTORY</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleNavigationToMomo} style={styles.button1}>
          <Text style={styles.text}>BUY DATA</Text>
        </TouchableOpacity>
      </View>
    </View> */}
    <Text>Data History</Text>
  </View>
    );
};

export default DataHScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
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
