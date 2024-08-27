import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';


const BuyAirtime = ({navigation}) => {
  return (
    <View >style={styles.container}
        <View style={styles.red}>
            <TouchableOpacity style={{ marginRight: 15 }} onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{ fontSize: 20, paddingLeft:10 }}>Detailed BalanceScreen</Text>
        </View>
    </View>
  )
}

export default BuyAirtime

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    red: {
        backgroundColor: '#ebe41c',
        height: '12.5%',
        width: '100%',
        paddingTop: 50,
        paddingLeft: 20,
        flexDirection: 'row',
    },
})