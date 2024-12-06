import React from 'react';
import { View} from 'react-native';

import AddContactForm from '../../components/addContact';


const addContact = ( {navigation } )  => {
    return (
        <View>
            <AddContactForm navigation={navigation} />
        </View>

    );
};

export default addContact;