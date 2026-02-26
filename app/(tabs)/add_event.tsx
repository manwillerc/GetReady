import { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button, Alert, TouchableOpacity } from "react-native";
import { createStyleBuilder } from "react-native-reanimated/lib/typescript/css/native";
import { background } from "../../styles/background"
import { prompt } from "../../styles/prompt_text"
import { Picker } from "@react-native-picker/picker";

export default function Index() {
  
  const [text,setText] = useState("");
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [ampm, setAMPM] = useState("AM")
  
    return (
    <View style={background.container}>
        <Text style={background.title_text}>New Event</Text>
        <View style={styles.inputContainer}>
            <View style={styles.inputPromptBox}>
                <Text style={prompt.text}>Event Name:</Text>
                <TextInput
                    value={text}
                    style={styles.textBox}
                    placeholder=""
                    onChangeText={setText}
                />
            </View>
            <View style={styles.timePromptBox}>
                <Text style={prompt.text}>Time:</Text>
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
                    <Picker
                        selectedValue={ampm}
                        style={{ width: '30%', height: '100%', color: "white", marginRight:20 }}
                        onValueChange={(value: string) => setAMPM(value)}
                    >
                        <Picker.Item label="AM" value="AM"/>
                        <Picker.Item label="PM" value="PM"/>
                    </Picker>
                </View>
            </View>
            <TouchableOpacity
                style={{
                backgroundColor: "#0080FE",
                padding: 10,
                borderRadius: 5,
                marginTop:10,
                width:'80%',
                height:'8%',
                justifyContent:'center'
                }}
                onPress={() => console.log("Task Created:",{text}, " Time:",{hours}, {minutes}, {ampm})}
            >
                <Text style={{ color: "white", textAlign: "center", fontSize:20 }}>Create New Event</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black',
    alignItems:'center',
    padding:20
  },
  bs: {
    fontSize:50,
    color:'white',
  },
  inputContainer: {
    height:'80%',
    width:'90%',
    backgroundColor:'#F0F0F0',
    alignItems:'center',
    borderRadius:20,
    shadowColor:'black',
    shadowRadius:10,
    shadowOpacity:0.5,
    borderWidth:0.2,
    borderColor:'black'
  },
  inputPromptBox: {
    height:'20%',
    width:'100%',
    //backgroundColor:'white',
    alignItems:'center',
    marginTop:30,
    marginBottom:10,
    padding:0
  },
  timePromptBox: {
    height:'50%',
    width:'100%',
    //backgroundColor:'white',
    alignItems:'center',
    marginTop:10,
    marginBottom:10,
    padding:0
  },
  pickerBox: {
    height:'75%',
    width:'100%',
    flexDirection:'row',
    //backgroundColor:'green',
    justifyContent:'center',
    alignItems:'center'
  },
  promptText: {
    fontSize:20,
    color:'black',
    padding:20,

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
  }
})