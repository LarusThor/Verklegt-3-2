import React from 'react';
import { View, Text } from 'react-native';

import AddContactForm from '../../components/addContact';


const addContact = ( {navigation: { navigate } } )  => {
    return (
        <View>
            <AddContactForm />
        </View>

    );
};

export default addContact;