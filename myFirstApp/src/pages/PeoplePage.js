import React from "react";
import {
    StyleSheet,
    Text,
    View
} from "react-native";
import Header from "../components/Header";
import PeopleList from "../components/PeopleList";
import axios from "axios";

export default class PeoplePage extends React.Component {
    constructor(props) {
        super(props);
        // We generally use this.state = here, but when we use in another place we need to use this.setState()
        this.state = {
            peoples: []
        };
    }

    // Here we cam call API
    componentDidMount() {
        axios.get("https://randomuser.me/api/?nat=br&results=5").then(response => {
            const {
                results
            } = response.data;
            this.setState({
                peoples: results
            });
        });
    }

    render() {
        return (
                // <View style={styles.container}>
                //   <Header title={'Nome novo'} />
                //   {/* <View style={styles.content}>
                //     <Text style={styles.text}>Welcome to my app!</Text>
                //   </View> */}
                //   <PeopleList peoples={ this.state.peoples }/>
                // </View>

                <View>
                    <Header title = {"Nome novo"}/> 
                    <PeopleList peoples = {this.state.peoples}/> 
                </View >
    );
}
}