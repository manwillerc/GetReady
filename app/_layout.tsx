import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen 
          name="(tabs)"
        />

        <Stack.Screen 
          name="add_task" 
          options={{
          presentation: "modal",
          title:'Add a task'
          }}
        />
        <Stack.Screen 
          name="my_tasks" 
          options={{
          presentation: "modal",
          title:'My Tasks'
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
