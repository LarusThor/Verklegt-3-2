import React, { useState, useEffect } from 'react';
import { View, Text, TouchableHighlight, FlatList } from 'react-native';
import style from './styles';
import SearchBar from '../../components/SearchBar';
import Contact from '../../components/Contact';
import { getAllContacts } from '../../services/fileservices';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllContacts } from '../../redux/features/contactList/contactList-slice';



const ContactList = ( {navigation: { navigate } } ) => {
    
    const dispatch = useDispatch();
    const contacts = useSelector((state) => state.allContacts);
    const [filteredContacts, setFilteredContacts] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    
    
    useEffect(() => {
        const loadContacts = async () => {
                const allContacts = await getAllContacts();
                const validContacts = allContacts.filter(
                    (contact) => contact && contact.id && contact.name
                );
                dispatch(fetchAllContacts(validContacts)); // Dispatch to Redux
            };
            loadContacts();
        }, [dispatch]);
       
    useEffect(() => {
        const results = contacts.filter(
            (contact) =>
            contact &&
            contact.id &&
            typeof contact.name === 'string' &&
            contact.name.toLowerCase().includes(searchInput.toLowerCase())
        )
        .sort((a, b) => a.name.localeCompare(b.name));
        setFilteredContacts(results);
    }, [contacts, searchInput]);
    
    return (
        <View style={style.container}>
            <View>
                <SearchBar onSearch={setSearchInput}/>
            </View>
                <FlatList
                    data={filteredContacts}
                    renderItem={({ item }) => (
                        <TouchableHighlight
                            onPress={() => navigate('viewContact', {item} )}>
                    <Contact
                        item={item}/>
                        </TouchableHighlight>
                    )}
                    
                    keyExtractor={(item) => (item.id.toString())}
                    />
                
            <TouchableHighlight style={style.footer}
                onPress={() => navigate('addContact')}
                underlayColor='green'>
                <Text style={style.footerText}>Add Contact</Text>
            </TouchableHighlight>

        </View>

    );
};

export default ContactList;