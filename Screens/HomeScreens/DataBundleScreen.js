import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign, Ionicons, MaterialIcons, Octicons, Entypo } from '@expo/vector-icons';

const DataBundleScreen = ({navigation}) => {
    const handleNavigationToBundles = () =>{
        navigation.navigate('Bundles')
    };

    const handleNavigationToFibre = () =>{
        navigation.navigate('Fibre');
    };

    const handleNavigationToSocial = () =>{
        navigation.navigate('Social')
    };

    const handleNavigationToMashUp = () =>{
        navigation.navigate('MashUp')
    };

  return (
    <View style={styles.container}>
        <View style={styles.red}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{ fontSize: 20,paddingLeft:10, fontWeight:'bold', }}>Data </Text>
        </View>
        <View style={styles.one}>
            <Text>Buy Again</Text>
            <TouchableOpacity style={styles.tab2}>
                <View style={{marginBottom:'auto'}}>
                    <View style={styles.hi1}>
                        <Text style={styles.pad1}>Data Bundle</Text>
                        <View style={styles.meat}>
                            <Text>MIDNIGHT</Text>
                            <Ionicons backgroundColor='black' paddingLeft={3} width={22} alignItems="center" justifyContent="center" name="moon-sharp" size={14} color="white" />
                        </View>
                    </View>
                </View>
                        
                <View style={styles.tab01}> 
                    <View style={styles.bod}>
                        <Text>Data</Text>
                        <Text style={{fontWeight:'bold'}}>7.27GB</Text>
                    </View>
                    <View style={styles.bod1}>
                        <Text>Cost</Text>
                        <Text style={{fontWeight:'bold'}}>GHS 3</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.two}>
            <TouchableOpacity onPress={handleNavigationToBundles} style={styles.butt}>
                <MaterialIcons name="swap-vert" size={25} color="grey" />
                <View style={{marginLeft:10, marginRight:'auto'}}>
                    <Text style={{fontWeight:'bold'}}>Data Bundle</Text>
                    <Text>Bundles for anytime and anywhere</Text>
                </View>
                <AntDesign name="right" size={15} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={handleNavigationToFibre} style={styles.butt}>
                <Octicons name="broadcast" size={25} color="grey" /> 
                <View style={{marginLeft:10, marginRight:'auto'}}>
                    <Text style={{fontWeight:'bold'}}>Fibre & Turbonet Bundles</Text>
                    <Text>Connect your home and office</Text>
                </View>
                <AntDesign name="right" size={15} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={handleNavigationToSocial} style={styles.butt}>
                <Ionicons name="chatbox-ellipses-outline" size={25} color="grey" />
                <View style={{marginLeft:10, marginRight:'auto'}}>
                    <Text style={{fontWeight:'bold'}}>Social Media Bundle</Text>
                    <Text>Bundles for social media</Text>
                </View>
                <AntDesign name="right" size={15} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={handleNavigationToMashUp} style={styles.butt}>
                <Entypo name="plus" size={25} color="grey" />
                <View style={{marginLeft:10, marginRight:'auto'}}>
                    <Text style={{fontWeight:'bold'}}>Mashup</Text>
                    <Text>Get a mashup data and voice</Text>
                </View>
                <AntDesign name="right" size={15} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.butt}>
                <Entypo name="plus" size={25} color="grey" />
                <View style={{marginLeft:10, marginRight:'auto'}}>
                    <Text style={{fontWeight:'bold'}}>Others</Text>
                    <Text>Videos, Midnight and kokrokoo</Text>
                </View>
                <AntDesign name="right" size={15} color="black" />
            </TouchableOpacity>

        </View>
    </View>
  )
}

export default DataBundleScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'white'
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
        padding:30,
        paddingTop:60,
        height:'32%',
        width:'100%'
    },
    two:{
        padding:20,
        backgroundColor:'#ebf5f3',
        height:'100%',
        width:'100%',
        borderTopLeftRadius:20,
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
    butt:{
        padding:15,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderColor:'grey',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
})