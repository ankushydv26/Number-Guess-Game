import React from "react";
import {View , Text, StyleSheet} from "react-native";

const Navbar = (props) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:'#F7DB4F',
        padding:10,
        paddingTop:36,
        height:90,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        color:'black',
        fontSize:18,
        fontFamily:"monospace",
        fontWeight:'700',
        letterSpacing:3        
    }
})


export default  Navbar;