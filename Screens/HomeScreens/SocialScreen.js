import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import React from 'react';
import { AntDesign, Ionicons, MaterialIcons, Octicons, Entypo } from '@expo/vector-icons';


const SocialScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.red}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{ fontSize: 20,paddingLeft:10,fontWeight:'bold' }}>Social Bundles</Text>
        </View>
        <View style={styles.one}>
            <Text style={styles.bold}>Use these packages to stream WhatsApp, FB, IG, Twitter, Wechat and Tiktok</Text>
            <View  style={styles.roll}>
                <TouchableOpacity style={[styles.tab2,{backgroundColor:'#292a2e'}]}>
                    <View style={{marginBottom:'auto'}}>
                        <View style={styles.hi1}>
                            <Text style={[styles.pad1,{color:'white'}]}>Flexi Social Bundles</Text>
                            <View style={styles.meat}>
                                <Text style={{marginRight:2,marginLeft:2}}>SOCIAL</Text>
                                <View style={styles.icon}>
                                    <Entypo name="instagram" size={14} color="black" />
                                    <Ionicons name="logo-whatsapp" size={14} color="black" />
                                    <Entypo name="facebook" size={14} color="black" />
                                    <AntDesign name="wechat" size={14} color="black" />
                                    <MaterialIcons name="tiktok" size={14} color="black" />
                                </View>
                            </View>
                        </View>
                    </View>
                            
                    <View style={styles.tab01}> 
                        <View style={[styles.bod,{paddingRight:'12.5%'}]}>
                            <Text>Data</Text>
                            <Text style={{fontWeight:'bold'}}>2.13MB - 27.62GB</Text>
                        </View>
                        <View style={styles.bod1}>
                            <Text>Cost</Text>
                            <Text style={{fontWeight:'bold'}}>GHS 0.03 - 399</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tab2}>
                    <View style={{marginBottom:'auto'}}>
                        <View style={styles.hi1}>
                            <Text style={styles.pad1}>Social Bundle</Text>
                            <View style={styles.meat}>
                                <Text style={{marginRight:2,marginLeft:2}}>SOCIAL</Text>
                                <View style={styles.icon1}>
                                    <Entypo name="instagram" size={14} color="white" />
                                    <Ionicons name="logo-whatsapp" size={14} color="white" />
                                    <Entypo name="facebook" size={14} color="white" />
                                    <AntDesign name="wechat" size={14} color="white" />
                                    <MaterialIcons name="tiktok" size={14} color="white" />
                                </View>
                            </View>
                        </View>
                    </View>
                            
                    <View style={styles.tab01}> 
                        <View style={[styles.bod,{paddingRight:'30%'}]}>
                            <Text>Data</Text>
                            <Text style={{fontWeight:'bold'}}>70.87MB</Text>
                        </View>
                        <View style={styles.bod1}>
                            <Text>Cost</Text>
                            <Text style={{fontWeight:'bold'}}>GHS 1</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tab2}>
                    <View style={{marginBottom:'auto'}}>
                        <View style={styles.hi1}>
                            <Text style={styles.pad1}>Social Bundle</Text>
                            <View style={styles.meat}>
                                <Text style={{marginRight:2,marginLeft:2}}>SOCIAL</Text>
                                <View style={styles.icon1}>
                                    <Entypo name="instagram" size={14} color="white" />
                                    <Ionicons name="logo-whatsapp" size={14} color="white" />
                                    <Entypo name="facebook" size={14} color="white" />
                                    <AntDesign name="wechat" size={14} color="white" />
                                    <MaterialIcons name="tiktok" size={14} color="white" />
                                </View>
                            </View>
                        </View>
                    </View>
                            
                    <View style={styles.tab01}> 
                        <View style={[styles.bod,{paddingRight:'27.5%'}]}>
                            <Text>Data</Text>
                            <Text style={{fontWeight:'bold'}}>354.36MB</Text>
                        </View>
                        <View style={styles.bod1}>
                            <Text>Cost</Text>
                            <Text style={{fontWeight:'bold'}}>GHS 5</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tab2}>
                    <View style={{marginBottom:'auto'}}>
                        <View style={styles.hi1}>
                            <Text style={styles.pad1}>Social Bundle</Text>
                            <View style={styles.meat}>
                                <Text style={{marginRight:2,marginLeft:2}}>SOCIAL</Text>
                                <View style={styles.icon1}>
                                    <Entypo name="instagram" size={14} color="white" />
                                    <Ionicons name="logo-whatsapp" size={14} color="white" />
                                    <Entypo name="facebook" size={14} color="white" />
                                    <AntDesign name="wechat" size={14} color="white" />
                                    <MaterialIcons name="tiktok" size={14} color="white" />
                                </View>
                            </View>
                        </View>
                    </View>
                            
                    <View style={styles.tab01}> 
                        <View style={[styles.bod,{paddingRight:'27.5%'}]}>
                            <Text>Data</Text>
                            <Text style={{fontWeight:'bold'}}>708.72MB</Text>
                        </View>
                        <View style={styles.bod1}>
                            <Text>Cost</Text>
                            <Text style={{fontWeight:'bold'}}>GHS 10</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{backgroundColor:'#ebf5f3', flex:1, height:'100%', width:'100%', marginTop:20 }}></View>
        </View>
    </View>
  )
}

export default SocialScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ebe41c',
    },
    red:{
        height:'12.5%',
        width:'100%',
        backgroundColor:'#ebe41c',
        flexDirection:'row',
        paddingTop:30,
        paddingLeft:20,
        alignItems:'center'
    },
    one:{
        backgroundColor:'#ebf5f3',
        height:'100%',
        width:'100%',
        borderTopLeftRadius:20,
        padding:20,
        //marginBottom:50,
    },
    bold:{
        fontWeight:'bold',
        marginBottom:20,
    },
    roll:{
        backgroundColor:'#ebf5f3',
        height:'82%',
        width:'100%',
        marginBottom:90,
    },
    tab01:{
        height:'55%',
        backgroundColor:'white',
        alignContent:'flex-end',
        margin:1.5,
        borderTopLeftRadius:10,
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        padding:5,
        paddingLeft:20,
        flexDirection:'row',
        width:'auto',
    },
    tab2:{
        height: 100,
        width: '100%',
        backgroundColor:'#ebe41c',
        borderRadius:10,
        marginTop:20,
        overflow:'hidden',
    },
    hi1:{
        padding:15,
        //paddingLeft:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    pad1:{
        paddingLeft: 10,
        fontWeight:'bold'
    },
    bod:{
        paddingRight:'33%',
        borderRightWidth:StyleSheet.hairlineWidth,
        borderColor: 'grey',
        
    },
    bod1:{
        paddingLeft: '10%',
    },
    meat:{
        backgroundColor:'white',
        marginLeft:'auto',
        flexDirection:'row',
        borderTopRightRadius:5,
        borderBottomRightRadius:5,
        overflow:'hidden',
        width:"41%"
    },
    icon:{
        backgroundColor:'#ebe41c',
        width:'66%',
        alignItems:"center",
        justifyContent:"center",
        flexDirection:'row',
        justifyContent:'space-around',
        paddingLeft:2,
        paddingRight:5,
    },
    icon1:{
        backgroundColor:'grey',
        width:'66%',
        alignItems:"center",
        justifyContent:"center",
        flexDirection:'row',
        justifyContent:'space-around',
        paddingLeft:2,
        paddingRight:5,
    },
})