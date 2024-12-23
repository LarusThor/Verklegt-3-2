import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f9f9eb'

    },

    icon: {
        flex: 1,
        fontSize: 60
    },

    callButton: {
        position: 'fixed', 
        bottom: 0,
        width: '70%',
        backgroundColor: '#00cc66',
        borderRadius: 30,
        padding: 10,
        alignItems: 'center',
        height: 90,
        margin: 10,
    },

    editFooter: {
        position: 'fixed', 
        bottom: 0,
        width: '70%',
        backgroundColor: '#00cc66',
        borderRadius: 30,
        padding: 10,
        alignItems: 'center',
        height: 90,
        margin: 10,
        
    },

    deleteFooter: {
        position: 'fixed', 
        bottom: 0,
        width: '70%',
        borderRadius: 30,
        padding: 10,
        margin: 10,
        backgroundColor: 'red',
        alignItems: 'center',
        height: 90,
        
    },


    footerText: {
        top: 20,
        fontSize: 20,
    }

  

});