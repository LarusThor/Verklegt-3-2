import React from "react";
import {View, Text, Image, } from 'react-native'
import style from './styles'


const Contact = (route) => {

    
    
    return (
        
        <View style={style.profilecontainer}>
            <Image source={{uri: route.item.photo}} style={style.profileimage}/>
            
            <Text style={style.text}> {route.item.name} </Text>
            
        </View>
    );
};

export default Contact;

