import { StyleSheet, Text, View , ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {AntDesign, MaterialCommunityIcons, MaterialIcons, Ionicons, Octicons, FontAwesome6, Feather, SimpleLineIcons, Entypo} from '@expo/vector-icons'


const MoreScreen = ({navigation}) => {
  
  const handleNavigationToAccount = () =>{
    navigation.navigate('Account')
  };
  return (
    <View style={styles.container}>
        <View style={styles.zero}>
          <TouchableOpacity style={styles.profile}>
            <Ionicons name="person" size={44} color="white" />
            <View style={styles.plus}>
              <Entypo name="plus" size={24} color="#ebe41c" />
            </View>
          </TouchableOpacity>
          <View style={{position:'absolute',top:60,justifyContent:'center',
            alignItems:'center'
          }}>
            <Text style={{fontSize:20, }}>User</Text>
            <Text style={{color:'grey',marginBottom:10}}>number</Text>
            <TouchableOpacity onPress={handleNavigationToAccount} style={styles.two}>
              <Octicons name="feed-person" size={15} color="black" />
              <Text style={[styles.bold, {paddingLeft:5,paddingRight:5,}]}>MY ACCOUNT</Text>
              <AntDesign name="right" size={15} color="black" />
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false} style={styles.one}>
            <View style={{padding:20}}>
              <Text style={styles.text}>My MTN</Text>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:150,marginBottom:10,}}>
                <TouchableOpacity style={{alignItems:'center',marginLeft:10,justifyContent:'center',}}>
                  <View style={styles.icon}>
                    <MaterialIcons name="star-outline" size={24} color="black" />
                  </View>
                  <Text>Send</Text>
                  <Text>Feedback</Text>
                </TouchableOpacity> 

                <TouchableOpacity style={{alignItems:'center',marginLeft:10,}}>
                  <View style={styles.icon}>
                    <Ionicons name="heart-outline" size={24} color="black" />
                  </View>
                  <Text>Manage</Text>
                  <Text>subscriptions</Text>
                </TouchableOpacity> 
              </View>
            </View>

            <View style={{padding:20}}>
              <Text style={styles.text}>Get More From MTN</Text>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:5,marginBottom:10,}}>
                <TouchableOpacity style={{alignItems:'center',marginLeft:10,justifyContent:'center',}}>
                  <View style={styles.icon}>
                    <Octicons name="device-mobile" size={24} color="black" />
                  </View>
                  <Text>Discover</Text>
                  <Text>Apps</Text>
                </TouchableOpacity> 

                <TouchableOpacity style={{alignItems:'center',marginLeft:10,}}>
                  <View style={styles.icon}>
                    <Octicons name="broadcast" size={24} color="black" />
                  </View>
                  <Text>Request</Text>
                  <Text>Broadband</Text>
                </TouchableOpacity> 

                <TouchableOpacity style={{alignItems:'center',marginLeft:10,}}>
                  <View style={styles.icon}>
                    <MaterialIcons name="sim-card" size={24} color="black" />
                  </View>
                  <Text>Get</Text>
                  <Text>E-sim</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignItems:'center',marginLeft:10,}}>
                  <View style={styles.icon}>
                    <MaterialCommunityIcons name="play-box-outline" size={24} color="black" />
                  </View>
                  <Text>Play</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{padding:20}}>
              <Text style={styles.text}>Help and Support</Text>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:150,marginBottom:10,}}>
                <TouchableOpacity style={{alignItems:'center',marginLeft:10,justifyContent:'center',}}>
                  <View style={styles.icon}>
                    <MaterialIcons name="perm-contact-cal" size={24} color="black" />
                  </View>
                  <Text>Contact</Text>
                  <Text>Us</Text>
                </TouchableOpacity> 

                <TouchableOpacity style={{alignItems:'center',marginLeft:10,}}>
                  <View style={styles.icon}>
                    <FontAwesome6 name="shop" size={24} color="black" />
                  </View>
                  <Text>Find a</Text>
                  <Text>Store</Text>
                </TouchableOpacity> 
              </View> 
            </View>

            <View style={{padding:20}}>
              <Text style={styles.text}>My MTN</Text>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:150,marginBottom:10,}}>
                <TouchableOpacity style={{alignItems:'center',marginLeft:10,justifyContent:'center',}}>
                  <View style={styles.icon}>
                    <Feather name="file-text" size={24} color="black" />
                  </View>
                  <Text>Legal</Text>
                  <Text>Policy</Text>
                </TouchableOpacity> 
              </View>
            </View>
            
            <View style={{alignItems:'center',justifyContent:'center',marginBottom:40,}}>
              <Text style={{color:'grey',marginBottom:10}}>App Version</Text>
              <TouchableOpacity style={[styles.two, {width:120}]}>
                <SimpleLineIcons style={{marginRight:15}} name="logout" size={14} color="black" />
                <Text style={styles.bold}>LOGOUT</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
    </View>
  )
}

export default MoreScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'yellow',
  },
  zero:{
    //flex:1,
    backgroundColor:'#ebe8e8',
    height:'100%',
    width:'100%',
    // borderWidth:1,
    // borderColor:'black',
    //padding:20,
    marginTop:'30%',
    //marginBottom:20,
    alignItems:'center',
    justifyContent:'center',
  },
  profile:{
    borderWidth:4,
    borderColor:'white',
    width:100,
    height:100,
    borderRadius:50,
    backgroundColor:'#ebe41c',
    alignItems:'center',
    justifyContent:'center',
    //marginBottom:20,
    position:'absolute',
    top:-50,
  },
  one:{
    //flexDirection:'row',
    backgroundColor:'#ebf5f3',
    width:'100%',
    height:'100%',
    marginTop:160,
    marginBottom:100,
    borderTopLeftRadius:20,
  },
  two:{
    height:32,
    width:140,
    borderWidth:2,
    borderRadius:50,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    fontSize:20,
    color:'grey',
    marginBottom:10,
  },
  icon:{
    width:50,
    height:50,
    borderWidth:2,
    borderColor:'orange',
    borderRadius:10,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
  },
  plus:{
    position:'absolute',
    height:25,
    width:25,
    borderRadius:100,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    top:65,
    left:70,
  },
  bold:{
    fontSize:12,
    fontWeight:'bold',
  },
})