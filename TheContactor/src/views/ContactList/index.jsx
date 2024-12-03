import React from 'react';
import { View, Text } from 'react-native';
import style from './styles';


export function ContactList()  {
    return (
        <View style={style.container}>
            <View>
                <Text>SearchBar</Text>
            </View>
            <View>
                <Text>Contact List View</Text>
            </View>
        </View>

    );
};