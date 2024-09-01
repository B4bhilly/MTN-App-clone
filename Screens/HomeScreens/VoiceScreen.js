import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const VoiceScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Voice History</Text>
    </View>
  )
}

export default VoiceScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    height:'100%'
},
})