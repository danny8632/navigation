import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View, Text, Hyperlink } from 'react-native';
import Post from '../post';


const Description = ({post}) => {
    return (
        <View style={styles.description}>
            <View style={{flexDirection: 'row'}}>
                <Text><Text style={{fontWeight: "bold"}} onPress={() => console.log("clock")}>{post.username} </Text>{post.description}</Text>
            </View>
        </View>
    );
}


const PostScreen = ({route}) => {

    return (
        <SafeAreaView style={styles.container}>
			<Post post={route.params.post}></Post>
            <Description post={route.params.post}></Description>
		</SafeAreaView>
    );
}

export default PostScreen;

const styles = StyleSheet.create({
    container : {
		flex: 1
    },
    description : {
        width : "100%",
        borderTopWidth : 1,
        borderColor: "#20232a",
        paddingTop: 4,
        paddingBottom: 0,
        paddingLeft : 10,
        paddingRight : 10
    },
    description_text : {
        flex: 1,
        flexDirection: "row",
        width : "100%",
    }
});
