import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import styled from "styled-components/native";

export default function UpdateEvent() {
  const navigation = useNavigation();
  return (
    <Container>
      <Event>
        <EventTitle>Event Title</EventTitle>
        <ClubName>Club Name</ClubName>
        <Details>Details</Details>
        <Location>Location</Location>
        <PressableNavigation onPress={() => navigation.navigate("Calendar")}>
          <PressableText>Time, Date</PressableText>
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

const PressableNavigation = styled.Pressable`
  left: 15px;
`;

const PressableText = styled.Text`
  font-size: 14px;
  color: #00adf5;
`;

const Location = styled.Text`
  font-size: 14px;
  left: 15px;
`

const Event = styled.View`
  border: 1px solid #ccc;
  margin: 5px 0;
  border-radius: 10px;
  box-shadow: 1px 1px 1px rgb(25, 45, 83);
  background-color: #fff;
  width: 90%;
  padding: 10px;
`;
