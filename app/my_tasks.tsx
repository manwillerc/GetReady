import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { add_task_window } from "@/styles/add_task_window";
import { router } from "expo-router";
import { background } from "@/styles/background";


export default function myTasks() {
    return (
        <View style={[background.container, {backgroundColor:'white'}]}>
            <Text style={background.title_text}>My Tasks</Text>
        </View>
    );
};