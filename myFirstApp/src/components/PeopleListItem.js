import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { capitalizeFirstLetter } from "../utils";

const PeopleListItem = props => {
  const { people } = props;
  const { title, first, last } = people.name;
  return (
    <View style={styles.line}>
      <Text style={styles.textPeople}>{`${capitalizeFirstLetter(title)} ${capitalizeFirstLetter(first)} ${capitalizeFirstLetter(last)}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    justifyContent: "center"
  },
  textPeople: {
    color: "#fff",
    fontSize: 20,
    paddingLeft: 10,
    fontWeight: "bold"
  }
});

export default PeopleListItem;
