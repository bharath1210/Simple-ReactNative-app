import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';


class LandingScreen extends React.Component {
    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.start}>Get started now</Text>
                {/* <LoginScreen /> */}
                <Button large buttonStyle={styles.register} onPress={() => this.props.navigation.navigate("Register")} title="Register Now" />
                <Text style={styles.login}>Exisiting user? <Text onPress={() => this.props.navigation.navigate("Login")} style={{ color: '#5ad9dd', fontWeight: 'bold', fontSize: 18 }}> Login now</Text></Text>
            </View >
        );
    }

    onFbLoginPress = () => {
        alert('hi')
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    start: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 200,
        marginBottom: 30
    },
    register: {
        height: 45,
        paddingHorizontal: 50,
        paddingVertical: 20,
        backgroundColor: '#5ad9dd',
    },
    login: {
        marginTop: 20
    }
});


export default LandingScreen;

