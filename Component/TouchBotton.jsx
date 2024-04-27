import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const TouchBotton = () => {
    const handleClick = () =>{
        Linking.openURL('https://chat.openai.com/c/22336fb4-586d-437c-a9c0-f1df3f9ce7fc')
    }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleClick} style={styles.btn}><Text style={styles.btntxt}>TouchBotton</Text></TouchableOpacity>
    </View>
  )
}

export default TouchBotton

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:300
    },
    btn :{
        backgroundColor:'white',
        borderRadius:10,
        padding:10
    },
    btntxt:{
        color:'black'
    }
})