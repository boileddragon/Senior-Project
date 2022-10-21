import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { SearchBar } from "@rneui/themed";

const API_ENDPOINT = `https://randomuser.me/api/?seed=1&page=1&results=20`;

// Requiring the lodash library for filter
const _ = require("lodash");

export default function SearchScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const [query, setQuery] = useState("");
  const [fullData, setFullData] = useState([]);

  const handleSearch = (text) => {
    const formattedQuery = text.toLowerCase();
    const filteredData = _.filter(fullData, (user) => {
      return contains(user, formattedQuery);
    });
    setData(filteredData);
    setQuery(text);
  };

  const contains = ({ name, email }, query) => {
    const { first, last } = name;

    if (
      first.includes(query) ||
      last.includes(query) ||
      email.includes(query)
    ) {
      return true;
    }

    return false;
  };

  useEffect(() => {
    setIsLoading(true);

    fetch(API_ENDPOINT)
      .then((response) => response.json())
      .then((response) => {
        setData(response.results);
        setFullData(response.results);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#5500dc" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 18 }}>
          Error fetching data... Check your network connection!
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search for a Club..."
        onChangeText={(queryText) => handleSearch(queryText)}
        value={query}
        lightTheme={true}
      />
      <FlatList
      style={styles.flatlist}
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <View>
            <View style={styles.metaInfo}>
              <Text
                style={styles.title}
              >{`${item.name.first} ${item.name.last}`}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatlist: {
    flexGrow: 0,
    height: "100%",
    borderBottomWidth: 2,
    borderBottomColor: "rgb(25, 45, 83)",
    backgroundColor: "white",
  },
  title: {
    fontSize: 18,
    width: "100%",
    padding: 10,
  },
});
