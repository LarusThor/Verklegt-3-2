import React, { useEffect } from 'react';
import { View, Text, TouchableHighlight, FlatList } from 'react-native';
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
    console.log(contacts)
    
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
            <FlatList
                data={contacts}
                renderItem={({ item }) => (
                <Contact
                item={item}
                />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
            <TouchableHighlight
                onPress={() => navigate('addContact')}>
                <Text>Add Contacts</Text>
            </TouchableHighlight>
        
        </View>

    );
};

export default ContactList;