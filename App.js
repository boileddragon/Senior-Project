import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/screens/HomeView.js';
import LoginScreen from './app/screens/LoginView.js';
import AccountScreen from './app/screens/AccountView';
import CalendarScreen from './app/screens/CalendarView';
import ClubInfoScreen from './app/screens/ClubInfoView';
import LocationsScreen from './app/screens/MapView';
import MessageScreen from './app/screens/MessagingView';
import SearchScreen from './app/screens/SearchView';
import SettingsScreen from './app/screens/SettingsView';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="ClubInfo" component={ClubInfoScreen} />
        <Stack.Screen name="Locations" component={LocationsScreen} />
        <Stack.Screen name="Messaging" component={MessageScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;