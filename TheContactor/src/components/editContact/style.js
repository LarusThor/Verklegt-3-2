import { StyleSheet } from 'react-native';




export default StyleSheet.create({
    container: {
        backgroundColor: '#f9f9eb'
    },
    
    fields: {
        padding: 20, 
        height: 245,
        width: '100%',
        borderWidth: 0.3,
        borderBlockEndColor: 'black',
        fontSize: 40,
        alignItems: 'center'
    },
    text: {
        fontSize: 40,
        top: 50,
        
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