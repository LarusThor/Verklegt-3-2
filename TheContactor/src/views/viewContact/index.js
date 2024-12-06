import React, { useEffect } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import ViewContactComponent from '../../components/viewContact';
import styles from './style';
import fileService, { getAllContacts } from '../../services/fileservices';
import { remove, getContact } from '../../services/fileservices';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllContacts } from '../../redux/features/contactList/contactList-slice';

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