import { StyleSheet } from "react-native";
import { useFonts } from 'expo-font';


export const background = StyleSheet.create({
    title_text: {
        fontSize:50,
        padding:20,
        color:'#222023',
        fontFamily:"Oswald",
        marginTop:20
    },
    container: {
        flex: 1,
        backgroundColor:'#0080FE',
        alignItems:'center',
        paddingTop:20
    }
});