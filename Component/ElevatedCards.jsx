import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <>
    <Text style={styles.header}>Elevated Crads</Text>
    <ScrollView horizontal style={styles.container}>
    <View style={styles.commView}><Text>Tap me</Text></View>
    <View style={styles.commView}><Text>Tap me</Text></View>
    <View style={styles.commView}><Text>Tap me</Text></View>
    <View style={styles.commView}><Text>Tap me</Text></View>
    <View style={styles.commView}><Text>Tap me</Text></View>
    <View style={styles.commView}><Text>Tap me</Text></View>
    </ScrollView>
    </>
  )
}

export default ElevatedCards

const styles = StyleSheet.create({
    header : {
        margin:8,
        marginLeft:20,
        fontSize:20,
        fontWeight:'bold'
    },
    container : {
        flex:1,
        flexDirection:'row',
        marginLeft:8,
        marginRight:20
    },
    commView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5BCBA',
        height:100,
        width:100,
        margin:8,
        borderRadius:10
    }
})