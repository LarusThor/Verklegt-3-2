import React, { useEffect } from 'react';
import { View, Text, TouchableHighlight, Platform, Linking } from 'react-native';
import ViewContactComponent from '../../components/viewContact';
import styles from './style';
import { getAllContacts } from '../../services/fileservices';
import { remove } from '../../services/fileservices';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllContacts } from '../../redux/features/contactList/contactList-slice';
import callIcon from '../../resources/CallButton.png';
import { Entypo } from '@expo/vector-icons';

const viewContact = ({navigation: { navigate }, route, navigation} ) => {
   
    const dispatch = useDispatch();
    const {item} = route.params;

    const contacts = useSelector((state) => state.allContacts);
    const contact = contacts.find((contact) => contact.id === item.id)

    useEffect (() => {
        if (!contact) {
            navigation.goBack();
        };
    }, [contact, navigation]);

    const makePhoneCall = () => {
        if (Platform.OS === "android") {
            Linking.openURL("tel: "+ contact.phoneNumber)
        }
        else {
            Linking.openURL("telprompt: "+ contact.phoneNumber)
        }
    }

    
    const removeContact = async () => {
        await remove(contact.id);
        const updatedContacts = await getAllContacts();
        console.log('hello:' + updatedContacts)
        dispatch(fetchAllContacts(updatedContacts)); // Update Redux store
     };

    
    if (!contact) {
        return null;
    };
    
    return (

    <View style={styles.container}>
        <ViewContactComponent
            name = {contact.name}
            phoneNumber = {contact.phoneNumber}
            photo = {contact.photo}
        />

        <TouchableHighlight
            style={styles.callButton}
            onPress={() => makePhoneCall()}
            underlayColor='green'>
            <Entypo style={styles.icon} name="phone"/>
        </TouchableHighlight>

        <TouchableHighlight
                style={styles.editFooter}
                onPress={() => navigation.navigate('editContact', contact )}
                underlayColor='green'>
                <Text style={styles.footerText}>Edit Contact</Text>
            </TouchableHighlight>
        <TouchableHighlight
                style={styles.deleteFooter}
                onPress={() => removeContact()}
                underlayColor='#b30000'
                
                >
                <Text style={styles.footerText}>Delete Contact</Text>
            </TouchableHighlight>
    </View>
    
    )
   
}

export default viewContact;