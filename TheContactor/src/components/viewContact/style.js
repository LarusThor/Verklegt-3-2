import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'column',

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
        width: 150,
        height: 200
    }

  

});