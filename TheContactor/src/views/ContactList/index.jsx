import React from 'react';
import { View, Text, TouchableHighlight, FlatList } from 'react-native';
import style from './styles';
import SearchBar from '../../components/SearchBar';
import Contact from '../../components/Contact';
import { getAllContacts } from '../../services/fileservices';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';


const ContactList = ( {navigation: { navigate } } ) => {

    const data = getAllContacts();

    return (
        <View style={style.container}>
            <View>
                <SearchBar />
            </View>
            <View>
                <FlatList data = {data} renderItem={item}>
                    
                </FlatList>
            </View>
            <TouchableHighlight
                onPress={() => navigate('addContact')}>
                <Text>Add Contacts</Text>
            </TouchableHighlight>
        
        </View>

    );
};

export default ContactList;