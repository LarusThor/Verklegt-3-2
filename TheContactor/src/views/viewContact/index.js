import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import ViewContactComponent from '../../components/viewContact';
import { useSelector, useDispatch } from 'react-redux';
import styles from './style';

const viewContact = ({route}) => {
   
    const contacts = useSelector((state) => state.allContacts);
    const {item} = route.params;
    console.log('contact name is ' + item.name);
    console.log(route.params)
    
    return (
    <View style={styles.container}>
        <ViewContactComponent
            name = {item.name}
            phoneNumber = {item.phoneNumber}
            photo = {item.photo}
        />
    </View>
    )
   
}

export default viewContact;