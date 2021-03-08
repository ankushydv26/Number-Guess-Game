import React from 'react'
import { View,Text, StyleSheet,TextInput, Button } from 'react-native'

const StartGameScreen = ( ) => {
    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Start Game Screen</Text>
            <View  style={styles.inputContainer}>
                <Text>Select Number</Text>
                <TextInput
                  placeholder="Input Number"
                  type="number"
                />
                <View style={styles.buttonContainer}>
                  <Button title="Reset" color='red' onPress={() => {}}/>
                  <Button title="Confirm" onPress={() => {}}/>
                </View>  
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        paddingTop:10,
    },
    title:{
      marginVertical:10,
      fontSize:21,
      color:'black'
    },
    inputContainer:{
        alignItems:'center',
        width:'100%',
        width:320,
        maxWidth:'80%',
        elevation:6,
        backgroundColor:'white',
        padding:18,
        borderRadius:10
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%'
    }



})


export default StartGameScreen;