import React from "react";
import {View, Text, Image, Button, TouchableHighlight} from 'react-native'
import style from './styles'
import profilepic from '../../resources/Profile_defult.jpg'


const Contact = ( {navigation: {navigate}} ) => {

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

