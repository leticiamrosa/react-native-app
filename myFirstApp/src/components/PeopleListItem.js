import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { capitalizeFirstLetter } from "../utils";

const PeopleListItem = props => {
  const { people, navigateToPeopleDetail } = props;
  const { title, first, last } = people.name;
  return (
    <TouchableOpacity onPress={() => navigateToPeopleDetail({people})}>
      <View style={styles.line}>
        {/* We can find image from device user, with comp image */}
        <Image
          style={styles.avatar}
          source={{ uri: people.picture.thumbnail }}
        />
        <Text style={styles.textPeople}>{`${capitalizeFirstLetter(
          title
        )} ${capitalizeFirstLetter(first)} ${capitalizeFirstLetter(
          last
        )}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  line: {
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    flexDirection: "row",
    alignItems: "center"
  },
  textPeople: {
    flex: 7,
    color: "#1b2834",
    fontSize: 16,
    paddingLeft: 10,
    fontWeight: "bold"
  },
  avatar: {
    flex: 1,
    aspectRatio: 1,
    marginLeft: 15,
    borderRadius: 25
  }
});

export default PeopleListItem;
