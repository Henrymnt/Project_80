import React, {Component} from 'react'
import { StyleSheet, Text, View, SafeAreaView,TouchableOpacity, Platform, StatusBar, ImageBackground, Iamge } from 'react-native';


export default class HomeScreen extends Component{
render(){
    return(
        <View style={styles.container}>
            <ImageBackground source={require("../assets/space.gif")} style={{flex: 1, resizeMode: 'cover'}}>
            </ImageBackground>

            <View style={styles.textcontainer}>

            <Text style={{fontSize: 50, fontWeight: "bold", color: "white", marginTop: 25}}>Stellar</Text>
            </View>
            
            
            <TouchableOpacity style={styles.button}
            onPress={()=>(
                this.props.navigation.navigate('DailyPic')
            )}>

            <Text style={{  
                fontSize: 35,
                fontWeight: "bold",
                color: "black",
                marginTop: 20,
                marginLeft: 20
            }}> Daily Picture</Text>

              <Image source={require('../assets/daily_pictures.png')} style={styles.imageicon}></Image>
            </TouchableOpacity>


            <TouchableOpacity style={styles.button}
            onPress={()=>(
                this.props.navigation.navigate('SpaceCraft')
            )}>

            <Text style={{  
                fontSize: 35,
                fontWeight: "bold",
                color: "black",
                marginTop: 20,
                marginLeft: 20
            }}> Spacecraft</Text>

              <Image source={require('../assets/space_crafts.png')} style={styles.imageicon}></Image>
            </TouchableOpacity>


            <TouchableOpacity style={styles.button}
            onPress={()=>(
                this.props.navigation.navigate('StarMap')
            )}>

            <Text style={{  
                fontSize: 35,
                fontWeight: "bold",
                color: "black",
                marginTop: 20,
                marginLeft: 20
            }}> Star Map</Text>

              <Image source={require('../assets/star_map.png')} style={styles.imageicon}></Image>
            </TouchableOpacity>


        </View>
    )
}
}
const styles= StyleSheet.create({
    textcontainer:{
        flex: 0.2,
        alignItems: "center",
        justifyContent: "center"
    },
    container:{
        flex:1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    button:{
        height: 75,
        width: 250,
        backgroundColor: 'white',
        borderRadius: 25,
        marginTop: 20,
        marginLeft: 60
    },
    imageicon:{
        position: "absolute",
        height: 75,
        width: 75,
        resizeMode: "contain",
        right: 10,
        top: 5
    }
})