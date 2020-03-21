import React from 'react';
import Loading from "./Loading";
import {Alert} from "react-native"
import * as Location from 'expo-location'
import axios from "axios"
import Weather from "./Weather"



const API_KEY = "7975db64a6a0226a5c77f48875f77250"

export default class extends React.Component{
  state={
    isLoading : true
  }
  getWeather = async(latitude, longitude) => {
    const {data:{main:{temp}, weather}} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    )
    console.log(weather)
    this.setState({isLoading:false, temp:temp,condition:weather[0].main})

  }
  getLocation = async() => {
    try{
      response = await Location.requestPermissionsAsync()
      const {coords :  {latitude, longitude}} = await Location.getCurrentPositionAsync()
      console.log(latitude, longitude)
      this.getWeather(latitude, longitude)
    }
    catch(error)
    {
      console.log(error)
      Alert.alert("Can't find you", "so sad")
    }
  }
  componentDidMount()
  {
    this.getLocation()
  }
  render()
  {
    const{isLoading, temp, condition} = this.state;
    return isLoading?<Loading/>:<Weather temp={Math.round(temp)} condition={condition}/>;
  }
}