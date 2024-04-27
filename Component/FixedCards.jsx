import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FixedCards = () => {
  return (
    <>
    <Text style={styles.header}>Flat Cards</Text>
    <View style={styles.container}>
        <View style={[styles.commView,styles.redView]}><Text>Red</Text></View>
        <View style={[styles.commView,styles.blueView]}><Text>Blue</Text></View>
        <View style={[styles.commView,styles.greenView]}><Text>Green</Text></View>
        <View style={[styles.commView,styles.yellowView]}><Text>Yellow</Text></View>
    </View>
    </>
  )
}

export default FixedCards

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-evenly' ,
        gap:20,
        marginLeft:20,
        marginRight:20
    },
    commView : {
        height:100,
        width : 100,
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10

    },
    redView :{
        backgroundColor:'#D63031'
    },
    blueView:{
        backgroundColor:'#3498DB'
    },
    greenView :{
        backgroundColor:'#26ae60'
    },
    yellowView:{
        backgroundColor:'#F3B431'
    },
    header :{
        margin:8,
        marginLeft:20,
        fontSize:20,
        fontWeight:'bold'
    }
})