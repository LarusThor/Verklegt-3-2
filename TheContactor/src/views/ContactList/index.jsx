import React from 'react';
import { View, Text } from 'react-native';
import style from './styles';
import SearchBar from '../../components/SearchBar';
import Contact from '../../components/Contact';


export function ContactList()  {
    return (
        <View style={style.container}>
            <View>
                <SearchBar />
            </View>
            <View>
                <Contact />
            </View>
        </View>

    );
};