import React, { useEffect } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import style from './styles';
import SearchBar from '../../components/SearchBar';
import Contact from '../../components/Contact';
import { getAllContacts } from '../../services/fileservices';
import store from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllContacts } from '../../redux/features/contactList/contactList-slice';


const ContactList = ( {navigation: { navigate } } ) => {
    
    const dispatch = useDispatch()
    const contacts = useSelector((state) => state.allContacts)
    
    useEffect(() => {
        const loadContacts = async () => {
                const allContacts = await getAllContacts();
                dispatch(fetchAllContacts(allContacts)); // Dispatch to Redux
        };
        loadContacts();
    }, [dispatch]);

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