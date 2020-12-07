import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { Button, Validate, TextField } from '../../common';
import AuthContext from '../authContext';

const LoginScreen = () => {
    const { signIn } = React.useContext(AuthContext);
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [usernameError, setUsernameError] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');

    return (
        <View style={styles.container}>
            <View style={styles.inputView}>
                <TextField
                    style={styles.inputText}
                    placeholder="Email or username" 
                    placeholderTextColor="#bbbebf"
                    onChangeText={text => setUsername(text)}
                    value={username}
                    error={usernameError}
                />
            </View>
            <View style={styles.inputView}>
                <TextField
                    style={styles.inputText}
                    placeholder="Password" 
                    placeholderTextColor="#bbbebf"
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={true}
                    value={password}
                    error={passwordError}
                />
            </View>

            <Button title="Login" onPress={() => signIn(username, password)} style={styles.loginBtn} />

            <TouchableOpacity>
                <Text style={styles.loginText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputView: {
        width: '80%',
        backgroundColor: '#465881',
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20
    },
    inputText: {
        height: 50,
        color: 'white'
    },
    loginBtn: {
        width: '80%',
        backgroundColor: '#fb5b5a',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10
      },
    loginText: {
        color: 'white'
    }
});