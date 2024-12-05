import React from "react";
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import { useState } from "react";
import styles from './style';
import { useDispatch } from "react-redux";
import { getAllContacts, remove } from "../../services/fileservices";
import { fetchAllContacts } from "../../redux/features/contactList/contactList-slice";
import createContact from "../../services/fileservices";

const EditContact = ( {id, name, phoneNumber, photo} ) => {
    console.log({name})
    const [newName, setName] = useState(name);
    const [newPhoneNumber, setPhoneNumber] = useState(phoneNumber);
    const [newPhoto, setPhoto] = useState(photo);
    

    const dispatch = useDispatch();

    const removeContact = async () => {
        await remove(id);
        console.log('remove')
        const updatedContacts = await getAllContacts();
        dispatch(fetchAllContacts(updatedContacts)); // Update Redux store
     };
     

    const handleAddContact = async () => {
        
        console.log('hi')
        removeContact();
        console.log('new:'+newName)

        const newContact = {
            id: id,
            name: newName,
            phoneNumber: newPhoneNumber,
            photo: newPhoto,
        };
    
    
    createContact(newContact); //fileservice
    const updatedContacts = await getAllContacts();
    dispatch(fetchAllContacts(updatedContacts)); // Update Redux store
    console.log('fetched');
    navigation.goBack();
    };

    return (
        
        <View>
            <View>
            <TextInput
                style={styles.fields}
                placeholder={name}
                value={newName}
                onChangeText={setName}
            />
            <TextInput
                style={styles.fields}
                placeholder={phoneNumber}
                value={newPhoneNumber}
                onChangeText={setPhoneNumber}
            />
            <TextInput
                style={styles.fields}
                placeholder={photo}
                value={newPhoto}
                onChangeText={setPhoto}
            />
            <TouchableOpacity style={styles.button} onPress={handleAddContact}>
                <Text style={styles.buttonText}>Update contact</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
};

export default EditContact;

