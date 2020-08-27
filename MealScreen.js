import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import MyHeader from '../Component/MyHeader'
import firebase from 'firebase'
import db from '../config'

export default class MealScreen extends Component{
    
    constructor(){
        super()
        this.state={
        morningMeal:'',
        afternoonMeal:'',
        nightMeal:''
        }
    }

    readMeal=()=>{
        db.collection('Meals').get()
        .then((snapshot)=>{
            snapshot.forEach((doc)=>{
                this.setState({
                    morningMeal:'',
                    afternoonMeal:'',
                    nightMeal:''
                })
            })
        })
    }

    componentDidMount=()=>{
        this.readMeal()
    }
   
    render(){
        return(
            <View>
             <MyHeader title="Meal"></MyHeader> 
        <Text style={{alignItems:'center',justifyContent:'center'}}>{this.morningMeal,this.afternoonMeal,this.nightMeal}</Text> 
            </View>
        )
    }
}