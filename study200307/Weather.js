import React from "react"
import {View, Text, StyleSheet, StatusBar} from "react-native"
import PropTypes from "prop-types"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'

const weatherOptions={
    Clouds:{
        iconName:"white-balance-sunny",
        gradient:['#ffcc33', '#ffb347']
    },
    Sunny:{
        iconName:"white-balance-sunny",
        gradient:['#C6FFDD', '#FBD786', '#f7797d']
    },
    Rain:{
        iconName:"weather-rainy",
        gradient:['#2c3e50', '#bdc3c7']
    }
}

export default function Weather({temp, condition}){
    return (
        <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name = {weatherOptions[condition].iconName} size={96} color="white" /> 
                <Text style={styles.temp}>{temp}º</Text>
                <Text style={styles.temp}>{condition}</Text>
            </View>
            <View style={styles.halfContainer}>
                <Text style={styles.title}>Title</Text>
                <Text style={styles.subTitle}>SubTitle</Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition:PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds"]).isRequired
}
const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    temp:{
        fontSize:42,
        color:"white"
    },
    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    title:{
        color:"white",
        fontSize:44,
        fontWeight:"400",
        marginBottom:20
    },
    subTitle:{
        color:"white",
        fontWeight:"600",
        fontSize:24
    }
})