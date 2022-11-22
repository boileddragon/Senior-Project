import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { SearchBar } from "@rneui/themed";

/* Requiring the lodash library for filter */
import _ from "lodash";

/* Sample data (random names) to pull from until can pull from backend */
const API_ENDPOINT = `https://randomuser.me/api/?seed=1&page=1&results=70`;

export default function SearchScreen() {
  /* Hooks for filtering the data set */
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [fullData, setFullData] = useState([]);

  /* Format the returned data from the api */
  const handleSearch = (text) => {
    const formattedQuery = text.toLowerCase();
    const filteredData = _.filter(fullData, (user) => {
      return contains(user, formattedQuery);
    });
    setData(filteredData);
    setQuery(text);
  };

  /* Search by email, first, or last name */
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

  /* Get data from endpoint */
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

  /* Show loading symbol if page is loading still */
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#5500dc" />
      </View>
    );
  }

  /* Show error if data cannot be fetched */
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

      {/* 
      Scrollable list with all of the data to be searched from. 
      It will shrink as user types in search bar. 
      */}
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
