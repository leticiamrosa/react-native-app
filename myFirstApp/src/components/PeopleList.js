import React from 'react';
import {
    View,
    Text
} from 'react-native';

// We have just only element, so we dont use () 
const PeopleList = props => {
    // pick for props
    const { peoples } = props;

    // We use variable people instand of this.props for pass information for element
    const textElements = peoples.map(people => {
        const { first } = people.name; // We pick just first name for people
        return <Text key={ first }>{ first }</Text>;
      });

    return(
        <View>
            { textElements }
        </View>
    )
};

export default PeopleList;