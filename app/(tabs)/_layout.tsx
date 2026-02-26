import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import { useFonts } from 'expo-font';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabsLayout() {
  
  const [loaded] = useFonts({
    'Oswald': require('../../assets/fonts/Oswald-Medium.ttf'),
    'Roboto': require('../../assets/fonts/RobotoCondensed-Regular.ttf'),
    'Roboto-Bold': require('../../assets/fonts/RobotoCondensed-ExtraBold.ttf'),
    'Arimo': require('../../assets/fonts/Arimo-Regular.ttf'),
    'Manrope': require('../../assets/fonts/Manrope-Regular.ttf')
  });

  if (!loaded) return null;
  
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />
        }}
      />
      <Tabs.Screen
        name="add_event"
        options={{
          title: "New Event",
          tabBarIcon: ({ color, size }) => <Entypo name="squared-plus" size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => <FontAwesome name="user-circle-o" size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => <Ionicons name="settings" color={color} size={size} />
        }}
      />
      
    </Tabs>
  );
};