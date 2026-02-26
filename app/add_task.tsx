import { StyleSheet, View, Text, TouchableOpacity, } from "react-native";
import { add_task_window } from "@/styles/add_task_window";
import { router } from "expo-router";
import { useFonts } from "expo-font";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { prompt } from "@/styles/prompt_text";

export default function AddTask() {
  
    const [text,setText] = useState("");
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
  
    return (
    <View style={add_task_window.container}>
      <Text style={add_task_window.title_text}>Add a New Task</Text>
      <View style={styles.container}>
        <View style={styles.box}>
            <Text style={add_task_window.text}>Task name</Text>
            <TextInput
                value={text}
                style={styles.textBox}
                placeholder=""
                onChangeText={setText}
            />
        </View>
        <View style={styles.box}>
            <Text style={add_task_window.text}>Duration</Text>
        
      
      
        <View style={styles.pickerBox}>
            <Picker
                selectedValue={hours}
                style={{ width: '30%', height: '100%', color: "white", marginLeft:20 }}
                onValueChange={(itemValue: number) => setHours(itemValue)}
            >
                {Array.from({ length: 12 }, (_, i) => (
                    <Picker.Item key={i} label={(i+1).toString()} value={i+1} />
                ))}
            </Picker>
            <Text style={[prompt.text, {fontSize:30, marginBottom:30}]}>:</Text>
            <Picker
                selectedValue={minutes}
                style={{ width: '30%', height: '100%', color: "white", marginHorizontal:10 }}
                onValueChange={(itemValue: number) => setMinutes(itemValue)}
            >
                {Array.from({ length: 60 }, (_, i) => (
                    <Picker.Item key={i} label={i.toString().padStart(2, "0")} value={i} />
                 ))}
            </Picker>
        </View>
        </View>
        </View>
            <TouchableOpacity
                style={{
                width:'70%',
                height:'5%',
                backgroundColor:'#0080FE',
                marginTop:30,
                borderRadius:5,
                alignItems:'center',
                justifyContent:'center'
                }}
                onPress={
                    () => router.back()
                }
            >
            <Text>Create Task</Text>
            </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width:'90%',
        height:'60%',
        backgroundColor:'lightgrey',
        borderRadius:10,
        borderWidth:0.2,
        borderColor:'grey',
        shadowRadius:5,
        shadowOpacity:0.3,
        shadowColor:'black',
        paddingTop:40
    },
    box: {
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'40%',
        padding:10,
        backgroundColor:'white',
        marginBottom:40
    },
    textBox: {
    width:'80%',
    height:'30%',
    backgroundColor:'white',
    color:'black',
    borderColor:'black',
    borderWidth:1,
    borderRadius:5,
    marginTop: 30,
    padding:5
    },
    pickerBox: {
    //height:'75%',
    //width:'100%',
    flexDirection:'row',
    //backgroundColor:'green',
    justifyContent:'center',
    alignItems:'center'
  },
});
