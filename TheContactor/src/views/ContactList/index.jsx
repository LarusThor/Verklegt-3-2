import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import style from './styles';
import SearchBar from '../../components/SearchBar';
import Contact from '../../components/Contact';
import { getAllContacts } from '../../services/fileservices';


const ContactList = ( {navigation: { navigate } } ) => {

    
    const contacts = getAllContacts()
    console.log(contacts)
    return (
        <View style={style.container}>
            <View>
                <SearchBar />
            </View>
            <View>
                <Contact />
            </View>
            <TouchableHighlight
                onPress={() => navigate('addContact')}>
                <Text>Add Contacts</Text>
            </TouchableHighlight>
        </View>

    );
};

export default ContactList;