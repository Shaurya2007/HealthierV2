import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import MyHeader from '../Component/MyHeader'

export default class ExerciseScreen extends Component{
    render(){
        return(
            <View>
                <MyHeader title="Exercise"></MyHeader>  
            </View>
        )
    }
}