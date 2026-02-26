import { StyleSheet } from "react-native";
import { useFonts } from 'expo-font';


export const add_task_window = StyleSheet.create({
    title_text: {
        fontSize:30,
        padding:20,
        color:'#222023',
        fontFamily:"Manrope",
        marginTop:20
    },
    container: {
        flex: 1,
        backgroundColor:'#F0F0F0',
        alignItems:'center',
        padding:20
    },
    text: {
        fontFamily:"Manrope",
        fontSize:20
    }
});