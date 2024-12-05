import React from 'react';
import { View, Text } from 'react-native';
import EditContact from '../../components/editContact';



const editContact = ({route})  => {
    
    const info = route.params.item;
    
    return (
        <View>
            <EditContact 
                id={info.id}
                name={info.name}
                phoneNumber={info.phoneNumber}
                photo={info.photo}/>
        </View>

    );
};

export default editContact;