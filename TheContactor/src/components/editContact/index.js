import React from "react";
import {View, Text, TextInput, TouchableOpacity, TouchableHighlight} from 'react-native';
import { useState } from "react";
import styles from './style';
import { useDispatch } from "react-redux";
import { getAllContacts, remove } from "../../services/fileservices";
import { fetchAllContacts } from "../../redux/features/contactList/contactList-slice";
import createContact from "../../services/fileservices";
import * as imageService from '../../services/imageService';
import AddModal from "../AddModal";

const EditContact = ({ id, name, phoneNumber, photo, navigation }) => {
    
    
    const [newName, setName] = useState(name);
    const [newPhoneNumber, setPhoneNumber] = useState(phoneNumber);
    const [newPhoto, setPhoto] = useState(photo);
    const dispatch = useDispatch();
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
    };

    const removeContact = async () => {
        await remove(id);
        console.log('remove')
        const updatedContacts = await getAllContacts();
        dispatch(fetchAllContacts(updatedContacts)); // Update Redux store
     };
     

    const handleAddContact = async () => {
        
        removeContact();
        const newContact = {
            id: id,
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
        
        <View>
            <View style={styles.container}>
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
            <TouchableHighlight style={styles.fields}
                    onPress={() => setIsAddModalOpen(true) }
                    underlayColor={'gray'}>
                    <Text style={styles.text}>Edit Image</Text>
                </TouchableHighlight>
                <AddModal 
                    isOpen={isAddModalOpen}
                    closeModal={() => setIsAddModalOpen(false)}
                    takePhoto={() => takePhoto()}
                    selectFromCameraRoll={() => selectFromCameraRoll()}
                />


            <TouchableOpacity style={styles.footer} onPress={handleAddContact}>
                <Text style={styles.footerText}>Update contact</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
};

export default EditContact;

