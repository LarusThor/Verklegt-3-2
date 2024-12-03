import React from "react";
import { View, TextInput, Text } from "react-native";
import style from './styles'

const SearchBar = () => {
    
    return (
        <View style={style.container}>
            <Text style={style.text}>Search contacts...</Text>
        </View>
    );
};

export default SearchBar;