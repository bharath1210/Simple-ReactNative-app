import React from "react";

import styles from "./style";
import { Keyboard, Text, View, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements';


class LoginScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = { email: '', password: '' }
    }
    async onLoginPress() {
        const { email, password } = this.state;
        if (email && password) {
            // try {
            //     const data = {
            //         email: email,
            //         password: password
            //     }
            //     const response = await fetch('', { method: "POST", body: JSON.stringify(data) })
            //     alert('login success')

            // } catch (error) {
            //     alert('something went wrong')
            // }

            alert('success')


        } else {
            alert('Invalid details')
        }
    }

    handleInput(key, text) {
        if (key == 'email') {
            this.setState({ email: text })

        } else if (key == 'password') {
            this.setState({ password: text })
        }

    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.containerView} behavior="padding">

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.loginScreenContainer}>
                        <View style={styles.loginFormView}>
                            <Text style={styles.logoText}>Instamobile</Text>
                            <TextInput placeholder="Email" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} onChangeText={(text) => this.handleInput('email', text)} />
                            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} onChangeText={(text) => this.handleInput('password', text)} />
                            <Button
                                buttonStyle={styles.loginButton}
                                onPress={() => this.onLoginPress()}
                                title="Login"
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
    }


}




export default LoginScreen;