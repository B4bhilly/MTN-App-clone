import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { AntDesign, Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons';



const GhsOneScreen = () => {
  return (
    <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.one}>
            <Text style={styles.bold}>Customize a mix of data and voice with a free social package too.</Text>
            <View  style={styles.roll}>
                <TouchableOpacity style={styles.tab2}>
                    <View style={{marginBottom:'auto'}}>
                        <View style={styles.hi1}>
                            <Text style={styles.pad1}>GHS 1 Mashup</Text>
                            <View style={styles.meat}>
                                <Text style={{marginRight:2,marginLeft:2}}>MASHUP</Text>
                                <View style={styles.icon1}>
                                    <Ionicons name="logo-whatsapp" size={14} color="white" />
                                </View>
                            </View>
                        </View>
                    </View>
                            
                    <View style={styles.tab01}> 
                        <View style={[styles.bod,{paddingRight:'27.5%'}]}>
                            <Text>Data</Text>
                            <Text style={{fontWeight:'bold'}}>43.67 MB</Text>
                        </View>
                        <View style={styles.bod1}>
                            <Text>Voice</Text>
                            <Text style={{fontWeight:'bold'}}>0 Mins</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tab2}>
                    <View style={{marginBottom:'auto'}}>
                        <View style={styles.hi1}>
                            <Text style={styles.pad1}>GHS 1 Mashup</Text>
                            <View style={styles.meat}>
                                <Text style={{marginRight:2,marginLeft:2}}>MASHUP</Text>
                                <View style={styles.icon1}>
                                    <Ionicons name="logo-whatsapp" size={14} color="white" />
                                </View>
                            </View>
                        </View>
                    </View>
                            
                    <View style={styles.tab01}> 
                        <View style={[styles.bod,{paddingRight:'27.5%'}]}>
                            <Text>Data</Text>
                            <Text style={{fontWeight:'bold'}}>21.83 MB</Text>
                        </View>
                        <View style={styles.bod1}>
                            <Text>Voice</Text>
                            <Text style={{fontWeight:'bold'}}>11.02 Mins</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tab2}>
                    <View style={{marginBottom:'auto'}}>
                        <View style={styles.hi1}>
                            <Text style={styles.pad1}>GHS 1 Mashup</Text>
                            <View style={styles.meat}>
                                <Text style={{marginRight:2,marginLeft:2}}>MASHUP</Text>
                                <View style={styles.icon1}>
                                    <Ionicons name="logo-whatsapp" size={14} color="white" />
                                </View>
                            </View>
                        </View>
                    </View>
                            
                    <View style={styles.tab01}> 
                        <View style={[styles.bod,{paddingRight:'27.5%'}]}>
                            <Text>Data</Text>
                            <Text style={{fontWeight:'bold'}}>26.20 MB</Text>
                        </View>
                        <View style={styles.bod1}>
                            <Text>Voice</Text>
                            <Text style={{fontWeight:'bold'}}>8.82 Mins</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tab2}>
                    <View style={{marginBottom:'auto'}}>
                        <View style={styles.hi1}>
                            <Text style={styles.pad1}>GHS 1 Mashup</Text>
                            <View style={styles.meat}>
                                <Text style={{marginRight:2,marginLeft:2}}>MASHUP</Text>
                                <View style={styles.icon1}>
                                    <Ionicons name="logo-whatsapp" size={14} color="white" />
                                </View>
                            </View>
                        </View>
                    </View>
                            
                    <View style={styles.tab01}> 
                        <View style={[styles.bod,{paddingRight:'27.5%'}]}>
                            <Text>Data</Text>
                            <Text style={{fontWeight:'bold'}}>30.57 MB</Text>
                        </View>
                        <View style={styles.bod1}>
                            <Text>Voice</Text>
                            <Text style={{fontWeight:'bold'}}>6.6 Mins</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tab2}>
                    <View style={{marginBottom:'auto'}}>
                        <View style={styles.hi1}>
                            <Text style={styles.pad1}>GHS 1 Mashup</Text>
                            <View style={styles.meat}>
                                <Text style={{marginRight:2,marginLeft:2}}>MASHUP</Text>
                                <View style={styles.icon1}>
                                    <Ionicons name="logo-whatsapp" size={14} color="white" />
                                </View>
                            </View>
                        </View>
                    </View>
                            
                    <View style={styles.tab01}> 
                        <View style={[styles.bod,{paddingRight:'27.5%'}]}>
                            <Text>Data</Text>
                            <Text style={{fontWeight:'bold'}}>13.10 MB</Text>
                        </View>
                        <View style={styles.bod1}>
                            <Text>Voice</Text>
                            <Text style={{fontWeight:'bold'}}>15.42 Mins</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>
  )
}

export default GhsOneScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#292a2e',
    },
    one:{
        backgroundColor:'#ebf5f3',
        height:'100%',
        width:'100%',
        borderTopLeftRadius:20,
        padding:20,        
    },
    bold:{
        fontWeight:'bold',
        marginBottom:20,
    },
    roll:{
        backgroundColor:'#ebf5f3',
        height:'82%',
        width:'100%',
        marginBottom:50,
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
        width:"auto"
    },
    icon1:{
        backgroundColor:'grey',
        width:'auto',
        alignItems:"center",
        justifyContent:"center",
        flexDirection:'row',
        justifyContent:'space-around',
        paddingLeft:3,
        paddingRight:3,
    },
})