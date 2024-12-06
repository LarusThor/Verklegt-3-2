import React from 'react';
import { View} from 'react-native';
import EditContact from '../../components/editContact';

const editContact = ({ route, navigation })  => {
    
    const info = route.params;
    
    return (
        <View>
            <EditContact 
                id={info.id}
                name={info.name}
                phoneNumber={info.phoneNumber}
                photo={info.photo}
                navigation={navigation}
                />
        </View>

    );
};

export default editContact;