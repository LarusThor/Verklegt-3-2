import React from "react";
import {View, Text, Image, } from 'react-native'
import style from './styles'
import profilepic from '../../resources/Profile_defult.jpg'
import store from '../../redux/store'
import { useSelector, useDispatch } from "react-redux";
import { getAllContacts } from "../../services/fileservices";

const Contact = (route) => {

    
    
    return (
        
        <View style={style.profilecontainer}>
            
            <Text> {route.item.name}, {route.item.phoneNumber}, {route.item.photo} </Text>
            
        </View>
    );
};

export default Contact;

