import React, { useState, useMemo, useCallback } from "react";
import { Button, View, StyleSheet } from "react-native";
import { CalendarList } from "react-native-calendars";

const RANGE = 12;
const initialDate = "2022-10-20";

export default function CalendarScreen() {
  const [currentdate, setCurrentDate] = useState(new Date().toISOString());
  const [selected, setSelected] = useState(initialDate);

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

  const onDayPress = useCallback((day) => {
    setSelected(day.dateString);
  }, []);

  return (
    <View>
      <View style={styles.buttonContainer}>
        <Button
          title="Current Month"
          onPress={() => setCurrentDate(new Date().toISOString())}
          color="#00adf5"
          style={styles.monthButton}
        />
      </View>
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
        enableSwipeMonths={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderBottomWidth: 2,
    borderColor: "rgb(25, 45, 83)",
  },
});
