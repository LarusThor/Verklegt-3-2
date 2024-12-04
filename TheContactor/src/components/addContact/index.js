import React, { useState } from "react";
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import styles from './style'
import { useDispatch, useSelector } from 'react-redux';
import { contactAdded } from '../../redux/features/counter/counter-slice';
import { uuidv7 } from 'uuidv7';
import createContact from '../../services/fileservices'

const AddContactForm = () => {
    const [newId, setId] = useState('');
    const [newName, setName] = useState('');
    const [newPhoneNumber, setPhoneNumber] = useState('');
    const [newPhoto, setPhoto] = useState('');
    const contactId = uuidv7();

    const dispatch = useDispatch();
    const test = useSelector((state) => {
        console.log(state);
        return state.contactAdded;
    });

    const handleAddContact = () => {
        
        const newContact = {
            id: newName+'-'+newId,
            name: newName,
            phoneNumber: newPhoneNumber,
            photo: newPhoto,
        };
        
    createContact(newContact)
    dispatch(contactAdded(newContact));
        
    }

    return (
        <View>
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
            <TouchableOpacity style={styles.button} onPress={handleAddContact}>
                <Text style={styles.buttonText}>Add contact</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddContactForm;

