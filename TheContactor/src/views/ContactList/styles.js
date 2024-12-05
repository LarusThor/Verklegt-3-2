import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f9f9eb'

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