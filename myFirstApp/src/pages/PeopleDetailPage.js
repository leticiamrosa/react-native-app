import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default class PeopleDetailPage extends React.Component {
  render() {
    const { people } = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <Image source={{ uri: people.picture.large }} style={styles.avatar} />
        <View style={styles.detailContainer}>
          <View style={styles.line}>
            <Text style={styles.cell}>Email: </Text>
            <Text style={styles.cellDetail}>{people.email}</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.cell}>City: </Text>
            <Text style={styles.cellDetail}>{people.location.city}</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.cell}>State: </Text>
            <Text style={styles.cellDetail}>{people.location.state}</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.cell}>Phone: </Text>
            <Text style={styles.cellDetail}>{people.phone}</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.cell}>Cel.: </Text>
            <Text style={styles.cellDetail}>{people.cell}</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.cell}>Nat: </Text>
            <Text style={styles.cellDetail}>{people.nat}</Text>
          </View>
           
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  avatar: {
    aspectRatio: 1,
    borderRadius: 200
  },
  detailContainer: {
    backgroundColor: "#c2dbf4",
    marginTop: 16,
    elevation: 1
  },
  line: {
    flexDirection: 'row',
    padding: 8,
    borderWidth: 1,
    borderBottomColor: '#c2dbf4'
  },
  cell: {
      fontWeight: 'bold',
      paddingRight: 8
    
  }
});
