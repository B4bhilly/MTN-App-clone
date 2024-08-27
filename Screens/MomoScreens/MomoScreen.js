import { Pressable, StyleSheet, Text, TouchableOpacity, View,ScrollView } from 'react-native';
import React from 'react';
import {AntDesign, FontAwesome6, MaterialIcons,MaterialCommunityIcons} from '@expo/vector-icons'

const MomoScreen = ({navigation}) => {
  const handlenavigationToHomeScreen = () =>{
    navigation.navigate('Home')
  };
  return (
    <View style={styles.container}>
      <View style={styles.zero}>
        <TouchableOpacity style={{marginRight:15}} onPress={handlenavigationToHomeScreen}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{fontSize:20, }}>Momo</Text>
      </View>
      
      <ScrollView showsVerticalScrollIndicator={false} style={styles.one}>
        <View style={{padding:20}}>
          <View style={{borderBottomWidth:StyleSheet.hairlineWidth,borderColor:'grey',paddingBottom:10,marginBottom:15,}}>
            <Text style={{fontSize:20}}>Balance</Text>
          </View> 
          <View style={styles.two}></View>
        </View>
        <View style={styles.three}>
          <Text style={{fontSize:20,marginBottom:20 }}>Services</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,}}>
            <TouchableOpacity style={{alignItems:'center',marginLeft:10,}}>
              <View style={styles.icon}>
                <MaterialIcons name="person-add-alt-1" size={30} color="white" />
              </View>
              <Text>Send Momo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{alignItems:'center',marginLeft:10,}}>
              <View style={styles.icon}>
                <MaterialCommunityIcons name="newspaper-variant-outline" size={30} color="white" /> 
                </View>
                <Text>Statement</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{alignItems:'center',marginLeft:10,}}>
              <View style={styles.icon}>
                <MaterialCommunityIcons name="arrow-up-box" size={30} color="white" />
              </View>
              <Text>Cashout</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{marginLeft:20,marginTop:5,marginBottom:30,}}>
            <View style={styles.icon}>
              <MaterialCommunityIcons name="text-box-check-outline" size={30} color="white" />
            </View>
            <Text style={{marginLeft:10,}}>Approvals</Text>
          </TouchableOpacity>
          <Text style={{fontSize:20,marginBottom:20 }}>Momo App</Text>
          <TouchableOpacity style={styles.two}></TouchableOpacity>
        </View>
      </ScrollView>
      
    </View>
  )
}

export default MomoScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'yellow',
  },
  zero:{
    padding:30,
    marginTop:20,
    flexDirection:'row',
  
  },
  one:{
    backgroundColor:'#ebf5f3',
    height:'100%',
    //marginTop:'5%',
    borderTopRightRadius:20,
    //padding:20,
  },
  two:{
    borderWidth:2,
    borderColor:'#4d5f91',
    height:100,
    width:'100%',
    borderRadius:5,
    padding:20,
    //marginBottom:20,
  },
  three:{
    backgroundColor:'white',
    height:'100%',
    borderTopLeftRadius:20,
    padding:20,
    marginBottom:50,
  },
  icon:{
    width:70,
     height:70,
      borderRadius:50,
      backgroundColor:'#4d5f91',
      justifyContent:'center',
      alignItems:'center',
  },
})