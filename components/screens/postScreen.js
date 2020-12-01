import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import Post from '../post';

const PostScreen = ({route}) => {

    return (
        <SafeAreaView style={styles.container}>
			<Post post={route.params.post}></Post>
		</SafeAreaView>
    );
}

export default PostScreen;

const styles = StyleSheet.create({
    container : {
		flex: 1
	},
});
