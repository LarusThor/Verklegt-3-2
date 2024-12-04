import React from "react";
import {View, Text, Image, Button, TouchableHighlight} from 'react-native'
import style from './styles'
import profilepic from '../../resources/Profile_defult.jpg'
import store from '../../redux/store'
import { useSelector } from "react-redux";

const Contact = () => {
    
    const contacts = useSelector(state => state.contacts)
    console.log(contacts)
    return (
        <View style={style.profilecontainer}>
                <Image style={style.profileimage} source={profilepic}/>
                <TouchableHighlight onPress={() => navigate('ContactInfo')}>
                    <Text style={style.text}>Name</Text>
                </TouchableHighlight>
        </View>
    );
};

export default Contact;

