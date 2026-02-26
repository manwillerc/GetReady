import { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button} from "react-native";
import { createStyleBuilder } from "react-native-reanimated/lib/typescript/css/native";
import { background } from "../../styles/background"

export default function Index() {
  
  return (
    <View style={background.container}>
      <Text style={background.title_text}>My Events</Text>
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
    height:'50%',
    width:'50%',
    backgroundColor:'grey'
  },
  textBox: {
    width:200,
    height:30,
    color:'black',
    borderColor:'black',
    borderWidth:1,
    borderRadius:5,
    margin:50
  }
})