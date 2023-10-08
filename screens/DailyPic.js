import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default class DailyPicScreen extends Component{
    constructor(){
        super()
        this.setState({
            apod: ''
        })
    }
    getData=()=>{
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(response =>{
            this.setState({apod: response.data})
        })
        .catch(error=>{
            Alert.alert(error.message)
        })
    }
render(){
    if (Object.keys(this.state.apod).length === 0) {
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>Loading... </Text>
            </View>
        )
    } else {
        return (
            <View style={{   flex: 0.25, backgroundColor: 'white', marginTop: -10, borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 30}}>
             <SafeAreaView style={{marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}}/>

                <ImageBackground source={require('..assets/stars.gif')} style={{ flex: 1, resizeMode: 'cover'}}>

                <Text style={{fontSize: 25, color: "black", fontWeight: "bold"}}>Picture of the Day:</Text>
                <Text style={{fontSize: 18, color: "black", fontWeight: "bold"}}>{this.state.apod.title}</Text>

                <View style={{flex: 1, alignItems: center, justifyContent: center}}>
                    <Image source={require(this.state.apod.hdurl)} style={{width:50, height: 50}}></Image>
                </View>

                <Text style={{fontSize: 18, color: "black", fontWeight: "bold"}}>Description: {this.state.apod.explanation}</Text>

                </ImageBackground>
               </View>
   
        );
    }
}

}