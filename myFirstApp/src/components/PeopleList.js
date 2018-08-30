import React from "react";
import { View, Text, StyleSheet } from "react-native";

import PeopleListItem from "./PeopleListItem";

// We have just only element, so we dont use ()
const PeopleList = props => {
  // pick for props
  const { peoples } = props;

  // // We use variable people instand of this.props for pass information for element
  // const textElements = peoples.map(people => {
  //     const { first } = people.name; // We pick just first name for people
  //     return (
  //      <View key={ first } style={styles.line}>
  //          <Text style={styles.textPeople}>{ first }</Text>
  //     </View>
  // );
  //   });

  const items = peoples.map(people => {
    return <PeopleListItem key={people.name.first} people={people} />;
  });

  return <View style={styles.content}>{items}</View>;
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#333"
  }
});

export default PeopleList;
