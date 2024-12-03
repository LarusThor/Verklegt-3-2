import React from 'react';
import { View, Text } from 'react-native';

import AddContact from '../../components/addContact';


const addContact = ( {navigation: { navigate } } )  => {
    return (
        <View>
            <AddContact />
        </View>

    );
};

export default addContact;