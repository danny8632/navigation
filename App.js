
import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Post from './components/post';



export default () => {

	let post = {title : "hello dads adasdas da sad", username : "tetser1234"}

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView contentContainerStyle={styles.scroll} >
				<Post post={post}></Post>
				<Post post={post}></Post>
				<Post post={post}></Post>
				<Post post={post}></Post>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container : {
		flex: 1,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
	},
	scroll : {
		flexGrow: 1,
		justifyContent: 'space-between'
	},
	post_title : {
		flexDirection: "row",
		width: '100%',
		alignItems: "center",
		backgroundColor: "#999",
		paddingLeft: 16
	}
});
