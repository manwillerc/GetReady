import { Text, View, StyleSheet, TouchableOpacity, } from "react-native";
import { createStyleBuilder } from "react-native-reanimated/lib/typescript/css/native";
import { background } from "../../styles/background"
import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";

export default function Index() {
  return (
    <View style={[background.container, {backgroundColor:'white'}]}>
        <Text style={background.title_text}>
            Profile
        </Text>
        <Ionicons
            name="person-circle"
            size={120}
            color='color'
        />
        <TouchableOpacity
            style={{
                backgroundColor: "#0080FE",
                padding:10,
                borderRadius: 10,
                borderWidth:0,
                borderColor:'lightgrey',
                marginTop:45,
                marginBottom:45,
                width:'60%',
                alignItems:'center'
                }}
            onPress={
                () => router.push("/add_task")
            }
            
        >
            <Text style={{fontFamily:'Manrope', fontSize:20, color:'white'}}>Add New Task</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={{
                backgroundColor: "white",
                padding:10,
                borderRadius: 0,
                borderBottomWidth:0.5,
                borderTopWidth:0.5,
                borderColor:'lightgrey',
                marginTop:0,
                width:'100%',
                alignItems:'center'
                }}
            onPress={
                () => router.push("/my_tasks")
            }
            
        >
            <Text style={{fontFamily:'Manrope', fontSize:20}}>My Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={{
                backgroundColor: "white",
                padding:10,
                borderRadius: 0,
                borderBottomWidth:0.5,
                borderTopWidth:0,
                borderColor:'lightgrey',
                marginTop:0,
                width:'100%',
                alignItems:'center'
                }}
            onPress={
                () => router.push("/add_task")
            }
            
        >
            <Text style={{fontFamily:'Manrope', fontSize:20}}>Edit/Delete Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={{
                backgroundColor: "white",
                padding:10,
                borderRadius: 0,
                borderBottomWidth:0.5,
                borderTopWidth:0,
                borderColor:'lightgrey',
                marginTop:0,
                width:'100%',
                alignItems:'center'
                }}
            onPress={
                () => router.push("/add_task")
            }
            
        >
            <Text style={{fontFamily:'Manrope', fontSize:20}}>Recent Events</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={{
                backgroundColor: "white",
                padding:10,
                borderRadius: 0,
                borderBottomWidth:0.5,
                borderTopWidth:0,
                borderColor:'lightgrey',
                marginTop:0,
                width:'100%',
                alignItems:'center'
                }}
            onPress={
                () => router.push("/add_task")
            }
            
        >
            <Text style={{fontFamily:'Manrope', fontSize:20}}>Statistics</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F0F0F0',
    alignItems:'center'
  },
  titleText: {
    fontSize:50,
    color:'white',
  }
})