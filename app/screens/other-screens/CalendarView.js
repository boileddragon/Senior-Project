import * as React from "react";
import { Button, View, Text } from "react-native";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';


export default function CalendarScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Calendar />
    </View>
  );
}