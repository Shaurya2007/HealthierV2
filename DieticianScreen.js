import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,TextInput} from 'react-native'
import MyHeader from '../Component/MyHeader'
import db from '../config'

export default class DieticianScreen extends Component{
    
    constructor(){
        super()
        this.state={
            morningMeal:'',
            afternoonMeal:'',
            nightMeal:''
        }
    }

    addMeal=(morningMeal,afternoonMeal,nightMeal)=>{
        db.collection("Meals").add({
            morningMeal:morningMeal,
            afternoonMeal:afternoonMeal,
            nightMeal:nightMeal
        })
    }
    
    render(){
        return(
            <View>
                <MyHeader title="Dietician"></MyHeader>    
              <TextInput style={{height:30,width:200,borderWidth:3}}
              placeholder="Morning Meal"
              onChangeText={(text)=>{
              this.setState({morningMeal:text})
               }}
               value={this.state.morningMeal}
              />

              <TextInput
              style={{height:30,width:200,borderWidth:3}}
              placeholder="AfterNoon Meal"
              onChangeText={(text)=>{
                  this.setState({
                      afternoonMeal:text
                  })
              }}
              value={this.state.afternoonMeal}
              />

             <TextInput
              style={{height:30,width:200,borderWidth:3}}
              placeholder="Night Meal"
              onChangeText={(text)=>{
                  this.setState({
                      nightMeal:text
                  })
              }}
              value={this.state.nightMeal}
              />
              <TouchableOpacity style={{height:30,width:100,borderWidth:2,backgroundColor:'orange'}}
              onPress={()=>{
                  this.addMeal(this.state.morningMeal,this.state.afternoonMeal,this.state.nightMeal)
              }}
              >
              <Text style={{alignItems:'center',justifyContent:'center'}}>Submit</Text>
              </TouchableOpacity>
            </View>
        )
    }
    
}
