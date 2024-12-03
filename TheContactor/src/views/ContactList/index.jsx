import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import style from './styles';
import SearchBar from '../../components/SearchBar';
import Contact from '../../components/Contact';



const ContactList = ( { navigation } ) => {
    return (
        <View style={style.container}>
            <View>
                <SearchBar />
            </View>
            <View>
                <Contact navigation={navigation}/>
            </View>
            <TouchableHighlight
                onPress={() => navigation.navigate('addContact')}>
                <Text>Add Contacts</Text>
            </TouchableHighlight>
        </View>

    );
};

export default ContactList;