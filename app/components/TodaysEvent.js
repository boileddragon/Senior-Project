import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { View, Text, Pressable } from "react-native";

export default function TodaysEvent() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Event Title</Text>
      <Text>Club name</Text>
      <Text>Details</Text>
      <Text>Location</Text>
      <Text>Time</Text>
      <Pressable onPress={() => navigation.navigate("Calendar")}>
        <Text>Date</Text>
      </Pressable>
    </View>
  );
}
{
  /* 
    <Container>
      <Event>
        <EventTitle value="title" >Event Title</EventTitle>
        <ClubName value="clubName" >Club Name</ClubName>
        <Details value="details" >Details</Details>
        <Location value="location" >Location</Location>
        <Time value="time" >Time</Time>
        <PressableNavigation onPress={() => navigation.navigate("Calendar")}>
          <PressableText value="date" >Date</PressableText>
        </PressableNavigation>
      </Event>
    </Container>
    
  );
}

const Container = styled.View`
  align-items: center;
`;

const EventTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

const ClubName = styled.Text`
  font-size: 15px;
`;

const Details = styled.Text`
  left: 15px;
  font-size: 14px;
`;

const Location = styled.Text`
  font-size: 14px;
  left: 15px;
`;

const Time = styled.Text`
  font-size: 14px;
  left: 15px;
`;

const PressableNavigation = styled.Pressable`
  left: 15px;
`;

const PressableText = styled.Text`
  font-size: 14px;
  color: #00adf5;
`;

const Event = styled.View`
  border: 1px solid #ccc;
  margin: 5px 0;
  border-radius: 10px;
  box-shadow: 1px 1px 1px rgb(25, 45, 83);
  background-color: #fff;
  width: 90%;
  padding: 10px;
`;
*/
}
