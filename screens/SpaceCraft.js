import React, {Component} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import axios from 'axios';

export default class SpaceCraftScreen extends Component{
    constructor(){
        super()
        this.state={
            aircraft: ''
        }
    }
    
    getdata=()=>{
        axios.get("https://ll.thespacedevs.com/2.0.0/config/spacecraft/")
        .then(response=>{
            this.setState({aircraft: response.data.results})
        })
        .catch(error => {
            Alert.alert(error.message)
        })
    }

keyExtrator=(item, index)=>index.toString()
renderItem=({item})=>{
    render(
        <View style={{borderWidth: 1.5, alignItems: 'center',justifyContent: 'center', marginButtom: 10, elevation: 10}}>
            <Image source={{uri: item.agency.image_url}} style={{width: "100%", height: 200, marginTop: 20, marginButton: 20, marginRight: 10}}></Image>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>{item.name}</Text>
        <Text style={{color: "gray"}}>{item.agency.name}</Text>
        <Text style>Description:</Text>
        <Text style={{color: "darkgray", marginLeft: 10, marginRight: 10}}>{item.agency.description}</Text>
        </View>
    )
}

render(){
    return(
       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >

            <View style={{flex: 0.3}}>
                <Text>Spacecrafts:</Text>
            </View>

            <View style={{flex: 0.8}}>
            
            <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.aircraft}
            renderItem={this.renderItem}
            />
            </View>

       </View>
    )
}

}