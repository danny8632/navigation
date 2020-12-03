import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Post from '../post';

import {Posts} from './../../api/constants';


const PostWrapper = ({post, navigation}) => {
	return (
		<TouchableOpacity style={{marginBottom: 12}} activeOpacity={1} onPress={() => navigation.navigate('POST', { post })}>
			<Post post={post}></Post>
		</TouchableOpacity>
	);
}


const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
			<ScrollView removeClippedSubviews={true}>
				{Posts.map(x => <PostWrapper key={x.id} post={x} navigation={navigation} />)}
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
