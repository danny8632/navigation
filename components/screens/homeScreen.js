import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import Post from '../post';


const PostWrapper = ({post, navigation}) => {
	return (
		<TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('POST', { post, name: 'Custom profile header' })}>
			<Post post={post}></Post>
		</TouchableOpacity>
	);
}


const HomeScreen = ({ navigation }) => {

    let post = [{
		title : "hello dads adasdas da sad", 
		username : "åååååå",
		image : 'https://picsum.photos/200'
	},{
		title : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo", 
		username : "dawdawdawdaw",
		image : 'https://picsum.photos/200'
	},{
		title : "hello dads adasd1212312312 sad", 
		username : "12345",
		image : 'https://picsum.photos/200'
	},{
		title : "jsdkl fsdfjdsl jkldsa ", 
		username : "tetser12345555",
		image : 'https://picsum.photos/200'
	},{
		title : "hello dads adasdas da sad", 
		username : "tetser123499",
		image : 'https://picsum.photos/200'
	}]

    return (
        <SafeAreaView style={styles.container}>
			<ScrollView>
				{post.map(x => <PostWrapper key={x.username} post={x} navigation={navigation} />)}
			</ScrollView>
		</SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container : {
		flex: 1
	}
});
