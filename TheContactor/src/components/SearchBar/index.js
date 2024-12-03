import React from "react";
import { View, TextInput, Image } from "react-native";
import style from './styles'
import searchImage from '../../resources/Search_tool.png'

const SearchBar = () => {
    
    return (
        <View>
            <View style={style.container}>
                <TextInput 
                style={style.text} 
                placeholder='Search contacts...' />
                <Image style={style.searchimage} source={searchImage} />
            </View>
        </View>
    );
};

export default SearchBar;