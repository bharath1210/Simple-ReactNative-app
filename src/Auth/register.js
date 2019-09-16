import React from "react";

import styles from "./style";
import { Keyboard, Text, View, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements';
import Camera from 'react-native-camera';


class RegisterScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = { userName: '', email: '', password: '' }
    }
    async onLoginPress(props) {
        const { userName, email, password } = this.state;
        if (userName && email && password) {
            // try {
            //     const data = {
            //         userName: userName,
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
upload(props){
    props.navigation.navigate("Camera")

}
    handleInput(key, text) {
        if (key == 'userName') {
            this.setState({ userName: text })

        } else if (key == 'email') {
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
                            <Text style={styles.logoText}>Register</Text>
                            <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} onChangeText={(text) => this.handleInput("userName", text)} />
                            <TextInput placeholder="Email" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} onChangeText={(text) => this.handleInput("email", text)} />
                            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} onChangeText={(text) => this.handleInput('password', text)} />
                            {/* <Button
                                buttonStyle={styles.loginButton}
                                onPress={() => this.upload(this.props)}
                                title="upload"
                            /> */}
                            <Button
                                buttonStyle={styles.loginButton}
                                onPress={() => this.onLoginPress(this.props)}
                                title="Register"
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
    }




}




export default RegisterScreen;