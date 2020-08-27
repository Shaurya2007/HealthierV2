import React from 'react';
import { StyleSheet, Text, View,TextInput,KeyboardAvoidingView,TouchableOpacity } from 'react-native';
import {Header,Icon} from 'react-native-elements'

const MyHeader=(props)=>{
    return(
    <Header
    centerComponent={{text:props.title,style:{color:'#90A5A9',fontSize:20,fontWeight:"italic"}}}
    backgroundColor="#EAF8FE"/>
    )
}

export default MyHeader;
