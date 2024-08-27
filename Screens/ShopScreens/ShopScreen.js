import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import {MaterialIcons, Octicons, Ionicons, MaterialCommunityIcons, Feather, FontAwesome6} from '@expo/vector-icons'

const ShopScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{padding:20,marginTop:30}}>
        <Text style={{fontSize:20}}>Shop</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <TouchableOpacity style={styles.tab}></TouchableOpacity>
        <View style={styles.man}>
          <Text style={{fontSize:20}}>What do you need?</Text>
          <View style={styles.border}>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10,marginLeft:10,}}>
                <TouchableOpacity style={{alignItems:'center',}}>
                  <View style={styles.icon}>
                  <MaterialIcons name="sim-card" size={24} color="white" />
                  </View>
                  <Text>Airtime</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignItems:'center',marginLeft:5}}>
                  <View style={styles.icon}>
                  <MaterialIcons name="swap-vert" size={30} color="white" />
                  </View>
                  <Text>Data</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignItems:'center',marginRight:10}}>
                  <View style={styles.icon}>
                  <Octicons name="database" size={24} color="white" />
                  </View>
                  <Text>MashUp</Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10,}}>
                <TouchableOpacity style={{alignItems:'center',marginLeft:-1,}}>
                  <View style={styles.icon}>
                    <Octicons name="broadcast" size={24} color="white" />
                  </View>
                  <Text>Broadband</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignItems:'center',marginLeft:10,}}>
                  <View style={styles.icon}>
                    <MaterialCommunityIcons name="star-circle-outline" size={30} color="white" />
                  </View>
                  <Text>Just4U</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignItems:'center',marginRight:2}}>
                  <View style={styles.icon}>
                    <Feather name="phone-call" size={24} color="white" />
                  </View>
                  <Text>Call Abroad</Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10,}}>
                <TouchableOpacity style={{alignItems:'center',marginLeft:-5,}}>
                  <View style={styles.icon}>
                    <MaterialIcons name="library-music" size={24} color="white" />
                  </View>
                  <Text>Caller Tunez</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignItems:'center',marginLeft:10,}}>
                  <View style={styles.icon}>
                    <FontAwesome6 name="shop" size={24} color="white" />
                  </View>
                  <Text>SME Plus</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignItems:'center',marginRight:-5}}>
                  <View style={styles.icon}>
                    <FontAwesome6 name="briefcase" size={24} color="white" />
                  </View>
                  <Text>Business Hub</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.color}>
            <Text style={{fontSize:20, marginBottom:10,marginTop:30,}}>Popular Bundle</Text>
            <TouchableOpacity style={styles.tab2}>
              <View style={{marginBottom:'auto'}}>
                <View style={styles.hi}>
                  <Text style={styles.pad1}>Data Bundle</Text>
                  <View style={styles.meat}>
                    <Text Style={{padding:1}}>MIDNIGHT</Text>
                    <Ionicons backgroundColor='black' paddingLeft='8%' width={25} alignItems="center" justifyContent="center" name="moon-sharp" size={14} color="white" />
                  </View>
                </View>
              </View>
                          
              <View style={styles.tab01}> 
                <Text style={styles.pad2}>100MB</Text>
                <Text style={styles.pad3}>100MB</Text> 
              </View>
            </TouchableOpacity>
          </View>
      </ScrollView>
    </View>
  )
}

export default ShopScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor:'yellow',
    flex:1,
  },
  scroll:{
    backgroundColor:'white',
    //flex:1,
  },
  tab:{
    backgroundColor:'red',
    height:180,
    width:'auto',

  },
  man:{
    padding:20,  
  },
  border:{
    // borderWidth:1,
    // borderBottomColor:'black',
    margin:5,
    marginBottom:20,
    height:200,
    width:'auto',
    padding:10,
    flex:1,
  },
  icon:{
    width:40,
     height:40,
      borderRadius:50,
      backgroundColor:'#292a2e',
      justifyContent:'center',
      alignItems:'center',
  },
  tab01:{
    height:'55%',
    backgroundColor:'white',
    alignContent:'flex-end',
    margin:1.5,
    borderTopLeftRadius:15,
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
    padding:10,
    flexDirection:'row',
    width:'auto',
},
  tab2:{
    height: 110,
    width: 'auto',
    backgroundColor:'#ebe41c',
    borderRadius:10,
    //marginBottom:5,
    overflow:'hidden',
    // // Shadow properties
    // shadowColor: '#000', // Shadow color
    // shadowOffset: { width: 3, height: 3 }, // Shadow offset
    // shadowOpacity: 0.3, // Shadow opacity
    // shadowRadius: 5, // Shadow blur radius
    // elevation: 5, // Android shadow
  },
  hi:{
      padding:15,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
  },
  pad:{
      paddingRight: 10,
      fontSize:12,
  },
  pad1:{
      paddingLeft: 10,
  },
  pad2:{
      paddingLeft: 10,
      paddingTop:10,
      paddingRight:'30%',
      borderRightWidth:StyleSheet.hairlineWidth,
      borderColor: 'grey',
      
  },
  pad3:{
    paddingTop:10,
    paddingLeft: '25%',
},
  meat:{
    backgroundColor:'white',
    marginLeft:'auto',
    flexDirection:'row',
    borderTopRightRadius:5,
    borderBottomRightRadius:5,
    overflow:'hidden',
  },
  color:{
    backgroundColor:'#ebf5f3',
    padding:20,
    borderTopLeftRadius:20,
    paddingBottom:40,

  },
})