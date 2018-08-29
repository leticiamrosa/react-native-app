import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

// Stateless | Functional

const Header = (props) => (
    <View style={styles.navBar}>
        <Text style={styles.navBarButton}>Back</Text>
        <Text style={styles.navBarHeader}>People</Text>
        <Text style={styles.navBarButton}>More</Text>
    </View>
);

export default Header;


const styles = StyleSheet.create({
    navBar: {
      flexDirection: 'row',
      backgroundColor: '#c22dd5',
      height: 64,
      paddingTop: 30
    },
    navBarButton: {
        color: '#fff',
        textAlign: 'center',
        width: 64
    },
    navBarHeader: {
        flex: 1,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    }
  });