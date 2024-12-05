import { StyleSheet } from 'react-native';




export default StyleSheet.create({
    container: {
        backgroundColor: '#f9f9eb'
    },
    
    fields: {
        
        padding: 20, 
        height: 245,
        width: '100%',
        borderWidth: 1,
        borderBlockEndColor: 'red',
        fontSize: 40,
    },
    footer: {
        position: 'fixed', 
        bottom: 0,
        width: '100%',
        backgroundColor: '#00cc66',
        alignItems: 'center',
        height: 70
    },
    footerText: {
        top: 20,
        fontSize: 20
    }
});