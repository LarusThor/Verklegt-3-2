import React from "react";
import {View, Text, Image} from 'react-native'
import style from './styles'
import profilepic from '../../resources/Profile_defult.jpg'
import store from '../../redux/store'
import { useSelector, useDispatch } from "react-redux";
import { getAllContacts } from "../../services/fileservices";

const Contact = () => {


    
    
    const contacts = getAllContacts();
    
    return (
        <View style={style.profilecontainer}>
            <Image style={style.profileimage} source={profilepic}/>
            <Text style={style.text}>{contacts}</Text>
            
        </View>
    );
};

export default Contact;

