import React, { useEffect } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import ViewContactComponent from '../../components/viewContact';
import { useSelector, useDispatch } from 'react-redux';
import styles from './style';
import remove from '../../services/fileservices'

const viewContact = ({navigation: { navigate }, route} ) => {
   
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
        <TouchableHighlight
                style={styles.editFooter}
                onPress={() => navigate('editContact')}
                underlayColor='green'>
                <Text style={styles.footerText}>Edit Contact</Text>
            </TouchableHighlight>
        <TouchableHighlight
                style={styles.deleteFooter}
                onPress={() => navigate('deleteContact')}
                underlayColor='#b30000'>
                <Text style={styles.footerText}>Delete Contact</Text>
            </TouchableHighlight>
    </View>
    
    )
   
}

export default viewContact;