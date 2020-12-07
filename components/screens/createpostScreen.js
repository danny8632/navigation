import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

const CreatepostScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Create post</Text>
		</SafeAreaView>
    );
}

export default CreatepostScreen;

const styles = StyleSheet.create({
    container : {
		flex: 1
	}
});