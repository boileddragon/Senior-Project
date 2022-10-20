import React, { useState, useEffect } from "react";
import { View, Text, Button, FlatList } from "react-native";
import styled from "styled-components/native";
import { SearchBar } from "@rneui/themed";
import * as countries from "../../../assets/testjson.json";

export default function SearchScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Search</Text>
      <Button
        title="Go to Club Info"
        onPress={() => navigation.navigate("Club Info")}
      />
    </View>
  );
}



{
  /*
function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debounceValue;
}

// Get the values of the countries and sort is alphabetically
const CountryList = () => {
  return countries
    .map((country) => ({
      ...country,
      lowerCaseName: countries.name.toLowerCase(),
    }))
    .sort((a, b) => a.name > b.name);
};

export default function SearchScreen() {
  const [query, setQuery] = useState("");
  const debounceQuery = useDebounce(query, 300);
  const [filteredCountryList, setFilteredCountryList] = useState(CountryList);

  useEffect(() => {
    const lowerCaseQuery = debounceQuery.toLowerCase();
    const newCountries = countryList
      .filter((country) => country.lowerCaseName.includes(lowerCaseQuery))
      .map((country) => ({
        ...country,
        rank: country.lowerCaseName.indexOf(lowerCaseQuery),
      }))
      .sort((a, b) => a.rank - b.rank);

    setFilteredCountryList(newCountries);
  }, [debounceQuery]);

  return (
    <View>
      <SearchBar
        placeholder="Search your countries..."
        onChangeText={setQuery}
        value={query}
      />
      <FlatList
        keyExtractor={(item, index) => `${index}`}
        data={filteredCountryList}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
}
*/
}