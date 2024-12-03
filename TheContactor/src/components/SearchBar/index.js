import React from "react";
import { View, TextInput, Text } from "react-native";
import style from './styles'

const SearchBar = () => {
    
    return (
        <View style={style.container}>
            <TextInput>Search contacts...</TextInput>
        </View>
    );
};

export default SearchBar;