import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

import PeopleList from "../components/PeopleList";
import axios from "axios";

export default class PeoplePage extends React.Component {
  constructor(props) {
    super(props);
    // We generally use this.state = here, but when we use in another place we need to use this.setState()
    this.state = {
      peoples: [],
      loading: false
    };
  }

  // Here we cam call API
  componentDidMount() {
    this.setState({ loading: true });
    setTimeout(() => {
      axios
        .get("https://randomuser.me/api/?nat=br&results=150")
        .then(response => {
          const { results } = response.data;
          this.setState({
            peoples: results,
            loading: false
          });
        });
    }, 1500);
  }

  renderLoading() {
    if (this.state.loading) {
      return <ActivityIndicator size="large" color="#009bef" />;
    } else {
      return null;
    }
  }

  render() {
    // this.props.navigation.navigate( /* Chave da página, state*/ )
    // state = dados que queremos passar;

    return (
      // <View style={styles.container}>
      //   <Header title={'Nome novo'} />
      //   {/* <View style={styles.content}>
      //     <Text style={styles.text}>Welcome to my app!</Text>
      //   </View> */}
      //   <PeopleList peoples={ this.state.peoples }/>
      // </View>

      <View>
        {this.renderLoading()}
        <PeopleList
          peoples={this.state.peoples}
          onPressItem={pageParams => {
            this.props.navigation.navigate("PeopleDetail", pageParams);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});
