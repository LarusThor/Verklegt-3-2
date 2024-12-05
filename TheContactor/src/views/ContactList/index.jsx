import React, { useEffect } from 'react';
import { View, Text, TouchableHighlight, FlatList } from 'react-native';
import style from './styles';
import SearchBar from '../../components/SearchBar';
import Contact from '../../components/Contact';
import { getAllContacts } from '../../services/fileservices';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllContacts } from '../../redux/features/contactList/contactList-slice';
import { useFocusEffect } from '@react-navigation/native'; 


const ContactList = ( {navigation: { navigate } } ) => {
    
    const dispatch = useDispatch();
    const contacts = useSelector((state) => state.allContacts);
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
                    data={contacts.filter((item) => item && item.id)}
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