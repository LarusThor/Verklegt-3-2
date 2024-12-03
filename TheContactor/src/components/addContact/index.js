import React, { useState } from "react";
import {Text, TextInput, View} from 'react-native';
import styles from './style'

const AddContactForm = () => {
    const [newName, setName] = useState('');
    const [newPhoneNumber, setPhoneNumber] = useState('');
    const [newPhoto, setPhoto] = useState('');


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
        </View>
    );
};

export default AddContactForm;

