import React, { useState, useMemo, useCallback } from "react";
import { Button, View, StyleSheet } from "react-native";

/* Number of months the calendar cam display (backward and forward) */
const RANGE = 12;

export default function CalendarScreen() {
  const [currentdate, setCurrentDate] = useState(new Date().toISOString());
  const [selected, setSelected] = useState(currentdate);

  /* Style marked dates in calendar (i.e. days that had events) */
  const marked = useMemo(() => {
    return {
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: "rgb(25, 45, 83)",
        selectedTextColor: "white",
      },
    };
  }, [selected]);

  /* Change selected day when pressed */
  const onDayPress = useCallback((day) => {
    setSelected(day.dateString);
  }, []);

  return (
    <View>
      <View style={styles.buttonContainer}>
        {/* Button to reset calendar to current day when scrolled to another month */}
        <Button
          title="Current Month"
          onPress={() => setCurrentDate(new Date().toISOString())}
          color="#00adf5"
          style={styles.monthButton}
        />
      </View>
      {/* This is commented out because this library introduced breaking changes to the code, so "react-native-calendars" is no longer installed in the application. However, it did work...mostly.
      
      <CalendarList
        current={currentdate}
        pastScrollRange={RANGE}
        futureScrollRange={RANGE}
        onDayPress={onDayPress}
        markedDates={marked}
        theme={{
          calendarBackground: "white",
          selectedDayBackgroundColor: "#black",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#00adf5",
          dayTextColor: "#2d4150",
          monthTextColor: "rgb(25, 45, 83)",
          indicatorColor: "blue",
          textDayFontWeight: "300",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "300",
          textDayFontSize: 16,
          textMonthFontSize: 18,
          textDayHeaderFontSize: 18,
        }}
      />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderBottomWidth: 2,
    borderColor: "rgb(25, 45, 83)",
  },
});
