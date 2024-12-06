import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';

const ViewContact = ({name, phoneNumber, photo}) => {
    
    return (
        
        <View style={styles.container}>
            <Image source={{uri: photo}} style={styles.image}/>
            <Text style={styles.text}>{name}</Text>
            
            <Text style={styles.text}>{phoneNumber}</Text>
        </View>
        
    
)};


export default ViewContact;