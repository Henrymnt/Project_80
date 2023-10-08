import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, StatusBar, SafeAreaView, Image, Alert, Platform} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from "axios";
import {WebView} from 'react-native-webview'

export default class StarMapScreen extends Component{
    constructor(){
        super();
        this.setState={
            latitude:'',
            longitude:''
        }
    }

render(){
    return(
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>

            <TextInput style={{height: 50, borderColor: 'black', borderWidth: 2}}
            placeholder="Enter your latitude."
            placeholderTextColor="lightgray"
            onChangeText={(text)=>{
                this.setState({
                    latitude: 'text'
                })
            }}/>

<TextInput style={{height: 50, borderColor: 'black', borderWidth: 2}}
            placeholder="Enter your longitude."
            placeholderTextColor="lightgray"
            onChangeText={(text)=>{
                this.setState({
                    longitude: 'text'
                })
            }}/> 

        <WebView
        const latitude={this.state.latitude}
        const longitude={this.state.longitude}
          const path = 'https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'
            scalesPageToFit={true}
            source={{uri: path}}
            style={{marginTop: 20, marginBottom: 20}}
            />

        </View>
      
    
       

    )
}
}

