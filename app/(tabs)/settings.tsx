import { Text, View, StyleSheet, } from "react-native";
import { createStyleBuilder } from "react-native-reanimated/lib/typescript/css/native";
import { background } from "../../styles/background"

export default function Index() {
  return (
    <View style={background.container}>
      <Text style={background.title_text}>Settings</Text>
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