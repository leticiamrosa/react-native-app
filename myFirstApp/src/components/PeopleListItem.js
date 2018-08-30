import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { capitalizeFirstLetter } from "../utils";

const PeopleListItem = props => {
  const { people } = props;
  const { title, first, last } = people.name;
  return (
    <View style={styles.line}>
      {/* We can find image from device user, with comp image */}
      <Image style={styles.avatar} source={ { uri: people.picture.thumbnail } } />
      <Text style={styles.textPeople}>{`${capitalizeFirstLetter(
        title
      )} ${capitalizeFirstLetter(first)} ${capitalizeFirstLetter(last)}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    flexDirection: 'row',
    alignItems: 'center'
  },
  textPeople: {
    color: "#fff",
    fontSize: 20,
    paddingLeft: 10,
    fontWeight: "bold"
  },
  avatar: {
    aspectRatio: 1,
    width: 48
  }
});

export default PeopleListItem;
