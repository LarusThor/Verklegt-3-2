import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'

    },
    text: {
        fontSize: 50,
        fontWeight: '300',
        fontFamily: 'arial',
        padding: 20,
        
    },

    contents: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    image: {
        width: 220,
        height: 220,
        borderRadius: 100,
    }

  

});