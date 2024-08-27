import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { AntDesign, Ionicons, MaterialIcons, Octicons, Entypo } from '@expo/vector-icons';

const DataBundlesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.red}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{ fontSize: 20,paddingLeft:10,fontWeight:'bold' }}>Prepaid Data Bundle</Text>
        </View>
        <View style={styles.one}>
            <Text style={styles.bold}>Low Cost Non Expiry Bundles</Text>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.roll}>
                <TouchableOpacity style={[styles.tab2,{backgroundColor:'#292a2e'}]}>
                    <View style={{marginBottom:'auto'}}>
                        <View style={styles.hi1}>
                            <Text style={[styles.pad1,{color:'white'}]}>Flexi Data Bundles</Text>
                            <View style={styles.meat}>
                                <Text style={{marginRight:2,marginLeft:2}}>REGULAR</Text>
                                <MaterialIcons backgroundColor='#ebe41c' paddingLeft={3} width={22} alignItems="center" justifyContent="center" name="swap-vert" size={15} color="black" />
                            </View>
                        </View>
                    </View>
                            
                    <View style={styles.tab01}> 
                        <View style={[styles.bod,{paddingRight:'12.5%'}]}>
                            <Text>Data</Text>
                            <Text style={{fontWeight:'bold'}}>1.06MB - 92.88GB</Text>
                        </View>
                        <View style={styles.bod1}>
                            <Text>Cost</Text>
                            <Text style={{fontWeight:'bold'}}>GHS 0.03 - 350</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tab2}>
                    <View style={{marginBottom:'auto'}}>
                        <View style={styles.hi1}>
                            <Text style={styles.pad1}>Data Bundle</Text>
                            <View style={styles.meat}>
                                <Text style={{marginRight:2,marginLeft:2}}>REGULAR</Text>
                                <MaterialIcons backgroundColor='black' paddingLeft={3} width={22} alignItems="center" justifyContent="center" name="swap-vert" size={15} color="white" />
                            </View>
                        </View>
                    </View>
                            
                    <View style={styles.tab01}> 
                        <View style={[styles.bod,{paddingRight:'30%'}]}>
                            <Text>Data</Text>
                            <Text style={{fontWeight:'bold'}}>17.79MB</Text>
                        </View>
                        <View style={styles.bod1}>
                            <Text>Cost</Text>
                            <Text style={{fontWeight:'bold'}}>GHS 0.5</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tab2}>
                    <View style={{marginBottom:'auto'}}>
                        <View style={styles.hi1}>
                            <Text style={styles.pad1}>Data Bundle</Text>
                            <View style={styles.meat}>
                                <Text style={{marginRight:2,marginLeft:2}}>REGULAR</Text>
                                <MaterialIcons backgroundColor='black' paddingLeft={3} width={22} alignItems="center" justifyContent="center" name="swap-vert" size={15} color="white" />
                            </View>
                        </View>
                    </View>
                            
                    <View style={styles.tab01}> 
                        <View style={[styles.bod,{paddingRight:'30%'}]}>
                            <Text>Data</Text>
                            <Text style={{fontWeight:'bold'}}>35.57MB</Text>
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
                            <Text style={styles.pad1}>Data Bundle</Text>
                            <View style={styles.meat}>
                                <Text style={{marginRight:2,marginLeft:2}}>REGULAR</Text>
                                <MaterialIcons backgroundColor='black' paddingLeft={3} width={22} alignItems="center" justifyContent="center" name="swap-vert" size={15} color="white" />
                            </View>
                        </View>
                    </View>
                            
                    <View style={styles.tab01}> 
                        <View style={[styles.bod,{paddingRight:'27.5%'}]}>
                            <Text>Data</Text>
                            <Text style={{fontWeight:'bold'}}>349.24MB</Text>
                        </View>
                        <View style={styles.bod1}>
                            <Text>Cost</Text>
                            <Text style={{fontWeight:'bold'}}>GHS 3</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tab2}>
                    <View style={{marginBottom:'auto'}}>
                        <View style={styles.hi1}>
                            <Text style={styles.pad1}>Data Bundle</Text>
                            <View style={styles.meat}>
                                <Text style={{marginRight:2,marginLeft:2}}>REGULAR</Text>
                                <MaterialIcons backgroundColor='black' paddingLeft={3} width={22} alignItems="center" justifyContent="center" name="swap-vert" size={15} color="white" />
                            </View>
                        </View>
                    </View>
                            
                    <View style={styles.tab01}> 
                        <View style={[styles.bod,{paddingRight:'26%'}]}>
                            <Text>Data</Text>
                            <Text style={{fontWeight:'bold'}}>718.91MB</Text>
                        </View>
                        <View style={styles.bod1}>
                            <Text>Cost</Text>
                            <Text style={{fontWeight:'bold'}}>GHS 10</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.tab2,{marginBottom:10}]}>
                    <View style={{marginBottom:'auto'}}>
                        <View style={styles.hi1}>
                            <Text style={styles.pad1}>Data Bundle</Text>
                            <View style={styles.meat}>
                                <Text style={{marginRight:2,marginLeft:2}}>REGULAR</Text>
                                <MaterialIcons backgroundColor='black' paddingLeft={3} width={22} alignItems="center" justifyContent="center" name="swap-vert" size={15} color="white" />
                            </View>
                        </View>
                    </View>
                            
                    <View style={styles.tab01}> 
                        <View style={[styles.bod,{paddingRight:'30%'}]}>
                            <Text>Data</Text>
                            <Text style={{fontWeight:'bold'}}>92.88GB</Text>
                        </View>
                        <View style={styles.bod1}>
                            <Text>Cost</Text>
                            <Text style={{fontWeight:'bold'}}>GHS 350</Text>
                        </View>
                    </View>
                </TouchableOpacity>

            </ScrollView>
            <View style={{backgroundColor:'#ebf5f3', flex:1, height:'100%', width:'100%', marginTop:20 }}></View>
        </View>
    </View>
  )
}

export default DataBundlesScreen

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
    
    },
})