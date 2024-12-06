import React, { useState } from "react";
import {Text, TextInput, View, TouchableOpacity, TouchableHighlight, ImageBase} from 'react-native';
import styles from './style'
import { useDispatch } from 'react-redux';
import { uuidv7 } from 'uuidv7';
import createContact from '../../services/fileservices';
import { fetchAllContacts } from '../../redux/features/contactList/contactList-slice';
import { getAllContacts } from '../../services/fileservices';
import AddModal from '../AddModal';
import * as imageService from '../../services/imageService';


const AddContactForm = ( {navigation} ) => {
    const imageAdress = 'https://i.pinimg.com/736x/bf/a9/ad/bfa9ad8ffb16b4bb194893f6e9b308ed.jpg'
    const [newName, setName] = useState('');
    const [newPhoneNumber, setPhoneNumber] = useState('');
    const [newPhoto, setPhoto] = useState(imageAdress);
    const contactId = uuidv7();

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const takePhoto = async () => {
        const photo = await imageService.takePhoto();
        setPhoto(photo);
        setIsAddModalOpen(false);
    };

    const selectFromCameraRoll = async () => {
        const photo = await imageService.selectFromCameraRoll();
        setPhoto(photo)
        setIsAddModalOpen(false);
    }

    const dispatch = useDispatch();


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
                
                <TouchableHighlight style={styles.fields}
                    onPress={() => setIsAddModalOpen(true) }
                    underlayColor={'gray'}>
                    <Text style={styles.text}>Add Image</Text>
                </TouchableHighlight>
                <AddModal 
                    isOpen={isAddModalOpen}
                    closeModal={() => setIsAddModalOpen(false)}
                    takePhoto={() => takePhoto()}
                    selectFromCameraRoll={() => selectFromCameraRoll()}
                />
            
            <TouchableOpacity style={styles.footer} onPress={handleAddContact}>
                <Text style={styles.footerText}>Add contact</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddContactForm;

