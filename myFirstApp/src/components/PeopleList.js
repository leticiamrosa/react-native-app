import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import PeopleListItem from "./PeopleListItem";

// We have just only element, so we dont use ()
const PeopleList = props => {
  // pick for props
  const { peoples, onPressItem } = props;

  // // We use variable people instand of this.props for pass information for element
  // const textElements = peoples.map(people => {
  //     const { first } = people.name; // We pick just first name for people
  //     return (
  //      <View key={ first } style={styles.line}>
  //          <Text style={styles.textPeople}>{ first }</Text>
  //     </View>
  // );
  //   });

  return (
    <FlatList
      style={styles.content}
      data={peoples}
      renderItem={({ item }) => (
        <PeopleListItem people={item} 
        navigateToPeopleDetail={onPressItem} />
      )}
      keyExtractor={item => item.name.first}
    />
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#c2dbf4"
  }
});

export default PeopleList;
