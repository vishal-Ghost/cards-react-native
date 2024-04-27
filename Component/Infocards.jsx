import React, { useState } from 'react';
import {  Image, Linking, StyleSheet, Text, TouchableOpacity, View,Clipboard } from 'react-native';

const Infocards = () => {

    const [infoText, setInfoText] = useState(
        "The Taj Mahal (/ˌtɑːdʒ məˈhɑːl, ˌtɑːʒ-/; lit. 'Crown of the Palace')[4][5][6] is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan (r. 1628–1658) to house the tomb of his beloved wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall "
    );
    const handleLink = () =>{
        Linking.openURL('https://en.wikipedia.org/wiki/Taj_Mahal')
    }

    const handleCopy = () =>{
        Clipboard.setString(infoText)
        alert('copied')
    }

  return (
    <>
      <Text style={styles.header}>Info Cards</Text>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.imgStyle}
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg',
            }}
          />
        </View>
        <View style={styles.styleTextCont}>
          <Text numberOfLines={5}>{infoText}</Text><TouchableOpacity onPress={handleLink}><Text>read more...</Text></TouchableOpacity><TouchableOpacity onPress={handleCopy} style={styles.copyStyle}><Text style={styles.copyText}>Copy</Text></TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Infocards;

const styles = StyleSheet.create({
  header: {
    margin: 8,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  imgStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imgContainer: {
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
    height: 200, // Set a fixed height for imgContainer
    overflow: 'hidden', // Ensure content within the imgContainer respects the border radius
  },
  container: {
    flex: 1,
    margin: 8,
    borderRadius: 8, // Apply border radius to the entire container
    backgroundColor: '#EA7773',
    padding:8 // Background color for the entire container
  },
  styleTextCont: {
    marginLeft: 8,
    marginRight: 8,
    padding: 8, // Add padding to separate text from the container edges
  },
  copyStyle :{
    backgroundColor:'white',
    width :50,
    height :25,
    borderRadius:10,
    padding:2
  },
  copyText :{
    color:'black'
  }
});
