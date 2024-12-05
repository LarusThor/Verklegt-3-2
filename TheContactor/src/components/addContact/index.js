import React, { useState } from "react";
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import styles from './style'
import { useDispatch, useSelector } from 'react-redux';
import { contactAdded } from '../../redux/features/counter/counter-slice';
import { uuidv7 } from 'uuidv7';
import createContact from '../../services/fileservices';
import { fetchAllContacts } from '../../redux/features/contactList/contactList-slice';
import fileService, { getAllContacts } from '../../services/fileservices';


const AddContactForm = ( {navigation} ) => {
    const [newName, setName] = useState('');
    const [newPhoneNumber, setPhoneNumber] = useState('');
    const [newPhoto, setPhoto] = useState('');
    const contactId = uuidv7();

    const dispatch = useDispatch();
    const test = useSelector((state) => {
        console.log(state);
        return state.contactAdded;
    });

    const handleAddContact = async () => {
        
        const newContact = {
            id: newName+'-'+contactId,
            name: newName,
            phoneNumber: newPhoneNumber,
            photo: newPhoto,
        };
        
        createContact(newContact); //fileservice
        const updatedContacts = await getAllContacts();
        dispatch(fetchAllContacts(updatedContacts)); // Update Redux store
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            
                <TextInput
                    style={styles.fields}
                    placeholder="Enter name"
                    value={newName}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.fields}
                    placeholder="Enter phone number"
                    value={newPhoneNumber}
                    onChangeText={setPhoneNumber}
                />
                <TextInput
                    style={styles.fields}
                    placeholder="Upload photo"
                    value={newPhoto}
                    onChangeText={setPhoto}
            />
            
            <TouchableOpacity style={styles.footer} onPress={handleAddContact}>
                <Text style={styles.footerText}>Add contact</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddContactForm;

