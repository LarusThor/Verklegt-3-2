import React from "react";
import {View, Text, Image} from 'react-native'
import style from './styles'
import profilepic from '../../resources/Profile_defult.jpg'


const Contact = () => {
    return (
        <View style={style.profilecontainer}>
            <Image style={style.profileimage} source={profilepic}/>
            <Text style={style.text}>Some Contact..</Text>
        </View>
    );
};

export default Contact;

