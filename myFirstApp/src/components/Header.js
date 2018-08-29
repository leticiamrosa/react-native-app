import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

// Stateless | Functional
// We can use anything here, for exemple:
// We can use props.titulo, but when we callback in another comp, we'll call titulo={'string'}, titulo={number}, titulo={function }
const Header = (props) => (
    <View style={styles.navBar}>
        <Text style={styles.navBarButton}>Back</Text>
        <Text style={styles.navBarHeader}>{props.title}</Text>
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