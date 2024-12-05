import React, { useEffect } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import ViewContactComponent from '../../components/viewContact';
import styles from './style';
import fileService, { getAllContacts } from '../../services/fileservices';
import { remove, getContact } from '../../services/fileservices';
import { useDispatch } from 'react-redux';
import { fetchAllContacts } from '../../redux/features/contactList/contactList-slice';

const viewContact = ({navigation: { navigate }, route, navigation} ) => {
   
    const dispatch = useDispatch();
    const {item} = route.params;
    
    const fetchContact = async(id) => {
        const contact = await getContact(id);
        return contact
    };
    
    // Example of calling fetchContact
    const logContact = async (item) => {
    const contact = await fetchContact(item.id); // Await the Promise
    console.log('Contact:', contact); // Logs the actual contact object
    };

    
    

    

    const removeContact = async () => {
        await remove(item.id);
        const updatedContacts = await getAllContacts();
        dispatch(fetchAllContacts(updatedContacts)); // Update Redux store
        navigation.goBack();
     };
     
    
    return (

    <View style={styles.container}>
        <ViewContactComponent
            name = {item.name}
            phoneNumber = {item.phoneNumber}
            photo = {item.photo}
        />
        <TouchableHighlight
                style={styles.editFooter}
                
                onPress={() => navigate('editContact', {item} )}
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